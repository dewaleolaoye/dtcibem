// Find the Mammal

const mammal = [
  {
    animal: 'Dog',
    isMammal: true,
  },
  {
    animal: 'Snake',
    isMammal: false,
  },
  {
    animal: 'Cheetah',
    isMammal: true,
  },
];

const result = mammal.filter(({ isMammal }) => isMammal === true);

console.log(result, 'RESULT');
