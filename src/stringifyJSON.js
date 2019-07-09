// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
//obj is number
  if (typeof obj === 'number') {
  	return String(obj);
//obj is null
  } else if (obj === null) {
  	return 'null';
//obj is boolean
  } else if (typeof obj === 'boolean') {
  	return String(obj);
//obj is string
  } else if (typeof obj === 'string') {
  	return '"' + obj + '"';
//obj is array
  } else if (Array.isArray(obj)) {
  	var arr = []
	//obj is empty array
  	if (obj.length === 0) {
  		return '[]';
	//obj is non-empty array
  	} else {
  		for (var i = 0; i < obj.length; i++) {
  			arr.push(stringifyJSON(obj[i]));
  		} return '[' + arr.join() + ']';
  	};
//obj is object
  } else if (typeof obj === 'object') {
  	var arr = [];
  	for (var key in obj) {
  		if (typeof obj[key] !== 'function' && obj[key] !== undefined) {
  			arr.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
  		} else {
  			return '{}';
  		}; 
  	} return '{' + arr.join() + '}';
  };
};
