const { describe, it } = require('mocha');

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should add 2 normal integers', () => {
    assert.strictEqual(calculateNumber(1, 2), 3);
  });

  it('should round 0.5 to 1', () => {
    assert.strictEqual(calculateNumber(1.5, 2), 4);
  });

  it('should round 1.6 to 2', () => {
    assert.strictEqual(calculateNumber(1.6, 2), 4);
  });

  it('should round 1.4 to 1', () => {
    assert.strictEqual(calculateNumber(2, 1.4), 3);
  });

  it('should add to rounded numbers', () => {
    assert.strictEqual(calculateNumber(1.5, 1.5), 4);
  });
});
