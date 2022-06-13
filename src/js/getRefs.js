export default function getRefs() {
    return {
    form: document.querySelector('#search-form'),
    input: document.querySelector('#search-form input'),
    btnSubmit: document.querySelector('#search-form button'),
        watchedBtn: document.querySelector('#header-btm-watched'),
        queueBtn: document.querySelector('#header-btm-queue'),
        homeLink: document.querySelector('#home'),
myLibraryLink: document.querySelector('#my-library'),
        buttonsBlock: document.querySelector('.header__block-btn'),
        ul: document.querySelector('.films-collection'),
        header: document.querySelector('.header'),
    
        btnClose: document.querySelector('[data-button_close]'),
    backdrop: document.querySelector('.backdrop'),
    modal: document.querySelector('.modal'), 
    cardEl: document.querySelector('.card'),
     addToWatchedBtn: document.querySelector('[data-watched]'),
    addToQueueBtn: document.querySelector('[data-queue]'),  
    ulEl: document.querySelector('.films-collection'),
}
}