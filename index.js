import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { books } from "./books";
import Book from "./Book";
function BookList() {
  return (
    <>
      <h1>Amazon <center><span>Harry Potter Edition</span></center></h1>
      <section className="booklist">
        {books.map((book) => {
          return <Book {...book} key={book.id} />;
        })}
      </section>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
export default BookList;
