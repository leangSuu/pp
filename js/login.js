let username = document.querySelector('#name');
let pass = document.querySelector('#pw');
const form = document.querySelector('#form')

const keyName = "Solly phat";
const keyPass = "12kh09";

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (username.value === keyName && pass.value === keyPass) {
        Swal.fire({
            icon: 'success',
            title: 'Login Successful',
            text: 'Redirecting...',
            timer: 3000,
            showConfirmButton: false
        }).then(() => {
            window.location.href = "home.html";
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: 'Incorrect username or password!',
        });
    }
});
