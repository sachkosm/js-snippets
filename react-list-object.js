class Dogs extends React.Component {
	constructor(props){
  	super(props)
    this.state = {
    	dogs:{
      	dog1: {name: 'pupy', bread: 'dogy'},
        dog2: {name: 'pupy1', bread: 'dogy1'},
        dog3: {name: 'pupy2', bread: 'dogy2'},
      }
    }
  }

  render() {
    return <div>
      {Object.entries(this.state.dogs).map(
        (value,index)=>
        <div>
          <div>name: {value[1].name}</div>
          <div>bread: {value[1].bread}</div>
        </div>)}
    </div>;
  }
}

ReactDOM.render(
  <Dogs name="Dogs" />,
  document.getElementById('container')
);
