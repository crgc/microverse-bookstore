import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import BookCompleted from './BookCompleted';
import BookChapter from './BookChapter';

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
        <div className="book-author">Unknown</div>
        <div className="book-actions">
          <a href="/#">Comments</a>
          {' | '}
          <a href="/#" onClick={handleRemove}>Remove</a>
          {' | '}
          <a href="/#">Edit</a>
        </div>
      </div>
      <div className="book-status">
        <BookCompleted />
        <BookChapter />
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
