const Block = require('./block');

const block = new Block('foo', 'h', 'zoo', 'baz');
console.log(block.toString());
console.log(Block.genesis().toString())