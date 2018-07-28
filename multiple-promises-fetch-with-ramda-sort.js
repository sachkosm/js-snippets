const fetch = require("node-fetch"); // Tested on Node side
const R = require("ramda");
//Setup Ramda help functions
const sortByProp = (propName) => R.sortBy(R.prop(propName));
const sortBtPropDesc = (propName) => R.compose(R.reverse, R.sortBy(R.prop(propName)));

const combinedArr = [];
const urls = Array(15);
urls.fill('https://randomuser.me/api/')


const grabContent = url => fetch(url)
  .then(function(response) {
    var s = response.json(); // json retuns a promise, use then to read the result
    return s;
  })
  .then(function(myJson) {
    //const sortedData = sortByProp('gender')(myJson.results) //If we need inside sort
    combinedArr.push(myJson.results[0]) //[0] to make this array of object - by default iti is array of array of object
    //console.log(sortedData);
  })

Promise
  .all(urls.map(grabContent))
  .then((data) => {
    const sortedData = sortBtPropDesc('gender')(combinedArr);
    console.log(sortedData);
  })
