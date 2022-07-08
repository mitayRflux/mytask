/**
The task is to implement the Library protocol (you can do that in this file directly).
- No database or any other storage is required, just store data in memory
- No any smart search, use String method contains (case sensitive/insensitive - does not matter)
–   Performance optimizations are optional
*/
var LibraryImpl = (function () {
  function LibraryImpl() {}

  /**
    Adds a new book object to the Library.
    - Parameter book: book to add to the Library
    - Returns: false if the book with same id already exists in the Library, true – otherwise.
  */
  LibraryImpl.prototype.addNewBook = function (book) {
      return false;
  };

  /**
    Deletes the book with the specified id from the Library.
    - Returns: true if the book with same id existed in the Library, false – otherwise.
  */
  LibraryImpl.prototype.deleteBook = function (id) {
      return false;
  };

  /**
    - Returns: 10 book names containing the specified string. If there are several books with the same name, author's name is appended to book's name.
  */
  LibraryImpl.prototype.listBooksByName = function (searchString) {
      return [];
  };

  /**
    - Returns: 10 book names whose author contains the specified string, ordered by authors.
  */
  LibraryImpl.prototype.listBooksByAuthor = function (searchString) {
      return [];
  };

  return LibraryImpl;
}());

function test(lib) {
  assert(!lib.deleteBook("1"));
  assert(lib.addNewBook({ id: "1", name: "1", author: "Lex" }));
  assert(!lib.addNewBook({ id: "1", name: "1", author: "Lex" }));
  assert(lib.deleteBook("1"));
  assert(lib.addNewBook({ id: "4", name: "Name1", author: "Lex3" }));
  assert(lib.addNewBook({ id: "3", name: "Name3", author: "Lex2" }));
  assert(lib.addNewBook({ id: "2", name: "Name2", author: "Lex2" }));
  assert(lib.addNewBook({ id: "1", name: "Name1", author: "Lex1" }));
  var byNames = lib.listBooksByName("Name");
  assert(byNames.indexOf("Lex3 - Name1") >= 0);
  assert(byNames.indexOf("Name2") >= 0);
  assert(byNames.indexOf("Name3") >= 0);
  assert(byNames.indexOf("Lex1 - Name1") >= 0);
  var byAuthor = lib.listBooksByAuthor("Lex");
  assert(byAuthor[0] == "Name1");
  assert(byAuthor[1] == "Name2" || byAuthor[1] == "Name3");
  assert(byAuthor[2] == "Name2" || byAuthor[2] == "Name3");
  assert(byAuthor[3] == "Name1");
}

function assert(condition) {
  if (!condition) {
      throw new Error("Assertion failed");
  }
}
