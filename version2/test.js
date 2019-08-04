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
var iteratorFunc = function (arr) {
  var ul = '<ol>';
  for (var bookObj of arr) {
    ul += '<li><ul>';
    ul += '<li>Book Name: ' + bookObj.bookName + '</li>';
    ul += '<li>Author: ' + bookObj.author + '</li>';
    ul += '<li><img src="' + bookObj.coverURL + '" alt="cover url" style="height: 50px;"></li>';
    ul += '</ul></li>';
  }
  ul += '</ol>'
  document.write(ul);
}

iteratorFunc(books);
// 2.
// Make an API call using the Fetch API or the regular XMLHttpRequest (whichever one you're more comfortable with).
// Use the following URL: https://uinames.com/api/?amount=3
// Parse the response and then display the "name" and "surname" of the three people within the DOM (inside an unordered list)

/* XMLHttpRequest 
var apiCall = new XMLHttpRequest();
apiCall.open('GET', 'https://uinames.com/api/?amount=3');
apiCall.send();
apiCall.onload = function() {
  // document.write(apiCall.status);
  // document.write('<br>');
  // document.write(apiCall.response);
  var people = '<ul>';
  var PeopleObj = JSON.parse(apiCall.response);
  document.write(JSON.stringify(PeopleObj));
  for (var person of PeopleObj) {
    people =+ '<li>Name: ' + person.name + ', Surname: ' + person.surname + '</li>'; 
  }
  people += '</ul>';
  document.write(people);
}

apiCall.onerror = function() {
  document.write('Error occured while fetching data from API. Status Code: ' + apiCall.status            
  + 'Error message: ' + apiCall.statusText);
} */
fetch('https://uinames.com/api/?amount=3')
  .then(function(response) {
    return response.json();
  })
  .then(function(PeopleObj) {
    var people = '<ul>';
    for (var person of PeopleObj) {
      people += '<li>Name: ' + person.name + ', Surname: ' + person.surname + '</li>'; 
    }
    people += '</ul>';
    document.write(people);
  })
  .catch(function(err){
    document.write('Error occured while fetching data from API. Status Code: ' + err.status            
  + 'Error message: ' + err.message);
  });

// var fetchSync = await fetch('https://uinames.com/api/?amount=3');
// document.write(JSON.stringify(fetchSync));

// 3.
// Write a function that takes in an array of country names and returns the country with the longest name. 
// Use the following array as an argument: 
const countries = ["The Netherlands", "Syria", "Turkey", "Mexico", "United States"];

var longestNameFunc = function(names) {
  var theLongestName = '';
  for (var name of names) {
    if (name.length > theLongestName.length) theLongestName = name;
  }
  return theLongestName;
}

document.write('Country with the longest name: ' + longestNameFunc(countries));
