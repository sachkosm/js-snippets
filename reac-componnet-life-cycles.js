
Mounting
These methods are called in the following order when an instance of a component is being created and inserted into the DOM:

1. constructor()
2. static getDerivedStateFromProps()
3. render()
4. componentDidMount()

=======================
Updating
An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered:

1. static getDerivedStateFromProps()
2. shouldComponentUpdate()
3. render()
4. getSnapshotBeforeUpdate()
5. componentDidUpdate()

=======================
== All lifecycles ====
1. constructor()
2. componentWillReceiveProps(nextProps) ==> UNSAFE_componentWillReceiveProps - will be depricated
3. componentWillMount() ==> will be depricated UNSAFE_componentWillMount() - move code to ==> componentDidMount()
4. componentDidMount()
5. componentWillUnmount() ==> will be depricated UNSAFE_componentWillUpdate() - move code to -> componentDidUpdate()
6. componentWillUpdate(nextProps, nextState)
7. componentDidUpdate(prevProps, prevState, snapshot)
8. componentDidCatch(error, info)
9. shouldComponentUpdate(nextProps, nextState)
10. static getDerivedStateFromProps(props, state)
11. getSnapshotBeforeUpdate(prevProps, prevState)

------
12. forceUpdate() - component.forceUpdate(callback)
13. MyComponnet.defaultProps = {
  color: 'blue'
}; this.setState((prevState, props) => {
  return {counter: prevState.counter + props.step};
});
14. this.setState((prevState, props) => {
  return {counter: prevState.counter + props.step};
});
Never mutate this.state directly, as calling setState() afterwards may replace the mutation you made. Treat this.state as if it were immutable.
-----------------------------------

Where in the component lifecycle should I make an AJAX call?
You should populate data with AJAX calls in the componentDidMount lifecycle method.
This is so you can use setState to update your component when the data is retrieved.
