import React from "react";
const Book = (props) => {
  const { img, title, author, link} = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
      <h4><a href={link}><button>Click me</button></a></h4>
    </article>
  );
};

export default Book;
