let myLibrary = []

let table = document.getElementById('table')

function Book(title, author,pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
}


Book.prototype.changeRead = function() {
    return this.read ? this.read = false : this.read = true
}

function addBook(){
    let getTitle = document.getElementById('getBook').value
    let getAuthor = document.getElementById('getAuthor').value
    let getPages = document.getElementById('getPages').value
    const x = new Book(getTitle,getAuthor,getPages)
    myLibrary.push(x);
    showLibrary();
}



function showLibrary() {
    while (table.rows.length >1) {
        table.deleteRow(1);
    }

    myLibrary.forEach((book,index) => {
        const trtag = document.createElement('tr')

        const element = document.createElement('th')
        element.innerHTML = `${book.title}`
        trtag.appendChild(element)

        const element2 = document.createElement('th')
        element2.innerHTML = `${book.author}`
        trtag.appendChild(element2)

        const element3 = document.createElement('th')
        element3.innerHTML = `${book.pages}`
        trtag.appendChild(element3)

        const buttonRemove = document.createElement('button')
        buttonRemove.setAttribute('onClick', `myLibrary.splice(${index},1); showLibrary()`)
        buttonRemove.style.width = "150px";
        buttonRemove.className = 'button-center'
        buttonRemove.setAttribute("style","height:20px")
        buttonRemove.innerHTML = `Remove`
        trtag.appendChild(buttonRemove)

        document.getElementById("table").appendChild(trtag)
    })
}

let addBookForm = document.forms.addNewBook;
addBookForm.elements.bookName.placeholder = 'Book Name';
addBookForm.elements.author.placeholder = 'Author';


console.table(myLibrary)