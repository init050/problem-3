# Filter by Term

This is a JavaScript function that filters an array of objects based on a search term, specifically looking for the term within the `url` property of each object.

## Project Overview

The `filterByTerm` function is a utility for searching through a list of objects. It takes an array of objects (each with a `url` property) and a search term, and it returns a new array containing only the objects where the `url` property matches the search term.

This project is a good example of a common data filtering task and includes basic error handling for empty inputs.

## Features

*   **Filters by search term:** Searches for a given string within the `url` property of objects in an array.
*   **Case-insensitive:** The search is case-insensitive, so "Link" and "link" will produce the same results.
*   **Error handling:** Throws an error if the input array or the search term is empty.
*   **Unit tests:** Comes with a testing setup using Jest.

## Technologies Used

*   **Language:** JavaScript
*   **Testing:** [Jest](https://jestjs.io/)

## Installation and Setup

To use this function and run the tests, you'll need to have Node.js and npm installed.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/init050/problem-3.git
    cd JS/problem-3
    ```

2.  **Install the dependencies:**
    ```bash
    npm install
    ```

## How to Use

You can use the `filterByTerm` function by importing it into your own JavaScript files.

```javascript
const filterByTerm = require('./src/index');

const inputArray = [
  { id: 1, url: "https://www.url1.dev" },
  { id: 2, url: "https://www.url2.dev" },
  { id: 3, url: "https://www.link3.dev" }
];

const searchTerm = 'link';

const filteredArray = filterByTerm(inputArray, searchTerm);

console.log(filteredArray);
// Output: [ { id: 3, url: "https://www.link3.dev" } ]
```

### Running the Tests

To run the included tests, use the following command:

```bash
npm test
```

## Future Improvements

*   **More flexible filtering:** Allow the user to specify which property to search on, instead of hardcoding it to `url`.
*   **Regular expression support:** Add support for using regular expressions as the search term for more advanced filtering.
*   **TypeScript conversion:** The `package.json` includes TypeScript dependencies, so the project could be converted to TypeScript for better type safety and more explicit object shapes.
