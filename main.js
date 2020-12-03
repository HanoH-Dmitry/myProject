async function getResponse() {
	let response = await fetch('https://jsonplaceholder.typicode.com/photos')
	let content = await response.json()
	console.log(content.splice(0, 10))
	
	let key;

	//for in
	for (key in content) {
	console.log(key)
	}
}
getResponse()