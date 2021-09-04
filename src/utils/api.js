// POST
// {
//   "item_id": "item1",
//   "title": "The Great Gatsby",
//   "category": "Fiction"
// }

// 200 Created

// {
//     "item1": [
//         {
//             "title": "The Great Gatsby",
//             "category": "Fiction"
//         }
//     ]
// }

// DETELE
// 201 The book was deleted successfully!

const bookstoreAPIBaseURI = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Rt4xfKXqnprbF0Parz4X';
const booksBaseURI = `${bookstoreAPIBaseURI}/books`;

const fetchBooks 