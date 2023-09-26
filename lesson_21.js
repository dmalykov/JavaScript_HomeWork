// Decorator

const cachesDecorator = (func) => {
	const cache = new Map();

	return function (...args){
		const key = args.join(',');

		if (cache.has =(key)) {
			console.log('Cache hit:', key);
			return cache.get(key);
		} else {
			const result = func.apply(this, args);
			cache.set(key, result);
			console.log('Cache miss:', key);
			return result;
		}
	};
};


const obj = {
	num: 1,
	result: null,
	sum(num) {
		return this.num + num;
	},
};

const sum = (num) => {
	return this.num + num;
};

const decoratedSum1 = cachesDecorator(sum);
console.log(decoratedSum1(2));

const decoratedSum2 = cachesDecorator(obj.sum.bind(obj));
console.log(decoratedSum2(2));
console.log(decoratedSum2(3));
// ------------------------------------------------

// Factorial recursion

const factorial = (initialNumber) => {
	if (initialNumber === 0) return 1
	let factorialFinder = initialNumber * factorial(initialNumber - 1)
	return factorialFinder;
 };
 
 console.log(factorial(5));
 // 120

//  ------------------------------------------------

// Fibonacci recursion

const fib = (length) => {
	return length <= 0
	  ? []
	  : length === 1
	  ? [1]
	  : length === 2
	  ? [1, 1]
	  : [...fib(length - 1), fib(length - 1)[fib(length - 1).length - 1] + fib(length - 1)[fib(length - 1).length - 2]];
 };
 
 const result = fib(5);
 console.log(result.join(' '));

// ---------------------------------------------------

// Read list

const list = {
	title: "lesson-1",
	next: {
	  title: "lesson-2",
	  next: {
		 title: "lesson-3",
		 next: {
			title: "lesson-4",
			next: {
			  title: "lesson-5",
			  next: null,
			},
		 },
	  },
	},
 };
 
 const readList = (list) => {
	if (list) {
	  console.log(list.title);
	  readList(list.next);
	}
 };
 
 console.log(readList(list));
//  -------------------------------------------------------