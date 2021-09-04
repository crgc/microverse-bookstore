// POST
// {
//   "item_id": "item1",
//   "title": "The Great Gatsby",
//   "category": "Fiction"
// }

// 200 Created

// {
//     "item1": [
//         {
//             "title": "The Great Gatsby",
//             "category": "Fiction"
//         }
//     ]
// }

// DETELE
// 201 The book was deleted successfully!
const GET_BOOKS_REQUEST = 'bookstore/books/GET_BOOKS_REQUEST';
const GET_BOOKS_REQUEST_SUCCESS = 'bookstore/books/GET_BOOKS_REQUEST_SUCCESS';
const GET_BOOKS_REQUEST_ERROR = 'bookstore/books/GET_BOOKS_REQUEST_ERROR';

const bookstoreAPIBaseURI = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Rt4xfKXqnprbF0Parz4X';
const booksBaseURI = `${bookstoreAPIBaseURI}/books`;

const getBooks = () => async (dispatch) => {
  dispatch({ type: GET_BOOKS });

  const response = await fetch(booksBaseURI);
  const books = await response.json();

  return dispatch({ type: GET_BOOKS_REQUEST_SUCCESS, books });
};

export {
  getBooks,
  GET_BOOKS_REQUEST,
  GET_BOOKS_REQUEST_SUCCESS,
  GET_BOOKS_REQUEST_ERROR,
};