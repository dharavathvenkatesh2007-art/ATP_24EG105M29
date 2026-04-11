/*Problem Statement: Library Book Management System
-------------------------------------------------
Objective : Create a Book class and use it to manage a collection of books in a library.

Requirements:
  Create a Book class with the following:

  Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)


  Methods:
      borrow() - Marks the book as not available
      returnBook() - Marks the book as available
      getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() - Returns true if pages > 300, false otherwise




  1. Create at least 5 book objects using the class:
      Example: "Harry Potter", "1984", "The Hobbit", etc.


  2. Perform the following operations:

      i. Display info of all books
      ii. Borrow 2 books and show their availability status
      iii. Return 1 book and show updated status
      iv. Count how many books are "long books" (more than 300 pages)
      v. List all available books
      */

class Book{
  title;
  author;
  pages;
  isAvailable=true;
  constructor(title,author,pages,isAvailable){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.isAvailable=isAvailable;
  }
  borrow(){
    return this.isAvailable=false;
  }
  returnBook(){
    return this.isAvailable=true;
  }
  getInfo(){
    console.log(`The ${this.title} by ${this.author} (${this.pages} pages)`)
    return `The ${this.title} by ${this.author} (${this.pages} pages)`
  }
  isLongBook(){
    if(this.pages>300){
      return true;
    }
    else{
      return false;
    }
  }
}
let book1=new Book("Harry Potter","J.K Rowling",1024,true)
let book2=new Book("A song of Ice and Fire","GOT's author",900,true)
let book3=new Book("Farheniet","farhenhiet's Author",324,true)
let book4=new Book("book4","author4",450,true)
let book5=new Book("book5","author5",700,true)
//1.displaying info of all books
book1.getInfo()
book2.getInfo()
book3.getInfo()
book4.getInfo()
book5.getInfo()

//2.borrow 2 books and show their availability status
book1.borrow()
console.log("Is book",book1.title," available: ",book1.isAvailable)
book2.borrow()
console.log("Is book",book2.title," available: ",book2.isAvailable)

// //3.return 1 book and show availability
book1.returnBook()//return book1
console.log("Is book",book1.title," available: ",book1.isAvailable)
console.log("Is book",book2.title," available: ",book2.isAvailable)

//4.Count how many books are "long books" (more than 300 pages)
//lets create array of objects for better manipulations
const booksArray=[book1, book2, book3, book4, book5]
let count=0
booksArray.filter((ele)=>ele.pages>300?count++:count=count+0)
console.log(count)


//5. List all available books
for(let avail in booksArray){
  if(booksArray[avail].isAvailable==true){
    console.log(booksArray[avail].title)//since book1 and 2 borrowed but only 1 returned that means we only have 4
  }
}

/**
 PS C:\Users\dhara\JavaScript\Assignments\day4> node .\Asginment1.js
The Harry Potter by J.K Rowling (1024 pages)
The A song of Ice and Fire by GOT's author (900 pages)
The Farheniet by farhenhiet's Author (324 pages)
The book4 by author4 (450 pages)
The book5 by author5 (700 pages)
Is book Harry Potter  available:  false
Is book A song of Ice and Fire  available:  false
Is book Harry Potter  available:  true
Is book A song of Ice and Fire  available:  false
5
Harry Potter
Farheniet
book4
book5
 */