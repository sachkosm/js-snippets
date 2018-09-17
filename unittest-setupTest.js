import test_helper from "test_helper";
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import $ from 'jquery';
global.$ = global.jQuery = $;

// Initialize Enzyme
Enzyme.configure({ adapter: new Adapter() });

// const localStorageMock = {
//   getItem: jest.fn(),
//   setItem: jest.fn(),
//   clear: jest.fn()
// };
// global.localStorage = localStorageMock;

// Mock store creation
const middlewares = [thunk];
export const mockStore = configureMockStore(middlewares);
