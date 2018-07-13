var callbacks = [];
for (var i = 0; i <= 2; i++) {
	callbacks[i] = function() {
		return i * 2;
	};
}

console.log([
	callbacks[0](),
	callbacks[1](),
	callbacks[2]()
]);

const callbacks2 = [];
for (let i = 0; i <= 2; i++) {
	callbacks2[i] = function() {
		return i * 2;
	};
}

console.log([
	callbacks2[0](),
	callbacks2[1](),
	callbacks2[2]()
]);


{
	var evens = [1,2,3,4,5];
	var odds = evens.map(function(v) {
		return v + 1;
	});

	console.log(evens, odds);
}

{
	const evens = [1,2,3,4,5];
	const odds = evens.map(v => v + 1);
	console.log(evens, odds);
}



{
	var factory = function() {
		this.a = 'a';
		this.b = 'b';
		this.c = {
			a: 'a+',
			b: function() {
				return this.a
			}
		}
	}
	console.log(new factory().c.b());
}

{
	var factory = function() {
		this.a = 'a';
		this.b = 'b';
		this.c = {
			a: 'a+',
			b: () => {
				return this.a
			}
		}
	}
	console.log(new factory().c.b());
}

{
	let params = ['hello', true, 7];
	let other = [1, 2, ...params];
	console.log(other);
}