import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { createBook } from '../redux/books/books';

const BookInput = () => {
  const dispatch = useDispatch();

  const AddBook = (e) => {
    e.preventDefault();
    const title = e.target.elements.title.value;
    const author = e.target.elements.author.value;
    const payload = {
      title, author, item_id: uuidv4(), category: 'Story',
    };
    dispatch(createBook(payload));
    e.target.reset();
  };

  return (
    <>
      <h2 className="addBookTitle">ADD NEW BOOK</h2>
      <form
        onSubmit={AddBook}
        className="BookInputContainer"
      >

        <input id="title" className="BookInput" type="text" name="title" placeholder="Enter Book Title.." required />
        <input id="author" className="BookInput" type="text" name="author" placeholder="Enter Author Name.." required />
        <button className="BookInputButton" type="submit">ADD BOOK</button>
      </form>
    </>
  );
};
export default BookInput;
