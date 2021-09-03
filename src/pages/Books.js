import { useSelector } from 'react-redux';
import AddBook from '../components/AddBook';
import Book from '../components/Book';

const Books = () => {
  const books = useSelector((state) => state.booksReducer);

  return (
    <div className="book-section">
      {books.map((book) => (
        <Book book={book} />
      ))}
      <div className="gray-line" />
      <AddBook />
    </div>
  );
};

export default Books;
