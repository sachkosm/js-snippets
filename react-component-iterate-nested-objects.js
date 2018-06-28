import React, {	Component} from 'react';

class IterateObject extends Component {
  constructor(props, context) {
    super(props, context)
    this.iterateObject = this.iterateObject.bind(this)
    this.state = {
      result: [{
        "name": "test",
        "version": "0.1.0",
        "private": true,
        "dependencies": {
          "react": "^16.4.0",
          "react-dom": "^16.4.0"
        },
        "devDependencies": {
          "react-scripts": "1.1.4",
          "otherDeps": {
            "start": "react-scripts start",
            "build": "react-scripts build",
            "test": "react-scripts test --env=jsdom",
            "eject": "react-scripts eject"
          }
        },
        "scripts": {
          "start": "react-scripts start",
          "build": "react-scripts build",
          "test": "react-scripts test --env=jsdom",
          "eject": "react-scripts eject"
        }
      }]
    }
  }


  iterateObject(obj) {
    var self = this
    return (
        <ul>
            {
              Object.entries(obj).map(function(item, index) {
                    let innerObject = item[1]
                    if (typeof innerObject === 'object') {
                        return ( self.iterateObject(innerObject) )
                    } else {
                        return ( <li>{item[0]} : {item[1]}</li> )
                    }
                  }
                )
            }

        </ul>
    )
  }

  render() {

      return ( <div>
                  { this.iterateObject(this.state.result[0]) }
              </div>
      )
    }
  }

export default (IterateObject);
