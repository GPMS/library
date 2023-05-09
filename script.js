const formDialog = document.querySelector("[data-dialog]");
const form = document.querySelector("[data-form]");
const authorField = document.getElementById("author");
const titleField = document.getElementById("title");
const pageCountField = document.getElementById("page-count");
const readField = document.getElementById("read");
const closeDialogBtn = document.querySelector("[data-close-dialog-btn]");

const bookDisplay = document.querySelector("[data-book-display]");
const bookTemplate = document.querySelector("[data-book-template]");
const addBookTemplate = document.querySelector("[data-add-book-template]");
const myLibrary = [];

function Book(author, title, pageCount, read) {
  this.id = null;
  this.author = author;
  this.title = title;
  this.pageCount = pageCount;
  this.read = read;
}

function displayLibrary() {
  bookDisplay.textContent = "";
  for (const book of myLibrary) {
    const bookView = bookTemplate.content.cloneNode(true);

    const titleField = bookView.querySelector("[data-title]");
    const authorField = bookView.querySelector("[data-author]");
    const pageCountField = bookView.querySelector("[data-page-count]");
    const readField = bookView.querySelector("[data-read]");
    titleField.textContent = book.title;
    authorField.textContent = book.author;
    pageCountField.textContent = book.pageCount;
    readField.checked = book.read;
    const removeBtn = bookView.querySelector("[data-remove-btn]");
    removeBtn.addEventListener("click", () => {
      myLibrary.splice(book.id, 1);
      displayLibrary();
    });

    bookDisplay.append(bookView);
  }
  const addBook = addBookTemplate.content.cloneNode(true);
  bookDisplay.append(addBook);
  const addBookBtn = document.querySelector("[data-add-btn]");
  addBookBtn.addEventListener("click", () => {
    formDialog.showModal();
  });
}

closeDialogBtn.addEventListener("click", () => {
  formDialog.close();
});

function addBookToLibrary(book) {
  book.id = myLibrary.length;
  myLibrary.push(book);
  displayLibrary();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = titleField.value;
  const author = authorField.value;
  const pageCount = pageCountField.value;
  const read = readField.checked;
  if (title.length == 0 || author.length == 0 || pageCount <= 0) {
    alert("Invalid book");
    return;
  }
  const newBook = new Book(author, title, pageCount, read);
  addBookToLibrary(newBook);
  authorField.value = "";
  titleField.value = "";
  pageCountField.value = 0;
  readField.checked = false;
  formDialog.close();
});

displayLibrary();
