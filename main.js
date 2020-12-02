async function getResponse() {
	let response = await fetch('https://jsonplaceholder.typicode.com/photos')
	console.log(response)
}