const inputPass = document.getElementById('password');
const iconPass = document.getElementById('icon-pass1');

iconPass.addEventListener('click', () => {
    if (inputPass.getAttribute('type') === 'password') {
        inputPass.setAttribute('type', 'text');
    } else {
        inputPass.setAttribute('type', 'password');
    }
});

const inputPass1 = document.getElementById('password2');
const iconPass1 = document.getElementById('icon-pass2');

iconPass1.addEventListener('click', () => {
    if (inputPass1.getAttribute('type') === 'password') {
        inputPass1.setAttribute('type', 'text');
    } else {
        inputPas1s.setAttribute('type', 'password');
    }
});