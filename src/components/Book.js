import PropTypes from 'prop-types';
import RemoveBook from './RemoveBook';

const Book = (props) => {
  const {
    id, category, title, author, /* eslint-disable-line react/prop-types */
  } = props;

  return (
    <div className="book">
      <div className="book-info">
        <div className="book-category">{category}</div>
        <div className="book-title">{title}</div>
        <div className="book-author">{author}</div>
        <RemoveBook id={id} />
      </div>
    </div>
  );
};

Book.propsType = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

Book.defaultProps = {
  category: 'Category',
};

export default Book;
