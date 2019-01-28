
Redux
1. createStore - provides:
    - store object
    - subscribe
    - dispatch
    - getState
    
Reac-Redux    
2. Provider is the parent of all connected components
    - Provider subcribes itself as listener by providing a function to change it's state 

3. store.dispatch - will execute:
    - currentReducer ( combined reducers )
    - execute all subscribed listeners by executing the Provider's function to change it's state
    - will return back whathever it was passed as parameter ( it is object or function or promiss )
    
4. Changing the state of the Provider will pass all props to it's children components

5. All childen will be called witht he new props

6. Depending on if the new props used by a component are diferent or not  - the conponents will be rerendered or not 
  if they have been connected with connect
  
7. Connect wraps the compnents and provides the props from the redux store

Redux-Thunk
It provides a third-party extension point between dispatching an action, and the moment it reaches the reducer. 
8. Replaces the store.dispatch function with another function that will do something and then return original dispatch
( it is added when the store is created - createStore)
    - in case the action is a function
        - it will execute the function and return to the dispacher the result from that function, the dispatch will return it also
            - in case the return is promiss - then we can use dispath(action).then(result){}

    - in case it is a plain object will just pass it to the dispacher for processing
  
  

