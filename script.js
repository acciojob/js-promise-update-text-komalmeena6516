//your JS code here. If required.
function promise(){
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve("Hello, world!");
		}, 1000)
	})
}

promise().then((res)=>{
	document.getElementById("output").innerHTML = res;
})