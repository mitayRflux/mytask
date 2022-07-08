const books = require('./data');

class Library{
  constructor(arrF,arrN,arrAu){
     this.listBook = [];
     this.listByName = [];
     this.listByAuthor = [];
  }

   addNewBook(id,elem){
    var adds=this.listBook.find(elem=>elem.id===id);
    if(!adds){this.listBook.push(elem);return true;}else{return false;}
    
  }

  deleteBook(id,elem){
    this.listBook.splice(this.listBook.findIndex(item=>item.id===id),elem);
    console.log('delete book');
  }

   listName(name){
    this.listByName=this.listBook.filter(item=>item.name===name);
    return this.listByName;
   }
  
   listAuthor (author) {
    this.listByAuthor = this.listBook.filter(item=>item.author===author);
    return this.listByAuthor;
   }
  
    validString(id,elem){
    if(isNaN(id)&&isNaN(elem)){
      return true;
    }else{return false;}
   }
  
  
}

let oneLibrary = new Library();

console.log(
  oneLibrary.addNewBook('1',books.book),
  oneLibrary.addNewBook('2',books.book1),
  oneLibrary.addNewBook('1',books.book),
  oneLibrary.addNewBook('3',books.book2),
  oneLibrary.addNewBook('4',books.book3),
  oneLibrary.addNewBook('5',books.book4),
  oneLibrary.addNewBook('6',books.book5),
  oneLibrary.addNewBook('7',books.book6),
  oneLibrary.addNewBook('3',books.book2),
  oneLibrary.deleteBook('3',1),
  oneLibrary.listName('12'),
  oneLibrary.listAuthor('Gex')
);

console.log(oneLibrary.listBook);


module.exports = {Library,oneLibrary};