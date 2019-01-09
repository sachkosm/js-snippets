It is unsafe to use componentWillUpdate for this purpose in async mode, 
because the external callback might get called multiple times for a single update. 
Instead, the componentDidUpdate lifecycle should be used since it is guaranteed to be invoked only once per update.

Replace this:

// Before
class ExampleComponent extends React.Component {
  componentWillUpdate(nextProps, nextState) {
    if (
      this.state.someStatefulValue !==
      nextState.someStatefulValue
    ) {
      nextProps.onChange(nextState.someStatefulValue);
    }
  }
}


With this:

// After
class ExampleComponent extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.someStatefulValue !==
      prevState.someStatefulValue
    ) {
      this.props.onChange(this.state.someStatefulValue);
    }
  }
}

