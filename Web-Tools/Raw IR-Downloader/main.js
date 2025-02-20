function copy_code(obj) {
	navigator.clipboard.writeText(obj.innerHTML);
	alert('Code kopiert!')
}