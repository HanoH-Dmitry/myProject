async function getResponse() {
	let response = await fetch('https://jsonplaceholder.typicode.com/photos')
	let content = await response.json()
	
	
	let key;

	//for in
	for (key in content) {
		console.log(content[key])
	}
	console.log(content.splice(0, 10))
}
getResponse()