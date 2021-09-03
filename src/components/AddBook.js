const AddBook = () => (
  <div className="add-book-section">
    <div className="add-book-header">ADD NEW BOOK</div>
    <form className="add-book-form">
      <input
        type="text"
        className="add-book-title"
        placeholder="Title"
        name="title"
      />
      <input
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
        <button type="button" className="btn add-book-btn">ADD BOOK</button>
      </div>
    </form>
  </div>
);

export default AddBook;