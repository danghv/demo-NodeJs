function msgAfterTimeout () {
	//Code logic here
	//Code logic here
	//Code logic here
	let random = Math.random()
return new Promise((resolve, reject) => {
		if(random > 0.5) {
  			resolve('resolve')
} else { 
		reject('reject')}
})
}
msgAfterTimeout()
.then((data) => {
    console.log(data + ': Promise is so ez')
})
.then((data) => {
    console.log(data + ': I am a developer :D')
})
.catch((err) => {
    console.log(err)
})