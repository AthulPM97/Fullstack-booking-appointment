const form = document.getElementById('form');
const userName = document.getElementById('user-name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

//event listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const item = {
        userName: userName.value,
        phoneNo: phone.value,
        email: email.value,
    };
    console.log(item)
})