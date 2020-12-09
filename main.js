async function getResponse() {
	let response = await fetch('https://jsonplaceholder.typicode.com/photos')
	let content = await response.json()
	content = content.splice(0, 10)
	
	let list = document.querySelector('.container')

	let key;

	//for in
	for (key in content) {

		list.innerHTML += `
			<li>
				<h4>${content[key].title}</h4>
				<img src="${content[key].url}" width="300">
			</li>
		`
	}
}
getResponse()