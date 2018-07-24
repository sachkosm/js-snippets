Element
1. It is not a function
2. It is a pointer to HTML element or React Component
3. Returns HTML Dom element
4. Does not accept props
5. Does not have state
6. It is cheap because it is an object
7. We use it because it will be included into the React Dom and it will be controlled by React
8. Uses "return" has no methods - has no "render"
----- example ----------------------------

const element = <h1>Hello, world!</h1>;

------------------------------------------

Functional (stateLess) Component
1. It is a Function
2. Accept argument as object called "props"
3. Returns Element(s)
4. Can apply the props to the output element
5. Can be called as a function
6. Has no state
7. Has no "render" method although can have inside functions and vars
8. Has no Constructor

For simple, presentational-only components that need to be easily reused,
prefer stateless functional components.
This way you're sure they are decoupled from the actual app logic, that
they are dead-easy to test and that they don't have unexpected side effects.
The exception is if for some reason you have a lot of them or if you really
need to optimise their render method (as you can't define shouldComponentUpdate for a stateless functional component).
----- example ----------------------------

const MyComponent = ({ name }) => {
  return <h1>Hello {name}</h1>
}

------------------------------------------

Pure Component
1. Shallow comparison on both props and state
2. Doesn’t rpovide shouldComponentUpdate() lifecycle hook.
2. Handles shouldComponentUpdate() automatically.
3. Instead of mutating 'props' create new object for 'props'

If your React component’s render() function renders the same result given the same props
and state, you can use React.PureComponent for a performance boost in some cases.
Extend PureComponent if you know your output depends on simple props/state
("simple" meaning no nested data structures, as PureComponent performs a shallow compare)
AND you need/can get some performance improvements.
----- example ----------------------------

class MyComponent extends React.PureComponent {
  render() {
    return <h1>Hello {this.props.name}</h1>
  }
}

------------------------------------------

Class Component
1. It is a Class - not a function
2. As class it has a Constructor(props)
3. Constructor must call super(prop)
4. It can have "State" - state
5. It must define method "render"
6. Method render will be called by React.Dom()
7. The Constructor will be called first with props as argument automatically
8. It has lifecycle hooks (callback) where we can specify function to be executed at the lifecycle stages -
like componentWillMount, componentDidMount etc..

Extend Component and implement your own shouldComponentUpdate if you need some performance gains by performing
custom comparison logic between next/current props and state. For example, you can quickly perform a deep comparison using lodash#isEqual:


Render method can have only one top HTML tag or Component
It can have multiple nested tags or Components

React.Dom updates the Browser Dom only if state has been modified and it is different then the current browser dom

Props should not be modified.
State can be modified.

Props can be used to modify state or to create new props that can be send back to the Component to be rendered with the new props.

The compare between React.Dom and Browser.Dom is shallow.
If a deep leaf of a prop or state is made - all parent objects in the tree up to the top must be update by cloning.

State should modified by calling setState( { statePropName: newValue }) not directly
----- example ----------------------------

import React from 'react';

class Component extends React.Component {
  constructor(props, context){
    super(props);
    this.state = {name: props.name};
  }
  render() {
    return <div>{this.state.name}</div>;
  }
}

export default Component;

------------------------------------------
