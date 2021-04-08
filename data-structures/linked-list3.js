function makeNode(value) {
  return {
    value: value,
    next: null,
  };
}

class List {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    let node = makeNode(value);

    // is it currently empty?
    if (!this.tail) {
      this.head = this.tail = node;

      return node;
    }

    // If it's not empty, tack this on the end,
    // and update `tail` to point at this new node

    this.tail.next = node;
    this.tail = node;

    // return the node we added;
    return node;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const test = new List();

console.log(test, 'FIRST, as an empty list');
test.print();
console.log(test, 'with contents');
test.append('t');
test.append('e');
test.append('s');
test.append('t');
test.print();
