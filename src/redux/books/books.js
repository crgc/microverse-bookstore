const ADD_BOOK = 'bookstore/books/ADD';
const REMOVE_BOOK = 'bookstore/books/REMOVE';

const initialState = [];
const reducer =  (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [ ...state, action.payload];
    case REMOVE_BOOK:
      return state.filter(book => book.id !== id);
    default:
        return state;
    }
};

export const addBook = payload => ({
  type: ADD_BOOK,
  payload
});

export const removeBook = payload => ({
  type: REMOVE_BOOK,
  payload
});

export default reducer;