import {
  createBook, deleteBook, GET_BOOKS, GET_BOOKS_SUCCESS,
} from '../../utils/api';

const ADD_BOOK = 'bookstore/books/ADD';
const REMOVE_BOOK = 'bookstore/books/REMOVE';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      createBook(action.payload);
      return state;
    case REMOVE_BOOK: {
      const { payload } = action;
      deleteBook(payload);

      return state.filter((book) => book.item_id !== payload);
    }
    case GET_BOOKS:
      return state;
    case GET_BOOKS_SUCCESS:
      return Object.keys(action.books).map((key) => ({ item_id: key, ...action.books[key][0] }));
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
