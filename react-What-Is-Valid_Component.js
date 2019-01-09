Function that:

1. accepts a single “props”
2. returns a React element 

is a valid React Component.


Example 1:

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

Example 2:

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}



Example 1 is equivalent to Example 2 from React point of view.



Example 2 is a class and Classes have some additional features:

1. props are 'this.props"
2. must have "render" method
3. can have local state this.state
4. can have a "constructor(props)"
5. have Life Cycle Methods




