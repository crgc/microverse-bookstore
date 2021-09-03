const ADD_BOOK = 'bookstore/books/ADD';
const REMOVE_BOOK = 'bookstore/books/REMOVE';

const initialState = [
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
];
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
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
