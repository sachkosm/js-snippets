//How to inject ( replace) node module beforee execute unittest
// Add on the top

import mockFetch  from 'jest-fetch-mock';
jest.mock('cross-fetch', () => (mockFetch));
