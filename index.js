fetch("https://jsonplaceholder.typicode.com/posts")
.then(r => r.json())
.then(data => console.log(data))