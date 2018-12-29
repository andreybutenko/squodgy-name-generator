// Most name components from Gavin Free:
// http://roosterteeth.wikia.com/wiki/Let%27s_Play_Worms

const adjectives = [
  'Cuddling',
  'Dr',
  'Drippy',
  'Flappy',
  'Flippy',
  'Floppy',
  'Fluid',
  'Flung',
  'Fodgy',
  'Foggy',
  'Goopy',
  'Gubbly',
  'Jazzy',
  'Minty',
  'Miss',
  'Mongy',
  'Mr',
  'Mrs',
  'Overhanging',
  'Phungal',
  'Residual',
  'Slimy',
  'Sloppy',
  'Soggy',
  'Splunky',
  'Squodgy',
  'Terrible',
  'Wafty',
  'Wolly',
  'Wonky',
  'Wumpy',
];

const nouns = [
  'Aroma',
  'Bedge',
  'Belding',
  'Bidge',
  'Biff',
  'Bint',
  'Bobby',
  'Bodge',
  'Bondar',
  'Budmar',
  'Clemble',
  'Crumpet',
  'Dibwibble',
  'Div',
  'Dollop',
  'Drillboids',
  'Dunbar',
  'Dunker',
  'Dust',
  'Faff',
  'Fedge',
  'Fidge',
  'Fip',
  'Fleck',
  'Fleg',
  'Flemberbridge',
  'Fod',
  'Fog',
  'Foip',
  'Fudd',
  'Fuglorn',
  'Funker',
  'Funt',
  'Gob',
  'Goggler',
  'Gondola',
  'Goop',
  'Gorp',
  'Gubbler',
  'Gunkhaus',
  'Gurkle',
  'Heimer',
  'Hinge',
  'Kreft',
  'Monger',
  'Mungmeiser',
  'Munkberry',
  'Munkhelm',
  'Murphy',
  'Noggler',
  'Offlebunker',
  'Pheonix',
  'Phump',
  'Piddington',
  'Piff',
  'Pleb',
  'Plunge',
  'Polyp',
  'Quaddle',
  'Quelch',
  'Quiff',
  'Sklog',
  'Slurp',
  'Spaff',
  'Splunt',
  'Sprangle',
  'Spudge',
  'Spuff',
  'Sput',
  'Squelch',
  'Squodge',
  'Stalagtite',
  'Vapor',
  'Wedge',
  'Wibbler',
  'Wob',
  'Wobbler',
  'Woggler',
  'Wong',
  'Wonk',
  'Wump',
  'Wunkle',
];

function selectFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * Randomly generate a name
 * @param {Object} [config] Optional config to customize generation.
 * @param {number} [config.adjectiveChance] Chance to get an adjective. Fraction between 0 and 1.
 * @param {number} [config.doubleNounChance] Chance to get two nouns. Fraction between 0 and 1.
 * @returns {string} 
 */
module.exports = function(config) {
  const opts = {
    adjectiveChance: 0.25,
    doubleNounChance: 0.4,
    ...config
  }

  let res = '';

  if(Math.random() < opts.adjectiveChance) {
    res += selectFromArray(adjectives) + ' ';
  }

  res += selectFromArray(nouns);

  if(Math.random() < opts.doubleNounChance) {
    res += ' ' + selectFromArray(nouns);
  }

  return res;
}