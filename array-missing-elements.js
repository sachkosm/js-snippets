
var arr1 = ['abd', 'bcd', 'dce', 123]
var arr2 = ['abd', 'dce',  567, 'hfg']

var missingElements = arr1.filter(item => arr2.indexOf(item) < 0)
