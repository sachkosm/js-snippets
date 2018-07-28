const fetch = require("node-fetch"); // Tested on Node side
const R = require("ramda");
//Setup Ramda help functions
const sortByProp = (propName) => R.sortBy(R.prop(propName));
const sortByPropDesc = (propName) => R.compose(R.reverse, R.sortBy(R.prop(propName)));

const arrCombinedResult = [];
const urls = Array(15);
urls.fill('https://randomuser.me/api/') // using user random emulation


const fetchOneUrl = url => fetch(url)
  .then(function(response) {
    var s = response.json(); // json retuns a promise, use then to read the result
    return s;
  })
  .then(function(myJson) {
    //const sortedData = sortByProp('gender')(myJson.results) //If we need inside sort
    arrCombinedResult.push(myJson.results[0]) //[0] to make this array of objects - by default iti is array of array of object
    //console.log(sortedData);
  })

Promise
  .all(urls.map(fetchOneUrl))
  .then(() => {
    //const sortedData = R.sortBy(R.prop(['email']))(arrCombinedResult); //sort by first level prop
    const sortedData = R.sortBy(R.path(['login','username']))(arrCombinedResult); //sort by nested level
    console.log(sortedData);
  })
