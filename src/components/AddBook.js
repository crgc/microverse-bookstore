import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const getElementById = (id) => document.getElementById(id);

  const dispatch = useDispatch();

  const submitBookToStore = () => {
    const title = getElementById('input-title');
    const author = getElementById('input-author');

    const newBook = {
      id: uuidv4(),
      title: title.value,
      author: author.value,
    };

    dispatch(addBook(newBook));

    title.value = '';
    author.value = '';
  };

  return (
    <div className="add-book-section">
      <div className="add-book-header">ADD NEW BOOK</div>
      <form className="add-book-form">
        <input
          id="input-title"
          type="text"
          className="add-book-title"
          placeholder="Title"
          name="title"
        />
        <input
          id="input-author"
          type="text"
          className="add-book-author"
          placeholder="Author"
          name="author"
        />
        <div className="add-book-wrapper">
          <select name="category" className="add-book-category">
            <option value="category">Category</option>
            <option value="fantasy">Fantasy</option>
            <option value="fantasy">Journalism</option>
          </select>
          <button type="button" onClick={submitBookToStore} className="btn add-book-btn">ADD BOOK</button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
