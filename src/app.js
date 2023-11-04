/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// const someConstant = "This is immutable";
// // someConstant = "This means I can't change it."; // This line will throw an error if uncommented.  Try it!

// let someVariable = "This is mutable";
// console.log(someVariable);
// someVariable =
//   "This means it is capable of change, unlike that vending machine.";
// console.log(someVariable);

// Data Types:
// ("strings");
// 42 * 3.1415; // numbers
// true; // booleans
// []; // arrays
// let someObj = {
//   color: "blue",
//   units: "mm",
//   sizes: [1.5, 2, 2.5, 3, 4, 5, 6],
// }; // objects
// null; // nullish values.
// undefined; // nullish values.

// Bare minimum function:
const fib_basic = (n) => {
  // 0, 1, 2, 3, 4, 5, 6,  7,  8
  // 1, 1, 2, 3, 5, 8, 13, 21, 34

  if (n <= 1) {
    return 1;
  }

  let fib_numbers = [1, 1];
  for (let i = 1; i < n; i++) {
    // fib_numbers[n] + fib_numbers[n - 1] --> fib_numbers
    let new_number = fib_numbers[i] + fib_numbers[i - 1];
    fib_numbers.push(new_number);
  }
  return fib_numbers.pop();
};

const renderHanoi = (left, mid, right) => {
  return `
    <div class="row">
      <div class="col col-4 d-flex flex-column justify-content-end align-items-center gap-1">
        <h2>Left</h2>
        ${left
          .map((ring) => "<div class='placeholder col-" + ring + "'></div>")
          .join("")}</div>
      <div class="col col-4 d-flex flex-column justify-content-end align-items-center gap-1">
          <h2>Mid</h2>
        ${mid
          .map((ring) => "<div class='placeholder col-" + ring + "'></div>")
          .join("")}</div>
      <div class="col col-4 d-flex flex-column justify-content-end align-items-center gap-1">
          <h2>Right</h2>
        ${right
          .map((ring) => "<div class='placeholder col-" + ring + "'></div>")
          .join("")}</div>
    </div>
  `;
};

const solveHanoi = (left, mid, right) => {
  let l = left;
  let m = mid;
  let r = right;

  // Move from left to mid or vice versa (depending on legality)
  if (m[0] === undefined || l[0] < m[0]) {
    m.unshift(l.shift());
  } else {
    l.unshift(m.shift());
  }
  displayHTML("Iteration:", renderHanoi(left, mid, right));
  // Move from left to right or vice versa (depending on legality)
  if (r[0] === undefined || l[0] < r[0]) {
    r.unshift(l.shift());
  } else {
    l.unshift(r.shift());
  }
  displayHTML("Iteration:", renderHanoi(left, mid, right));
  // Move from mid to right or vice versa (depending on legality)
  if (r[0] === undefined || m[0] < r[0]) {
    r.unshift(m.shift());
  } else {
    m.unshift(r.shift());
  }
  displayHTML("Iteration:", renderHanoi(left, mid, right));

  return [l, m, r];
};

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

const displayHTML = (label, item) => {
  const target = document.querySelector("#target");
  target.innerHTML += `
    <h3>${label}</h3>
    <div>${item}</div>
    <hr />
  `;
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
  let left = [1, 2, 3, 4];
  let mid = [];
  let right = [];

  const total = left.length;

  // Tower of Hanoi
  displayHTML("Initial Tower", renderHanoi(left, mid, right));

  while (right.length < total) {
    [left, mid, right] = solveHanoi(left, mid, right);
  }

  // Fibonacci Numbers:
  // debugText("Fib #2", fib_basic(2));
  // debugText("Fib #10", fib_basic(10));
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
