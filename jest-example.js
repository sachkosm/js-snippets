import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { mockStore } from '../../setupTests';
import PastePopup from '../../../src/lib/react-querybuilder/PastePopup';
import { actionCreatorFn } from '../../../src/common/actions';
import { SOME_ACTION } from '../../../src/config/actionsRegistry';

describe('<PastePopup />', () => {

    test('Component renders without crashing', () => {
        shallow(<PastePopup />);
    });

    const store = mockStore({ common: { drawerOpen: false, env: 'uat', user: {} } });

    const cancelHandler = jest.fn()
    const confirmHandler = jest.fn()

    
    const wrapper = mount(
        <Provider store={store}>
            <Router>
                <PastePopup pasteModalState={true} cancelHandler={cancelHandler} confirmHandler={confirmHandler} />
            </Router>
        </Provider>
    );


    test('Click button Add', () => {
        //console.debug(wrapper.debug())
        //console.debug(wrapper.find('Button'))
        const instance = wrapper.find('PastePopup').instance()
        instance.textAreaChange = jest.fn()
        wrapper.find('Button').at(0).simulate('click')
        wrapper.find('Button').at(1).simulate('click')
        expect(confirmHandler).toBeCalled()
        expect(cancelHandler).toBeCalled()
        const event = {traget: {value: "TestValue"}}

        const pasteValue = async () => {
            await wrapper.find('textarea').at(2).simulate("change", event)
            expect(instance.state.value).toEqual("TestValue")
        }
        pasteValue()
        
    })

})
