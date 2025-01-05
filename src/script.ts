const book1: HTMLElement | null = document.querySelector('.book-1')
const book2: HTMLElement | null = document.querySelector('.book-2')
const book3: HTMLElement | null = document.querySelector('.book-3')
const book4: HTMLElement | null = document.querySelector('.book-4')
const book5: HTMLElement | null = document.querySelector('.book-5')
const book6: HTMLElement | null = document.querySelector('.book-6')
const book7: HTMLElement | null = document.querySelector('.book-7')
const book8: HTMLElement | null = document.querySelector('.book-8')

const books: (HTMLElement | null)[] = [book1, book2, book3, book4, book5, book6, book7, book8]

interface bookData {
  id: number,
  title: string,
  author: string,
  plot: string,
  audience: string,
  pages: number,
  year: number,
  publisher: string
}

/*Fetch books information*/
const fetchBooksData = async (): Promise<bookData[]> => {
  const response = await fetch('https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books', {
    method: 'GET'
  })
  //console.log(response) Kollar vad reponsen heter
  
  const booksData: bookData[] = await response.json()
  console.log('Fetched data: ', booksData)
  return booksData //To be able to use it later in fetchAndDisplayBookInfo
}
fetchBooksData()


//Display the fetched books info
const fetchAndDisplayBookInfo = async () => {
  //Calling and saving the books info in a variable
  let booksData = await fetchBooksData()
  console.log(booksData)

  //Loop through the fetched data, since both fetched data and array of books have just as many indexes, only one lop is needed
  for (let i = 0; i < booksData.length; i++) {
    
    const currentBookData = booksData[i]
    const currentBook = books[i]
    console.log(booksData[i]) //- See fetched data names


    //If indexes match print out this to querySelectd classes in HTML
    if (currentBook) {
      currentBook.addEventListener('click', () => {
      let bookTitle: HTMLElement | null = document.querySelector('.current-book-title')
      let bookAuthor: HTMLElement | null = document.querySelector('.current-book-author')
      let bookDescription: HTMLElement | null = document.querySelector('.current-book-description')
      let bookAudience: HTMLElement | null = document.querySelector('.current-book-audience')
      let bookPages: HTMLElement | null = document.querySelector('.current-book-pages')
      let bookPublished: HTMLElement | null = document.querySelector('.current-book-first-published')
      let bookPublisher: HTMLElement | null = document.querySelector('.current-book-publisher')
      let currentBookCoverTitle: HTMLElement | null = document.querySelector('.current-book-cover-title')
      let currentBookCoverAuthor: HTMLElement | null = document.querySelector('.current-book-cover-author')

      if(bookTitle) bookTitle.textContent = currentBookData.title
      if(bookAuthor) bookAuthor.textContent = currentBookData.author
      if(bookDescription) bookDescription.textContent = currentBookData.plot
      if(bookAudience) bookAudience.textContent = currentBookData.audience
      if(bookPages) bookPages.textContent = `${currentBookData.pages}`
      if(bookPublished) bookPublished.textContent = `${currentBookData.year}`
      if(bookPublisher) bookPublisher.textContent = currentBookData.publisher

      if(currentBookCoverTitle) currentBookCoverTitle.textContent = currentBookData.title
      if(currentBookCoverAuthor) currentBookCoverAuthor.textContent = currentBookData.author


      console.log(currentBookData)


    //Decide which CSS class is displayed based on te chosen planet index
    let currentBookColor: HTMLElement | null = document.querySelector('.current-book-cover')

    if( i === 0) {
      currentBookColor.style.backgroundColor = "rgb(90, 153, 74)"
    } else if (i === 1){
      currentBookColor.style.backgroundColor = "rgb(206, 198, 185)"
    } else if (i === 2){
      currentBookColor.style.backgroundColor = "rgb(113, 163, 193)"
    } else if (i === 3){
      currentBookColor.style.backgroundColor = "rgb(159, 109, 82)"
    } else if (i === 4){
      currentBookColor.style.backgroundColor = "rgb(124, 145, 166)"
    } else if (i === 5){
      currentBookColor.style.backgroundColor = "rgb(214, 150, 98)"
    } else if (i === 6){
      currentBookColor.style.backgroundColor = "rgb(173, 217, 230)"
    } else if (i === 7){
      currentBookColor.style.backgroundColor = "rgb(186, 55, 86)"
    }

    //Change visibility
    const container: HTMLElement | null = document.querySelector('.container')
    const containerApi: HTMLElement | null = document.querySelector('.container-API')

    container.style.display = 'none'
    containerApi.style.display = 'flex'
    })
    }
  }
}
fetchAndDisplayBookInfo()