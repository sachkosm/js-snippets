const R = require('ramda')

const pivotWith = R.curry((fn, keyCol, valCol, table) => R.pipe(
    R.groupWith(R.eqBy(R.omit([keyCol, valCol]))),
    R.map((rowGroup) => R.reduce(
        R.mergeWith(fn),
        R.omit([keyCol, valCol], rowGroup[0]),
        rowGroup.map((row) => ({ [row[keyCol]]: row[valCol] }))
    )),
)(table))

const pivot = pivotWith(R.nthArg(0))

//usage:
var result = pivot("attribute", "value", [
    { key: "key1", attribute: "attribute1", value: 1 },
    { key: "key1", attribute: "attribute3", value: 3 },
    { key: "key2", attribute: "attribute1", value: 2 },
    { key: "key2", attribute: "attribute2", value: 4 },
])
// result:
// [{ key: key1, attribute1: 1, attribute3: 3 },
//  { key: key2, attribute1: 2, attribute2: 4 }]

console.log(result)