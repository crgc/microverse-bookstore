import AddBook from '../components/AddBook';
import RemoveBook from '../components/RemoveBook';
import { useSelector } from 'react-redux';

const Books = () => {
  const books = useSelector(state => {
    return state.booksReducer;
  });

  return (
    <div className="book-section">
      {books.map((book) => (
        <div key={book.id} className="book">
          <div className="book-info">
            <div className="book-category">{book.category}</div>
            <div className="book-title">{book.title}</div>
            <div className="book-author">{book.author}</div>
            <RemoveBook id={book.id}/>
          </div>
        </div>
      ))}
      <div className="gray-line" />
      <AddBook />
    </div>
  );
};

export default Books;
