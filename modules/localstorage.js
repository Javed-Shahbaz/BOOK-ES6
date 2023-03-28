import library from './library.js';
import showScreen from './show.js';

const localStorage = () => {
  window.addEventListener('load', () => {
    const localStorageItem = window.localStorage.getItem('books');
    if (localStorageItem) {
      library.bookList = JSON.parse(localStorageItem);
      library.bookList.forEach((element) => {
        showScreen(element);
      });
    }
  });
};

export default localStorage;