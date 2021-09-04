import React from 'react';

const BookChapter = () => (
  <div className="book-chapter">
    <p>CURRENT CHAPTER</p>
    <p className="book-chapter-current">Chapter 11</p>
    <button type="button" className="book-chapter-update">UPDATE PROGRESS</button>
  </div>
);

export default BookChapter;
