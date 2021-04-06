class Queue {
  constructor() {
    this.queue = [];
  }

  get lenght() {
    return this.queue.length;
  }

  enqueue(item) {
    return this.queue.push(item);
  }

  dequeue() {
    return this.queue.shift();
  }

  peek() {
    return this.queue[0];
  }

  isEmpty() {
    return this.queue === 0;
  }
}

const shoppers = new Queue();

shoppers.enqueue('Adewale Olaoye');
shoppers.enqueue('Tobi Emmanuel');
shoppers.enqueue('Uche Jombo');

console.log(shoppers, 'SOHPPERS');
console.log('==================================');

console.log(shoppers.peek(), 'next in line');
console.log('==================================');

console.log(shoppers, 'shoppers');
console.log(shoppers.dequeue());
console.log(shoppers, 'SOHPPERS 2');
console.log(shoppers.peek(), 'next in line');
console.log(shoppers.dequeue(), 'remove next in line');
console.log('==================================');
console.log(shoppers, 'SOHPPERS 3');
