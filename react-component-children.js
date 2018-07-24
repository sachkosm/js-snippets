
//React children is the content between the <Component >tags </Component>
//Could be just text or other components or html tags
//It is used when we do not know how many elements we will have inside tha Component tags

//For example a select html element we may not know how many options will have.
//The options may be generated dynamicly and may changed

class Chosen extends React.Component {
  render() {
    return (
      <div>
        <select className="Chosen-select" ref={el => this.el = el}>

          {this.props.children}

        </select>
      </div>
    );
  }
}

<Chosen onChange={value => console.log(value)}>

  //Here are the children
  <option>vanilla</option>
  <option>chocolate</option>
  <option>strawberry</option>

</Chosen>
