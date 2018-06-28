renderObject(obj) {
              var self = this

              return (
                <ul>
                  { Object.entries(obj).map(function(item, index) {
                    let innerObject = item[1]
                    if (typeof innerObject === 'object') {
                      return (self.renderObject(innerObject))
                    } else {
                      return ( <li>{item[0]} : {item[1]}</li> )
                    }
                  }
                )}
                </ul>
               )
           }
