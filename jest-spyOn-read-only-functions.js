//ES6  import from other modules are read-only
//when we try to to mock a function that has been imported ( like props or regular import )
//jest will complain that the function is read-only and can not be mocked.
//Solution is to mock the function before mount the component.
//This way the function will be already mocked when the component will import it


//Example in the unit test file
//This example mocks action creators

import { saveModalItems, saveModalSelectedItems, updateModalTreeData, updateModalIsLoading } from '../../../src/common/actions';

jest.mock('../../../src/common/actions');

saveModalItems.mockImplementationOnce(() => {     return {
    type:null,
    selectedTreeData: 1
} })
saveModalSelectedItems.mockImplementationOnce(() => {     return {
    type:null,
    selectedTreeData: 1
} })
updateModalTreeData.mockImplementationOnce(() => {     return {
    type:null,
    selectedTreeData: 1
} })
updateModalIsLoading.mockImplementationOnce(() => {     return {
    type:null,
    selectedTreeData: 1
} })


//Then use it :
//call the function that will be calling he next functions here
expect(updateModalTreeData).toHaveBeenCalled()
expect(saveModalSelectedItems).toHaveBeenCalled()
expect(saveModalItems).toHaveBeenCalled()

