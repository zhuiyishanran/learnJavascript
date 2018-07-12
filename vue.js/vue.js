var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello Vue!'
	}
});
var app2 = new Vue({
	el: '#app2',
	data: {
		message: '页面加载于 ' + new Date().toLocaleString()
	}
});
var app3 = new Vue({
	el: '#app3',
	data: {
		seen: true
	}
});
var app4 = new Vue({
	el: '#app4',
	data: {
		todos: [
			{ text: 'learn javascript' },
			{ text: 'learn vue' },
			{ text: 'learn item' }
		]
	}
});
var app5 = new Vue({
	el: '#app5',
	data: {
		message: 'Hello Vue.js!'
	},
	methods: {
		reverseMessage: function() {
			this.message = this.message.split('').reverse().join('')
		}
	}
});
var app6 = new Vue({
	el: '#app6',
	data: {
		message: 'Hello Vue.js!'
	}
});

Vue.component('todo-item', {
	props:['todo'],
	template:'<li>{{ todo.text }}</li>'
})
var app7 = new Vue({
	el: '#app7',
	data: {
		groceryList: [
			{ id: 0, text: 'vegetable'},
			{ id: 1, text: 'cheese'},
			{ id: 2, text: 'something else'}
		]
	}
});

var example1 = new Vue({
	el: '#example-1',
	data: {
		items: [
			{ message: 'Foo' },
			{ message: 'Bar' }
		]
	}
});

var example2 = new Vue({
	el: '#example-2',
	data: {
		parentMessage: 'parent',
		items: [
			{ message: 'Foo' },
			{ message: 'Bar' }
		]
	}
});

new Vue({
	el: '#v-for-object',
	data: {
		object: {
			firstName: 'John',
			lastName: 'Doe',
			age: 30
		}
	}
});
