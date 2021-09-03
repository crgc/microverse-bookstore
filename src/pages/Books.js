import AddBook from '../components/AddBook';

const Books = () => {
  const books = [
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

  return (
    <div className="book-section">
      {books.map((book) => (
        <div key={book.id} className="book">
          <div className="book-info">
            <div className="book-category">{book.category}</div>
            <div className="book-title">{book.title}</div>
            <div className="book-author">{book.author}</div>
            <button type="button" className="btn remove-book-btn">Remove</button>
          </div>
        </div>
      ))}
      <div className="gray-line" />
      <AddBook />
    </div>
  );
};

export default Books;
