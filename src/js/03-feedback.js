import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    input: document.querySelector('.feedback-form input'),
}

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));


// const formData = {};
// insertoftextarea();

// refs.form.addEventListener('input', e => {

//     formData[e.target.name] = e.target.value; //забираем данные при вводе
//     // console.log(formData); //formData это обьэкт
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// });



// function onFormSubmit(evt) {
//     evt.preventDefault(); //не дает перегружать страницу

//     evt.currentTarget.reset(); //очищяет форму
//     localStorage.removeItem(STORAGE_KEY); //очищяет localStorage
//     formData = {};
// }



// function onTextAreaInput(evt) {
//     const message = evt.target.value;
//     localStorage.setItem(STORAGE_KEY, message);

// }

// function insertoftextarea() {

//     const insertMessage = localStorage.getItem(STORAGE_KEY);
//     // const localParse = JSON.parse(insertMessage);

//     if (insertMessage) {


//         console.log(insertMessage);
//         refs.textarea.value = insertMessage;
//     }

// }

const STORAGE_KEY = 'feedback-form-state';
initForm();

function onFormInput(event) {
    let persistedFilter = localStorage.getItem(STORAGE_KEY);
    persistedFilter = persistedFilter ? JSON.parse(persistedFilter) : {};
    persistedFilter[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(persistedFilter));
};

function initForm() {
    let persistedFilter = localStorage.getItem(STORAGE_KEY);
    if (persistedFilter) {
        persistedFilter = JSON.parse(persistedFilter);
        Object.entries(persistedFilter).forEach(([name, value]) => {
            refs.form.elements[nmae].value = value
        });
    }
};

function onFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(refs.form);
    const user = {};
    formData.forEach((value, name) => {
        user[name] = value;
    });
    console.log(user);
    event.currentTarget.reset(); //очищяет форму
    localStorage.removeItem(STORAGE_KEY); //очищяет localStorage
}