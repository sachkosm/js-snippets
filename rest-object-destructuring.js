

let params = {
	'date': "2019-01-08",
	'dimensions': ["AjdsArQfcA1"],
	'measures': ["SUM"],
	'test': [{ 'Id': "1234567890" },
		{ 'test2': "Hrgbtn" },
		{ 'TimeStamp': "2019-01-09T13:37:54.738484" }],
}


let firstKey = Object.keys(params)[0]  //dynamic key - omit the first key


let {
	[firstKey]: omit, // omit this property and assign it to variable "omit"
	...rest
} = params

console.log('params',params); 

/*
params { date: '2019-01-08',
  dimensions: [ 'AjdsArQfcA1' ],
  measures: [ 'SUM' ],
  test: 
   [ { Id: '1234567890' },
     { test2: 'Hrgbtn' },
     { TimeStamp: '2019-01-09T13:37:54.738484' } ] }
*/

console.log('================='); // 


console.log('omit',omit); //  omit 2019-01-08
