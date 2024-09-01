const { describe, it } = require('mocha');

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should add two normal integers', () => {
    assert.strictEqual(calculateNumber(1, 2), 3);
  });

  it('should round 1.5 to 2', () => {
    assert.strictEqual(calculateNumber(1.5, 2), 4);
  });

  it('should round 1.6 to 2', () => {
    assert.strictEqual(calculateNumber(1.6, 2), 4);
  });

  it('should round 1.4 to 1', () => {
    assert.strictEqual(calculateNumber(1.4, 2), 3);
  });

  it('should round the second number', () => {
    assert.strictEqual(calculateNumber(1, 2.6), 4);
  });

  it('should add two rounded numbers', () => {
    assert.strictEqual(calculateNumber(1.5, 1.5), 4);
  });
});
