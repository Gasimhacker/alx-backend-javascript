function calculateNumber(type, a, b) {
  if (type === 'SUM') {
    return Math.round(a) + Math.round(b);
  }
  if (type === 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  }
  if (type === 'DIVIDE') {
    return b === 0 ? 'Error' : Math.round(a) / Math.round(b);
  }
  return 0;
}

module.exports = calculateNumber;
