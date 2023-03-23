function submitTip(event) {
	event.preventDefault();
	let name = document.getElementById('name').value;
	let tip = document.getElementById('tip').value;

	// store the tip in local storage
	if (localStorage.getItem('tips') === null) {
		let tips = [];
		tips.push({name: name, tip: tip});
		localStorage.setItem('tips', JSON.stringify(tips));
	} else {
		let tips = JSON.parse(localStorage.getItem('tips'));
		tips.push({name: name, tip: tip});
		localStorage.setItem('tips', JSON.stringify(tips));
	}

	// clear the form fields
	document.getElementById('name').value = '';
	document.getElementById('tip').value = '';
}
