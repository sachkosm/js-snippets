Element
1. It is not a function
2. It is a pointer to HTML element or React Component
3. Returns HTML Dom element
4. Does not accept props
5. Does not have state
6. It is cheap because it is an object
7. We use it because it will be included into the React Dom and it will be controlled by React
8. Uses "return" has no methods - has no "render"


Fictional Component
1. It is a Function
2. Accept argument as object called "props"
3. Returns Element(s)
4. Can apply the props to the output element
5. Can be called as a function
6. Has no state
7. Has no "render" method although can have inside functions and bars
8. Has no Constructor


Class Component
1. It is a Class - not a function
2. As class it has a Constructor(props)
3. Constructor must call super(prop)
4. It can have "State" - state
5. It must define method "render"
6. Method render will be called by React.Dom()
7. The Constructor will be called first with props as argument automatically
8. It has lifecycle hooks (callback) where we can specify function to be executed at the lifecycle stages - like componentWillMount, componentDidMount etc..

Pure Component
1. Shallow comparison on both props and state
2. Handles shouldComponentUpdate automatically
3. Instead of mutating 'props' create new object for 'props'

Render method can have only one top HTML tag or Component
It can have multiple nested tags or Components

React.Dom updates the Browser Dom only if state has been modified and it is different then the current browser dom

Props should not be modified.
State can be modified.

Props can be used to modify state or to create new props that can be send back to the Component to be rendered with the new props.

The compare between React.Dom and Browser.Dom is shallow.
If a deep leaf of a prop or state is made - all parent objects in the tree up to the top must be update by cloning.

State should modified by calling setState( { statePropName: newValue }) not directly
