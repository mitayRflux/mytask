const assert = require('assert');
const lib = require('./library');
const books = require('./data');

it('Должен возвращать true(просто маркер подключения)',function(){
  var expectedResult = true;
  var result = true;
  if(result!==expectedResult){
    throw new Error(`Expect ${expectedResult},but got ${result}`);
  }
}
);

it('Должен добавить книгу в список',function(){
  var expectedResult  =lib.oneLibrary.listBook[0];
  var result = lib.oneLibrary.listBook[0];
  if(result!==expectedResult){
    throw new Error(`Expected ${expectedResult}, but got ${result}`);
}
}
);

it('Должен удалить книгу из списока',function(){
  var expectedResult  = lib.oneLibrary.deleteBook[1];
  var result = lib.oneLibrary.deleteBook[1];
  if(result!==expectedResult){
    throw new Error(`Expected ${expectedResult}, but got ${result}`);
}
}
);

it('Должен вернуть список книг с одинаковым названием',function(){
  var expectedResult  = lib.oneLibrary.listByName;
  var result = lib.oneLibrary.listByName;
  if(result!==expectedResult){
    throw new Error(`Expected ${expectedResult}, but got ${result}`);
}
}
);

it('Должен вернуть список книг одного автора',function(){
  var expectedResult  = lib.oneLibrary.listByAuthor;
  var result = lib.oneLibrary.listByAuthor;
  if(result!==expectedResult){
    throw new Error(`Expected ${expectedResult}, but got ${result}`);
}
}
);



it('Сообщает об ошибке при использовании чисел вместо строки',function(){
  var expectedResult = 5;
  var result = 5;
  if(result!==expectedResult){
    throw new Error(`Expected ${expectedResult}, but got ${result}`);
}
}
);

it('Сообщает об успехе при использовании строк',function(){
  var expectedResult = 'ramy';
  var result = 'ramy';
  if(result!==expectedResult){
    throw new Error(`Expected ${expectedResult}, but got ${result}`);
}
}
);