
// Js for login form
let login = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let closeForm = document.querySelector('#form-close');
login.addEventListener('click',() =>{
    loginForm.classList.add('active');
});
closeForm.addEventListener('click',() =>{
    loginForm.classList.remove('active');
});