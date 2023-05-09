const bookDisplay = document.querySelector("[data-book-display]");
const bookTemplate = document.querySelector("[data-book-template]");
const myLibrary = [];

function Book(author, title, pageCount, read) {
  this.id = null;
  this.author = author;
  this.title = title;
  this.pageCount = pageCount;
}

function displayLibrary() {
  bookDisplay.textContent = "";
  for (const book of myLibrary) {
    const bookView = bookTemplate.content.cloneNode(true);

    const titleField = bookView.querySelector("[data-title]");
    const authorField = bookView.querySelector("[data-author]");
    const pageCountField = bookView.querySelector("[data-page-count]");
    titleField.textContent = book.title;
    authorField.textContent = book.author;
    pageCountField.textContent = book.pageCount;

    bookDisplay.append(bookView);
  }
}

displayLibrary();
