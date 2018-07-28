class Dogs extends React.Component {
	constructor(props){
  	super(props)
    this.state = {
    	dogs:[
      	{name: 'pupy', bread: 'dogy'},
        {name: 'pupy1', bread: 'dogy1'},
        {name: 'pupy2', bread: 'dogy2'},
      ]
    }
  }

  render() {
    return <div>
      {this.state.dogs.map((value,index)=>
        <div>
          <div>name: {value.name}</div>
          <div> bread: {value.bread}</div>
        </div>)}
    </div>;
  }
}

ReactDOM.render(
  <Dogs name="Dogs" />,
  document.getElementById('container')
