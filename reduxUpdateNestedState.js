var state = { one: "1", two: '2', next: 'next', object: { nestedObject: { nested1: '100' } } }

function update(state) {
	return { ...state, object: { ...state.object, nestedObject: { ...state.object.nestedObject, nested1: '200' } }, two: 3 }
}

//Lodash has a _.set() method.
// _.set(obj, 'db.mongodb.user', 'root');
// _.set(obj, 'foo.bar', 'baz');

console.log(update(state))
