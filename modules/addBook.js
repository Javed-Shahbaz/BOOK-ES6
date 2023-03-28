import library from './library.js';
import showScreen from './show.js';

const getValues = () => {
  const bookEntry = {
    title: null,
    author: null,
  };

  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');

  bookEntry.title = titleInput.value;
  bookEntry.author = authorInput.value;

  library.add(bookEntry);

  titleInput.value = '';
  authorInput.value = '';

  window.localStorage.setItem('books', JSON.stringify(library.bookList));
  showScreen(bookEntry);
};

export default getValues;