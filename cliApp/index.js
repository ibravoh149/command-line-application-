var fetch = require('node-fetch');

fetch('http://jsonplaceholder.typicode.com/posts/1')
.then(function(response){
	return response.json();
})
.then(function(json){
	console.log(json);
});