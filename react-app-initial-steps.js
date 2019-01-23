
npx create-react-app my-app

npm install --save react-router-dom

https://facebook.github.io/create-react-app/docs/getting-started

https://reacttraining.com/react-router/web/example/basic  - add routing

npm install redux react-redux redux-thunk --save

Create store: https://medium.com/backticks-tildes/setting-up-a-redux-project-with-create-react-app-e363ab2329b8

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/RootReducer';
export default function configureStore(initialState={}) {
 return createStore(
  rootReducer,
   applyMiddleware(thunk)
 );
}

add actions-registry
add actions
add reducers
add combine reducers
connect components to redux

https://redux.js.org/basics/usage-with-react

add material-ui or other library

example:




    "dependencies": {
        "@babel/runtime": "7.0.0-beta.46",
        "@material-ui/core": "3.0.0",
        "@material-ui/icons": "3.0.0",
        "ajv": "6.5.2",
        "axios": "0.18.0",
        "babel-core": "6.22.1",
        "babel-loader": "6.2.10",
        "babel-plugin-add-module-exports": "0.1.2",
        "babel-plugin-react-html-attrs": "2.0.0",
        "babel-plugin-transform-class-properties": "6.3.13",
        "babel-plugin-transform-decorators-legacy": "1.3.4",
        "babel-plugin-transform-object-rest-spread": "6.22.0",
        "babel-plugin-transform-react-jsx": "6.22.0",
        "babel-plugin-transform-runtime": "6.23.0",
        "babel-polyfill": "6.26.0",
        "babel-preset-es2015": "6.22.0",
        "babel-preset-react": "6.22.0",
        "babel-preset-stage-1": "6.3.13",
        "concurrently": "3.5.0",
        "create-react-class": "15.6.3",
        "cross-env": "5.2.0",
        "cross-fetch": "2.1.0",
        "css-loader": "1.0.0",
        "downshift": "1.31.12",
        "eslint": "5.6.0",
        "eslint-config-airbnb": "17.1.0",
        "eslint-plugin-import": "2.14.0",
        "eslint-plugin-jsx-a11y": "6.1.1",
        "eslint-plugin-react": "7.11.1",
        "express": "4.15.2",
        "extract-text-webpack-plugin": "2.0.0-rc.3",
        "file-loader": "1.1.11",
        "golden-layout": "1.5.9",
        "less": "2.7.2",
        "less-loader": "4.0.4",
        "lodash": "4.17.10",
        "material-ui": "1.0.0-beta.38",
        "material-ui-icons": "1.0.0-beta.36",
        "numeral": "2.0.6",
        "openfin-cli": "1.1.5",
        "path": "0.12.7",
        "prop-types": "15.6.1",
        "react": "16.4.1",
        "react-autowhatever": "10.2.0",
        "react-bootstrap": "0.32.1",
        "react-bootstrap-table": "4.1.1",
        "react-card-flip": "0.2.1",
        "react-contexify": "3.0.1",
        "react-context-menu": "1.1.0",
        "react-dd-menu": "2.0.2",
        "react-dom": "16.4.1",
        "react-dom-factories": "1.0.2",
        "react-drag-and-zoom": "1.1.3",
        "react-draggable": "3.0.5",
        "react-full-screen": "0.2.2",
        "react-grid-layout": "0.16.6",
        "react-orgchart": "1.0.5",
        "react-redux": "5.0.7",
        "react-router": "4.2.0",
        "react-router-dom": "4.2.2",
        "react-s-alert": "1.4.1",
        "react-scripts": "1.1.1",
        "react-sidenav": "2.1.2",
        "react-tabtab": "1.4.0",
        "react-tippy": "1.2.2",
        "recharts": "1.0.0-beta.10",
        "recompose": "0.26.0",
        "redux": "3.7.2",
        "redux-logger": "3.0.6",
        "redux-persist": "5.9.1",
        "redux-thunk": "2.2.0",
        "shallow-equal": "1.0.0",
        "style-loader": "0.21.0",
        "typeface-roboto": "0.0.54",
        "webpack": "3.12.0"
    }


add jest

add sass/scss
npm install --save-dev node-sass
node-sass --include-path sass INPUT_FILE.scss OUTPUT_FILE.css

//package.json
"scripts": {
"sass:compile": "node-sass --include-path sass INPUT_FILE.scss OUTPUT_FILE.css",
}
https://medium.com/@jstubblefield7939/getting-started-with-sass-scss-and-nodejs-6f7b4589aaf2
 
 



utils:
 https://cssbuilder.veliovgroup.com/
 
 

