import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../redux/books/books';
import { getBooks } from '../utils/api';

const AddBook = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const submitBookToStore = async (e) => {
    e.preventDefault();

    const newBook = {
      id: uuidv4(),
      title: title,
      category: category,
    };

    await dispatch(addBook(newBook));

    setTitle('');
    setCategory('');

    await dispatch(getBooks());
    document.location.reload(true);
  };

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onCategoryChange = (e) => {
    setCategory(e.target.value);
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
          onChange={onTitleChange}
        />
        <div className="add-book-wrapper">
          <select id="categories" name="categories" onChange={onCategoryChange} value={category} className="add-book-category">
            <option value="">Category</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Journalism">Journalism</option>
          </select>
          <button type="button" onClick={submitBookToStore} className="btn add-book-btn">ADD BOOK</button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
