// book class
class Book{
    constructor(title, author, bookId){
        this.title = title;
        this.author = author;
        this.bookId = bookId;
    }
    getTitle = () =>{this.title}
    getAuthor = () =>{this.author}
    getBookId = () =>{this.bookId}
}

// UI class (static) - list actions
class UI{
    static displayBooks() {

        const bookDB = Store.getBooks();

        bookDB.forEach(book => {
            UI.addToBookDB(book);
        });
    }

    static deleteBook(el){
        if(el.target.className == 'deleteBtn'){
            table.removeChild(el.target.parentElement.parentElement);
        }
    }

    static showAlert(msg, type){
        const alert = document.querySelector('.alert');

        if(type == 'success'){
            alert.style.backgroundColor = 'lightgreen';
            alert.firstElementChild.innerText = msg;
            alert.style.display = 'flex';
        }
        else if (type == 'fail'){
            alert.style.backgroundColor = 'red';
            alert.firstElementChild.innerText = msg;
            alert.style.display = 'flex';
        }
        else if (type == 'delete'){
            alert.style.backgroundColor = 'lightblue';
            alert.firstElementChild.innerText = msg;
            alert.style.display = 'flex';
        }

        setTimeout(() => {alert.style.display = 'none'}, 1000);
    }

    static addToBookDB(book){
        const list = document.querySelector('.table');
        const listRow = document.createElement('tr');

        listRow.innerHTML = `
        <tr class="dataRow">
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.bookId}</td>
            <td><button class="deleteBtn">x</button></td>
        </tr>
        `;

        list.appendChild(listRow);

        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#bookId').value = '';
    }
}

// Storage class
class Store{

    static getBooks(){
        let books;

        if(localStorage.getItem('books') === null){
            books = [];
        }
        else{
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static addBook(book){
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(bookId){
        const books = Store.getBooks();

        books.forEach((book, index) =>{
            if(book.bookId == bookId){
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }
}


// display list when page loads
document.addEventListener('DOMContentLoaded', UI.displayBooks());

// add book on submit 
const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const bookId = document.querySelector('#bookId').value;

    //change to top success and error message 
    if (title != '' && author != '' && bookId != ''){

        const book = new Book(title,author,bookId);

        // add book to UI
        UI.addToBookDB(book);

        // add book to store
        Store.addBook(book);

        UI.showAlert('Book Added!', 'success');
    }
    else{
        UI.showAlert('Fill in all fields', 'fail');
    }
});

// delete book
const table = document.querySelector('.table');

table.addEventListener('click', (e) =>{
    // remove book from UI
    UI.deleteBook(e);
    // remove book from store
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    UI.showAlert('Book removed!', 'delete');
});
