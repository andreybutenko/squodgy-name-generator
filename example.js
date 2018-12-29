const generateName = require('./index.js');

console.log('Some examples of name generation:')
for(let i = 0; i < 5; i++) {
  console.log('> ' + generateName());
}

console.log('\nName generation when adjectiveChance = 1')
for(let i = 0; i < 3; i++) {
  console.log('> ' + generateName({ adjectiveChance: 1 }));
}

console.log('\nName generation when doubleNounChance = 0')
for(let i = 0; i < 3; i++) {
  console.log('> ' + generateName({ doubleNounChance: 0 }));
}