// https://daveceddia.com/linked-lists-javascript/

let list = null;

let node = {
  value: null,
  next: null,
};

function makeNode(value) {
  return {
    value: value,
    next: null,
  };
}

// create the nodes;

let four = makeNode(4);
let three = makeNode(3);
let two = makeNode(2);
let one = makeNode(1);

// console.log(two, 'FOUR');

// link them together
four.next = three;
three.next = two;
two.next = one;

function printList(list) {
  let current = list;

  while (current) {
    console.log(current, 'current value');
    // Advance to the next node in the list by replacing
    // current with whatever `next` points to
    current = current.next;
  }
}

// printList(four);
// 4
// 3
// 2
// 1

// printList(two);
printList(null);
