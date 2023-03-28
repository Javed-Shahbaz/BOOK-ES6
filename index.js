import getValues from './modules/addBook.js';
import { goAdd, goContact, goList } from './modules/navigation.js';
import removeBook from './modules/deleteBook.js';
import localStorageOnLoad from './modules/localstorage.js';
import { DateTime } from './modules/luxon.js';

const now = DateTime.now();
const clock = document.getElementById('time');
clock.innerHTML = now.toLocaleString(DateTime.DATETIME_MED);

window.getValues = getValues;
window.goAdd = goAdd;
window.goContact = goContact;
window.goList = goList;
window.removeBook = removeBook;
localStorageOnLoad();