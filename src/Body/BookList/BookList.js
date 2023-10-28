import React from "react";
import "./BookList.css";

function BookList() {
  const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "1984", author: "George Orwell" },
    { title: "Pride and Prejudice", author: "Jane Austen" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger" },
    { title: "Moby-Dick", author: "Herman Melville" },
    {
      title: "One Hundred Years of Solitude",
      author: "Gabriel García Márquez",
    },
    { title: "Brave New World", author: "Aldous Huxley" },
    { title: "The Hobbit", author: "J.R.R. Tolkien" },
    { title: "The Book Thief", author: "Markus Zusak" },
  ];

  return (
    <div className="book-list">
      <h2>My Book List</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <strong>{book.title}</strong> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
