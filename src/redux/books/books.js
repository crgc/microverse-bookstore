import { createBook, GET_BOOKS, GET_BOOKS_SUCCESS } from "../../utils/api";

const ADD_BOOK = 'bookstore/books/ADD';
const REMOVE_BOOK = 'bookstore/books/REMOVE';

/* const initialState = [
  {
    id: 1,
    title: 'The Lord of the Rings',
    author: 'J. R. R. Tolkien',
    category: 'Fantasy',
  },
  {
    id: 2,
    title: 'Among the Thugs',
    author: 'Bill Buford',
    category: 'Journalism',
  },
]; */

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      createBook(action.payload);
      return state;
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    case GET_BOOKS:
      return state;
    case GET_BOOKS_SUCCESS:
      const { books } = action;
      const newState = Object.keys(books).map((key) => {
        return { item_id: key, ...books[key][0] }
      })
      return newState;
    default:
      return state;
  }
};

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export default reducer;
