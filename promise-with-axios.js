//install axios
//npm install --save axios

const axios = require("axios");

var callBack = function(value) {
  console.log(value);
};
var errorHandler = function(error) {
  console.log(error);
};

var p = new Promise((resolve, reject) => {
    return axios
      .get("https://google.com")
      .then(function(response) {
        //console.log(response);
        resolve(response);
      })
      .catch(function(error) {
        reject(error);
      });
  })
  .then(callBack)
  .catch(errorHandler);
