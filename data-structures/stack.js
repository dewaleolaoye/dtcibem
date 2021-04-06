class Stack {
  constructor() {
    this.stack = [];
  }

  get length() {
    return this.stack.length;
  }

  push(item) {
    return this.stack.push(item);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.length - 1];
  }

  isEmpty() {
    return this.length === 0;
  }
}

let books = new Stack();

books.push('Book 2');
books.push('Book 4');
books.push('Book 3');
books.push('Book 1');

console.log(books, 'BOOKS');
console.log('============================================================');

console.log(books.peek(), 'peek');
console.log('============================================================');

console.log(books, 'BOOKS AGAIN');
console.log('============================================================');
console.log(books.pop(), 'popped value');

console.log(books, 'AFTER POP');

console.log('============================================================');
console.log(books.peek(), 'peek 2');
