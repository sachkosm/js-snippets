slice(0) is identical to the input, which basically means it's a cheap way to duplicate an array


It's also used to convert array-like objects into array.

For example, a DOM NodeList (returned by several DOM methods like getElementsByTagName) is not an array, but it is an array-like object with a length field and is indexable in JavaScript. To convert it to an array, one often uses:

var anchorArray = [].slice.call(document.getElementsByTagName('a'), 0)
