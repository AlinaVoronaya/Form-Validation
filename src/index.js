require('./styles/styles.scss');

if (process.env.NODE_ENV === 'development') {
    require('../index.html');
}

const form = document.getElementById("form");

form.onsubmit = function(event) {
    event.preventDefault();
    const form = event.target;
    if (!form.elements["username"].value || !form.elements["telephone"].value || !form.elements["password"].value) {
        alert('Необходимо заполнить форму');
        return;
    }
    alert('Отлично! Отправляю...');
};