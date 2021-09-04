import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';
import { useDispatch } from 'react-redux';

const Book = (props) => {
  const {
    id, category, title, /* eslint-disable-line react/prop-types */
  } = props;

  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBook(id));
  };

  return (
    <div className="book">
      <div className="book-info">
        <div className="book-category">{category}</div>
        <div className="book-title">{title}</div>
        <button
          type="button"
          onClick={handleRemove}
          className="btn remove-book-btn">Remove
        </button>
      </div>
    </div>
  );
};

Book.propsType = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
