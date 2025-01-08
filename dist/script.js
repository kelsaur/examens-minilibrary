var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const book1 = document.querySelector('.book-1');
const book2 = document.querySelector('.book-2');
const book3 = document.querySelector('.book-3');
const book4 = document.querySelector('.book-4');
const book5 = document.querySelector('.book-5');
const book6 = document.querySelector('.book-6');
const book7 = document.querySelector('.book-7');
const book8 = document.querySelector('.book-8');
const books = [book1, book2, book3, book4, book5, book6, book7, book8];
/*Fetch books information*/
const fetchBooksData = () => __awaiter(this, void 0, void 0, function* () {
    const response = yield fetch('https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books', {
        method: 'GET'
    });
    //console.log(response) Kollar vad reponsen heter
    const booksData = yield response.json();
    console.log('Fetched data: ', booksData);
    return booksData; //To be able to use it later in fetchAndDisplayBookInfo
});
fetchBooksData();
//Display the fetched books info
const fetchAndDisplayBookInfo = () => __awaiter(this, void 0, void 0, function* () {
    //Calling and saving the books info in a variable
    let booksData = yield fetchBooksData();
    console.log(booksData);
    //Loop through the fetched data, since both fetched data and array of books have just as many indexes, only one lop is needed
    for (let i = 0; i < booksData.length; i++) {
        const currentBookData = booksData[i];
        const currentBook = books[i];
        console.log(booksData[i]); //- See fetched data names
        //If indexes match print out this to querySelectd classes in HTML
        if (currentBook) {
            currentBook.addEventListener('click', () => {
                let bookTitle = document.querySelector('.current-book-title');
                let bookAuthor = document.querySelector('.current-book-author');
                let bookDescription = document.querySelector('.current-book-description');
                let bookAudience = document.querySelector('.current-book-audience');
                let bookPages = document.querySelector('.current-book-pages');
                let bookPublished = document.querySelector('.current-book-first-published');
                let bookPublisher = document.querySelector('.current-book-publisher');
                let currentBookCoverTitle = document.querySelector('.current-book-cover-title');
                let currentBookCoverAuthor = document.querySelector('.current-book-cover-author');
                if (bookTitle)
                    bookTitle.textContent = currentBookData.title;
                if (bookAuthor)
                    bookAuthor.textContent = currentBookData.author;
                if (bookDescription)
                    bookDescription.textContent = currentBookData.plot;
                if (bookAudience)
                    bookAudience.textContent = currentBookData.audience;
                if (bookPages)
                    bookPages.textContent = `${currentBookData.pages}`;
                if (bookPublished)
                    bookPublished.textContent = `${currentBookData.year}`;
                if (bookPublisher)
                    bookPublisher.textContent = currentBookData.publisher;
                if (currentBookCoverTitle)
                    currentBookCoverTitle.textContent = currentBookData.title;
                if (currentBookCoverAuthor)
                    currentBookCoverAuthor.textContent = currentBookData.author;
                console.log(currentBookData);
                //Decide which CSS class is displayed based on te chosen planet index
                let currentBookColor = document.querySelector('.current-book-cover');
                if (i === 0) {
                    currentBookColor.style.backgroundColor = "rgb(90, 153, 74)";
                }
                else if (i === 1) {
                    currentBookColor.style.backgroundColor = "rgb(206, 198, 185)";
                }
                else if (i === 2) {
                    currentBookColor.style.backgroundColor = "rgb(113, 163, 193)";
                }
                else if (i === 3) {
                    currentBookColor.style.backgroundColor = "rgb(159, 109, 82)";
                }
                else if (i === 4) {
                    currentBookColor.style.backgroundColor = "rgb(124, 145, 166)";
                }
                else if (i === 5) {
                    currentBookColor.style.backgroundColor = "rgb(214, 150, 98)";
                }
                else if (i === 6) {
                    currentBookColor.style.backgroundColor = "rgb(173, 217, 230)";
                }
                else if (i === 7) {
                    currentBookColor.style.backgroundColor = "rgb(186, 55, 86)";
                }
                //Change visibility
                const container = document.querySelector('.container');
                const containerApi = document.querySelector('.container-API');
                container.style.display = 'none';
                containerApi.style.display = 'flex';
            });
        }
    }
});
fetchAndDisplayBookInfo();
