var obj = {
  a: 'value1',
  b: 'value2',
  c: [1, 2, 3],
  d: {
    a2: "b",
    a3: "f",
    aa5: {
      aaa5: "y",
      bbb5: {
        g: "7",
        func: function(){return 1},
        f: [3, 8, 9],
        h: {
          r: 5
        }
      }
    }
  }
};

//No nested values
Object.keys(obj).forEach(function(key, idx) {
  //console.log(key + ": " + obj[key]);
});

//Travers nested
const traverse = (str, obj, closingTag) => {
  for(let k in obj) {
    
    if(obj[k] && typeof obj[k] === 'object') {

      if(Array.isArray(obj[k])) {
        let accStr = str + k + ": ["
        let accClosingTag = "]" + closingTag
        traverse(accStr, obj[k], accClosingTag)
      } else {
        let accStr = str + k + ": {"
        let accClosingTag = "}" + closingTag
        traverse(accStr, obj[k], accClosingTag)
      }

    } else {
      console.log(str + k + ": " + obj[k] + closingTag);
      //console.log(obj[k]) // All values only
      //console.log(k) // All keys only
    }
  }
}
traverse('', obj, '')
