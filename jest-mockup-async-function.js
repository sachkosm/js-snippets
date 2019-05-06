

functionToMock={jest.fn(async () => {})}

// if it is in the this.props.functionToMock

const sh = shallow(<ComponentToTest

           functionToMock={jest.fn(async () => {})}

            />);
