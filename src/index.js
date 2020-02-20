
exports.min = function min (array) {
  if (!array || !array.length) return 0;
  return Math.min(...array);
}

exports.max = function max (array) {
  if (!array || !array.length) return 0;
  return Math.max(...array) || 0;
}

exports.avg = function avg (array) {
  if (!array || !array.length) return 0;
  return array.reduce((acc, cur) => acc + cur) / array.length;
}
