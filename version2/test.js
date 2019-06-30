// VERSION 2

// 1.
// Using JavaScript only (adding HTML to index.html is NOT allowed), create a function that takes as an argument the following array of objects:
const books = [
  {
    bookName: "The Nature of Software Development",
    author: "Ron Jeffries",
    coverURL:
      "https://cdn-images-1.medium.com/max/1200/1*CQRh-pFTZ97ReXogbefleQ.png"
  },
  {
    bookName: "Clean Code",
    author: "Robert Cecil Martin",
    coverURL:
      "https://images-na.ssl-images-amazon.com/images/I/515iEcDr1GL._SX258_BO1,204,203,200_.jpg"
  }
];
// Iterate over the array and output the details of both books into the DOM. Display inside an unordered list.

// 2.
// Make an API call using the Fetch API or the regular XMLHttpRequest (whichever one you're more comfortable with).
// Use the following URL: https://uinames.com/api/?amount=3
// Parse the response and then display the "name" and "surname" of the three people within the DOM (inside an unordered list)

// 3.
// Write a function that takes in an array of country names and returns the country with the longest name. 
// Use the following array as an argument: 
const countries = ["The Netherlands", "Syri// VERSION 2

// 1.
// Using JavaScript only (adding HTML to index.html is NOT allowed), create a function that takes as an argument the following array of objects:
const books = [
  {
    bookName: 'The Nature of Software Development',
    author: 'Ron Jeffries',
    coverURL: 'https://cdn-images-1.medium.com/max/1200/1*CQRh-pFTZ97ReXogbefleQ.png',
  },
  {
    bookName: 'Clean Code',
    author: 'Robert Cecil Martin',
    coverURL:
      'https://images-na.ssl-images-amazon.com/images/I/515iEcDr1GL._SX258_BO1,204,203,200_.jpg',
  },
];
// Iterate over the array and output the details of both books into the DOM. Display inside an unordered list.
function createAndAppend(name, parent, options = {}) {
  const elem = document.createElement(name);
  parent.appendChild(elem);
  Object.keys(options).forEach(key => {
    const value = options[key];
    if (key === 'text') {
      elem.textContent = value;
    } else {
      elem.setAttribute(key, value);
    }
  });
  return elem;
}

function makeListOfArrayElements(arr) {
  const htmlBody = document.body;
  const list = createAndAppend('ul', htmlBody);
  arr.forEach(element => {
    const li = createAndAppend('li', list);
    createAndAppend('p', li, { text: element.bookName });
    createAndAppend('p', li, { text: element.author });
    createAndAppend('img', li, {
      src: element.coverURL,
      alt: `cover of ${element.bookName}`,
    });
  });
}
makeListOfArrayElements(books);
// 2.
// Make an API call using the Fetch API or the regular XMLHttpRequest (whichever one you're more comfortable with).
// Use the following URL: https://uinames.com/api/?amount=3
// Parse the response and then display the "name" and "surname" of the three people within the DOM (inside an unordered list)

// in this example i will use long way to show that i know DOM manipulation
async function fetchAndRender() {
  try {
    const response = await fetch(url);
    fetchedData = response.json();
    fetchedData.then(data => {
      const htmlBody = document.body;
      const list = document.createElement('ul');
      data.forEach(element => {
        const li = document.createElement('li');
        li.innerText = element.name + ' ' + element.surname;
        list.appendChild(li);
      });
      htmlBody.appendChild(list);
    });
  } catch (err) {
    createAndAppend('div', document.querySelector('body'), {
      text: `an Error : ${err.message}`,
      style: 'font-size: 2em; color: red;',
    });
  }
}

const url = 'https://uinames.com/api/?amount=3';
fetchAndRender();
// 3.
// Write a function that takes in an array of country names and returns the country with the longest name.
// Use the following array as an argument:
const countries = ['The Netherlands', 'Syria', 'Turkey', 'Mexico', 'United States'];
function findTheLongestCountryName(countriesArr) {
  const arr = countriesArr.reduce(function(a, b) {
    return a.length > b.length ? a : b;
  });
  return arr;
}
console.log(findTheLongestCountryName(countries)); //to show what returns function
