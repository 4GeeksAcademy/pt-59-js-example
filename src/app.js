/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// The "safe" way to declare a function:
const debugText = (label, item) => {
  const target = document.querySelector("#target");
  target.innerHTML =
    `
    <h3>${label}</h3>
    <code>${JSON.stringify(item)}</code>
    <hr />
  ` + target.innerHTML;
};

// The other way to declare a function:
function someFunc(a, b) {
  return a * b;
}

function* idMaker() {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
  let index = 0;
  while (true) {
    yield index++;
  }
}

const gen = idMaker();

/*
 * We're setting window.onload to an
 * anonymous function.
 */

const books = [
  {
    title: "Neuromancer",
    author: "William Gibson",
    year_published: 1984,
    isbn: "",
    rating: 85,
  },
  {
    title: "Snow Crash",
    author: "Neal Stephenson",
    year_published: 1992,
    isbn: "978-01336162-0",
    rating: 100,
  },
  {
    title: "Altered Carbon",
    author: "Richard K. Morgan",
    year_published: 2002,
    isbn: "",
    rating: 90,
  },
  {
    title: "Cryptonomicon",
    author: "Neal Stephenson",
    year_published: 2000,
    isbn: "978-0-380-78862-0",
    rating: 95,
  },
  {
    title: "Consider Phlebas",
    author: "Ian M. Banks",
    year_published: 1987,
    isbn: "0-333-45430-8",
    rating: 99,
  },
  {
    title: "American Gods",
    author: "Neil Gaiman",
    year_published: 2001,
    isbn: "0-380-97365-0",
    rating: 95,
  },
  {
    title: "Going Postal",
    author: "Terry Pratchett",
    year_published: 2004,
    isbn: "0-385-60342-8",
    rating: 97,
  },
];

window.onload = () => {
  // Uncomment the code you want to check out:
  // for (let i = 0; i < 10; i++) {
  //   debugText("ID:", gen.next().value);
  // }
  // ----------------------
  // Iteration:
  // FOR loop.
  // for (let i = 0; i < 10; i++) {
  //   debugText("We are on loop #:", i);
  // }
  // FOR OF loop:
  // for (let book of books) {
  //   debugText(book.title, book);
  // }
  // FOR IN loop:
  // for (let idx in books[0]) {
  //   debugText(idx, books[0][idx]);
  // }
  // WHILE loop:
  // let i = 0;
  // while (i < 10) {
  //   debugText("We are on loop #:", i);
  //   i++;
  // }
  // `break` lets you exit iteration early.
  // ----------------------
  // Array Methods
  // books.forEach((item) => {
  //   debugText(item.title, item);
  // });
  // debugText(
  //   "Map:",
  //   books.map((item, idx) => {
  //     return `Book number ${idx} is titled ${item.title}`;
  //   })
  // );
  // ----------------------
  // Control Flow:
  // IF statement:
  // let toggle = 3;
  // if (toggle > 4) {
  //   debugText("This will run if toggle is gt 4", toggle);
  // }
  // // ELSE IF
  // else if (toggle < 4) {
  //   debugText("This will run if toggle is lt 4", toggle);
  // }
  // // ELSE
  // else {
  //   debugText("This will run all predicates are falsy.", toggle);
  // }
};
