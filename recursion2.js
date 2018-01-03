function reduce (arr, fn, initial,){
	if (arr.length === 0) return initial ;
	let item = arr[0];
	initial[item] = ++initial[item] || 1;
	return reduce(arr.slice(1), fn, initial) 
}

module.exports = reduce