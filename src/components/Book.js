import RemoveBook from "./RemoveBook";

const Book = (props) => {
  const { book } = props;

  return (
    <div key={book.id} className="book">
      <div className="book-info">
        <div className="book-category">{book.category}</div>
        <div className="book-title">{book.title}</div>
        <div className="book-author">{book.author}</div>
        <RemoveBook id={book.id} />
      </div>
    </div>
  );
};

export default Book;