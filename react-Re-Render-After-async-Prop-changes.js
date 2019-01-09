

Forcing you to keep it in the state explicitly lets React not hold onto the previous props object in the majority of use cases in 
the future. So this is better from memory usage perspective.

Regarding duplication, you could write it like this to avoid the duplication:


class ListSomeThingsV1 extends Component {
  static getDerivedStateFromProps(props, state) {
    if (props.allTheThings !== state.prevAllTheThings) {
      return {
        prevAllTheThings: props.allTheThings,
        someThings: props.allTheThings.filter((thing) => !thing.hide);
      }
    }
    return null;
  }
  state = {
    prevAllTheThings: [],
    someThings: [],
  };
}



Those initial values will be overridden anyway. Don’t forget getDerivedStateFromProps gets called for before the first render too.


Example 2

class ExampleComponent extends React.Component {
  // Initialize state in constructor,
  // Or with a property initializer.
  state = {
    isScrollingDown: false,
    lastRow: null,
  };

  static getDerivedStateFromProps(props, state) {
    if (props.currentRow !== state.lastRow) {
      return {
        isScrollingDown: props.currentRow > state.lastRow,
        lastRow: props.currentRow,
      };
    }

    // Return null to indicate no change to state.
    return null;
  }
}


