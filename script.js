/* const currentDate = new Date('1999/01/02')

console.log(currentDate); */

function Book(title, author, year, genre) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre
    this.age = function(){
        const d = new Date()
        const currentYear = d.getFullYear()
        return currentYear - this.year
    }
}

const myFavouriteBook = new Book('Háború és béke', 'Tolsztoj', 1867, 'historical novel')
console.log(myFavouriteBook.age());

const mySecondFavouriteBook = new Book('Algebra alapjai', 'Joe Algebra', 1992, 'sci-fi')
console.log(mySecondFavouriteBook.title);