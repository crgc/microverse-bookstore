import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const RemoveBook = id => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBook(id));
  };

  return (
    <button
      type="button"
      onClick={handleRemove}
      className="btn remove-book-btn">Remove</button>
  );
};

export default RemoveBook;