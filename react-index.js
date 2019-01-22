import 'babel-polyfill'
import React from 'react';
import { createLogger } from 'redux-logger'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { HashRouter as Router, Route } from 'react-router-dom'
import { PersistGate } from 'redux-persist/lib/integration/react'
import thunkMiddleware from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // default: localStorage if web, AsyncStorage if react-native
import "ag-grid-community/dist/styles/ag-grid.css"
import "ag-grid-community/dist/styles/ag-theme-fresh.css"
import "ag-grid-community/dist/styles/ag-theme-blue.css"
import "ag-grid-community/dist/styles/ag-theme-dark.css"
import "ag-grid-community/dist/styles/ag-theme-balham-dark.css"
import "ag-grid-community/dist/styles/ag-theme-balham.css"
import 'golden-layout/src/css/goldenlayout-base.css'
import 'golden-layout/src/css/goldenlayout-light-theme.css'
import App from './common/containers/App'
import rootReducer from './rootReducer'
import { initSectionsStore } from './section/actions'
import { initCommonStore } from './common/actions'
import { initAnotherPageStore } from './common/actions'


const loggerMiddleware = createLogger()

// initialize store and make it persist on refresh
const config = {
    key: 'root',
    storage,
    whitelist: [], // parts of store you DO want to persist/rehydrate
    // blacklist: ['drawerOpen', 'reports'] // parts of store you DON'T want to persist/rehydrate
}
const reducer = persistReducer(config, rootReducer)
let store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunkMiddleware, loggerMiddleware)
)
let persistor = persistStore(store, {})

const Root = ({ store, persistor }) => (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <Router>
                <Route path="/" component={App} />
            </Router>
        </PersistGate>
    </Provider>
)

let url = document.URL.split("/")
let renderStore
let env = url[url.length - 1].split('?')[1]
let component = url[url.length - 1].split('?')[0]

if (component === '') {
    renderStore = initSectionsStore(env)
}

else if (component === 'anotherPage') {
    renderStore = initAnotherPageStore(env)
}

else {
    renderStore = initCommonStore()
}

store.dispatch(renderStore)
    .then(() => render(<Root store={store} persistor={persistor} />, document.getElementById('root')))
