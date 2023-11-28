const inputPass = document.getElementById('password');
const iconPass = document.getElementById('icon-pass');

iconPass.addEventListener('click', () => {
	if (inputPass.getAttribute('type') === 'password') {
		inputPass.setAttribute('type', 'text');
	} else {
		inputPass.setAttribute('type', 'password');
	}
});
