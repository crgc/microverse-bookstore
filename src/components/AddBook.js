import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { useRef, useState } from 'react';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();

  const titleRef = useRef(null);
  const authorRef = useRef(null);

  const [book, setBook] = useState({
    title: '',
    author: '',
  });

  const submitBookToStore = (e) => {
    e.preventDefault();

    const newBook = {
      id: uuidv4(),
      ...book,
    };

    dispatch(addBook(newBook));
    setBook({ title: '', author: '' });

    titleRef.current.value = '';
    authorRef.current.value = '';
  };

  const onChange = (e) => {
    setBook((prev) => {
      const newState = { ...prev };
      newState[e.target.name] = e.target.value;

      return newState;
    });
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
          ref={titleRef}
          onChange={onChange}
        />
        <input
          id="input-author"
          type="text"
          className="add-book-author"
          placeholder="Author"
          name="author"
          ref={authorRef}
          onChange={onChange}
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
