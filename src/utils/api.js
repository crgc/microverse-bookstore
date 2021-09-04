const GET_BOOKS = 'bookstore/books/GET_BOOKS';
const GET_BOOKS_SUCCESS = 'bookstore/books/GET_BOOKS_SUCCESS';

const bookstoreAPIBaseURI = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Rt4xfKXqnprbF0Parz4X';
const booksBaseURI = `${bookstoreAPIBaseURI}/books`;

const getBooks = () => async (dispatch) => {
  dispatch({ type: GET_BOOKS });

  const response = await fetch(booksBaseURI);
  const books = await response.json();

  return dispatch({ type: GET_BOOKS_SUCCESS, books });
};

const createBook = (book) => {
  fetch(booksBaseURI, {
    method: 'POST',
    body: JSON.stringify({
      item_id: book.id,
      title: book.title,
      category: book.category,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

const deleteBook = (id) => {
  fetch(`${booksBaseURI}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export {
  createBook,
  deleteBook,
  getBooks,
  GET_BOOKS,
  GET_BOOKS_SUCCESS,
};
