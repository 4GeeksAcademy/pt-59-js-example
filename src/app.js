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

const renderHanoi = (left, mid, right, total) => {
  const renderTower = (arr) => {
    console.log(arr, total);
    return arr
      .map((ring) => {
        return `
      <div class="progress" role="progressbar">
        <div class="progress-bar" style="width: ${Math.floor(
          (ring / total) * 100
        )}%"></div>
      </div>`;
      })
      .join("");
  };

  return `<div class="row">
      <div class="col col-4 d-flex flex-column justify-content-end align-items-stretch gap-1">
        <h2>Left</h2>
        ${renderTower(left)}</div>
      <div class="col col-4 d-flex flex-column justify-content-end align-items-stretch gap-1">
          <h2>Mid</h2>
        ${renderTower(mid)}</div>
      <div class="col col-4 d-flex flex-column justify-content-end align-items-stretch gap-1">
          <h2>Right</h2>
        ${renderTower(right)}</div>
    </div>`;
};

function* solveHanoi(totalDiscs) {
  let stepNumber = 0;

  let left = new Array(totalDiscs).fill().map((_x, idx) => idx + 1);
  let mid = [];
  let right = [];

  while (right.filter((x) => x).length < totalDiscs) {
    // Move from left to mid or vice versa (depending on legality)
    if (mid[0] === undefined || mid[0] >= left[0]) {
      mid.unshift(left.shift());
    } else {
      left.unshift(mid.shift());
    }
    displayHTML("Iteration:", renderHanoi(left, mid, right, totalDiscs));

    yield stepNumber++;

    // Move from left to right or vice versa (depending on legality)
    if (right[0] === undefined || right[0] >= left[0]) {
      right.unshift(left.shift());
    } else {
      left.unshift(right.shift());
    }
    displayHTML("Iteration:", renderHanoi(left, mid, right, totalDiscs));

    yield stepNumber++;

    // Move from mid to right or vice versa (depending on legality)
    if (right[0] === undefined || right[0] >= mid[0]) {
      right.unshift(mid.shift());
    } else {
      mid.unshift(right.shift());
    }
    displayHTML("Iteration:", renderHanoi(left, mid, right, totalDiscs));

    yield stepNumber++;
  }
}

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
  let totalRings = 4;

  const hanoiSolver = solveHanoi(totalRings);

  for (let step of hanoiSolver) {
    console.log(step);
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
