import React from "react";
import "./BookList.css";

function BookList() {
  const books = [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      description:
        "Set in the Deep South during the mid-20th century, 'To Kill a Mockingbird' is a timeless story of race, class, justice, and the pain of growing up. Through the innocent eyes of Scout Finch, the world of prejudice, moral growth, and good versus evil are navigated with poignancy and heartfelt honesty.",
      image: "https://example.com/images/mockingbird.jpg",
    },
    {
      title: "1984",
      author: "George Orwell",
      description:
        "'1984' offers a haunting vision of a dystopian future where truth is subjective and power corrupts absolutely. Under the ever-watchful eye of Big Brother, Orwell unfolds a narrative about the dangers of censorship, surveillance, and the loss of individual identity that resonates in the present day.",
      image: "https://example.com/images/1984.jpg",
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      description:
        "This seminal work by Jane Austen paints a picture of the life of Elizabeth Bennet, her four sisters, and their journey through courtship and the quirks of society in the Georgian era. 'Pride and Prejudice' is a witty exploration of the constraints faced by women in Austen's time, wrapped up in astute observations and a timeless love story.",
      image: "https://example.com/images/prideprejudice.jpg",
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      description:
        "'The Great Gatsby' brilliantly captures the glamour and despair of the Roaring Twenties. Fitzgerald's novel is a scathing critique of the American Dream, artfully presented through the tragic story of Jay Gatsby and his obsession with the elusive Daisy Buchanan.",
      image: "https://example.com/images/greatgatsby.jpg",
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      description:
        "A defining work in American literature, 'The Catcher in the Rye' delves into the challenges of teenage angst and alienation. Following several days in the life of Holden Caulfield, Salinger's novel expertly captures the complexities of adolescence, the phoniness of the adult world, and the struggle to find a connection in an isolating society.",
      image: "https://example.com/images/catcherintherye.jpg",
    },
    {
      title: "Moby-Dick",
      author: "Herman Melville",
      description:
        "'Moby-Dick' is a thrilling saga of revenge and a quest against a ferocious white whale. Through the narrative of Ishmael, Melville examines complex themes like obsession, revenge, and the human struggle against the natural world. A foundational piece of American literature, it combines adventure, philosophy, and allegory.",
      image: "https://example.com/images/mobydick.jpg",
    },
    {
      title: "One Hundred Years of Solitude",
      author: "Gabriel García Márquez",
      description:
        "In 'One Hundred Years of Solitude', Gabriel García Márquez crafts a rich and poetic narrative that weaves the supernatural with the mundane. This landmark novel in the magical realism genre tells the multi-generational story of the Buendía family, whose patriarch founded the fictional town of Macondo, exploring themes of time, memory, and destiny.",
      image: "https://example.com/images/onehundredyearsofsolitude.jpg",
    },
    {
      title: "Brave New World",
      author: "Aldous Huxley",
      description:
        "'Brave New World' is a prophetic and unsettling dystopian work, envisioning a future where society is numbed by comfort and entertainment. Huxley's vision of a high-tech, totalitarian world where humanity is engineered into submission through conditioning and a narcotic called 'soma' is a powerful critique of modern civilization's pursuit of pleasure and security.",
      image: "https://example.com/images/bravenewworld.jpg",
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      description:
        "'The Hobbit' is a classic of children's literature, beloved by generations for its adventurous narrative, rich fantasy world, and the simple, courageous character of Bilbo Baggins. The story unfolds a saga of a reluctant hobbit's journey to win a share of the treasure guarded by the dragon Smaug, a tale that sets the stage for the epic 'Lord of the Rings' trilogy.",
      image: "https://example.com/images/hobbit.jpg",
    },
    {
      title: "The Book Thief",
      author: "Markus Zusak",
      description:
        "Set in Nazi Germany, 'The Book Thief' tells a profound and gripping story through the eyes of Liesel Meminger, a young girl living with a foster family. Narrated by Death, it's a story about the power of words to offer hope and comfort in calamitous times, as Liesel steals books and shares them with her neighbors during bombing raids as well as with the Jewish man hidden in her basement.",
      image: "https://example.com/images/bookthief.jpg",
    },
  ];

  return (
    <div className="book-list">
      <h2>My Book List</h2>
      <ul>
        {books.map((book, index) => (
          <div key={index}>
            <strong>{book.title}</strong> by {book.author}
            <br />
            <p>{book.description}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
