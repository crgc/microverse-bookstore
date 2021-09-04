import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import AddBook from '../components/AddBook';
import Book from '../components/Book';
import { getBooks } from '../utils/api';

const Books = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const books = useSelector((state) => state.booksReducer);

  return (
    <div className="book-section">
      {
        books.map((book) => (
          <Book
            key={book.item_id}
            id={book.item_id}
            title={book.title}
            category={book.category}
          />
        ))
      }
      <div className="gray-line" />
      <AddBook />
    </div>
  );
};

export default Books;
