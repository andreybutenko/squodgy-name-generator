# Squodgy Name Generator

Name generator based on the [worm names](http://roosterteeth.wikia.com/wiki/Let%27s_Play_Worms) of [Gavin Free](https://twitter.com/GavinFree)!

## Example Output

```
Some examples of name generation:
> Bedge Monger
> Wobbler Kreft
> Splunky Munkberry Wob
> Gurkle
> Sloppy Aroma Splunt

Name generation when adjectiveChance = 1
> Minty Dibwibble Gurkle
> Goopy Fod
> Flappy Bidge Plunge

Name generation when doubleNounChance = 0
> Kreft
> Fodgy Spaff
> Piff
```

## Install and Usage

Install via [npm](https://www.npmjs.com/package/squodgy-name-generator):

```
npm i squodgy-name-generator
```

Usage:

```javascript
const generateName = require('squodgy-name-generator');

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
```

