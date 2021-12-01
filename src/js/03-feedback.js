import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    input: document.querySelector('.feedback-form input'),
}
const STORAGE_KEY = 'feedback-form-state';

const formData = {};
insertoftextarea();

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextAreaInput, 500));

refs.form.addEventListener('input', e => {

    formData[e.target.name] = e.target.value; //забираем данные при вводе
    // console.log(formData); //formData это обьэкт
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});



function onFormSubmit(evt) {
    evt.preventDefault(); //не дает перегружать страницу

    evt.currentTarget.reset(); //очищяет форму
    localStorage.removeItem(STORAGE_KEY); //очищяет localStorage
    formData = {};
}



function onTextAreaInput(evt) {
    const message = evt.target.value;
    localStorage.setItem(STORAGE_KEY, message);

}

function insertoftextarea() {

    const insertMessage = localStorage.getItem(STORAGE_KEY);
    // const localParse = JSON.parse(insertMessage);

    if (insertMessage) {


        console.log(insertMessage);
        refs.textarea.value = insertMessage;
    }

}