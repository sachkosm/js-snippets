
//Use generated new key to force a child react component to rerender

generateKey = (pre) => {
     return `${pre}_${new Date().getTime()}`;
}
    
this.setState({
     key: this.generateKey('comp1)
  },
     ()=>{console.warn('state.key:', this.state.key)
}

<Component key={this.state.key} />
