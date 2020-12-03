async function getResponse() {
	let response = await fetch('https://jsonplaceholder.typicode.com/photos')
	let content = await response.text()
	console.log(content)
}
getResponse()