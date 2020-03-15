
exports.min = function min (array) {
  if ( !Array.isArray(array)) return 0;
  if ( array.length == 0 ) return 0;
  var min = Math.min.apply(null, array);
  return min;
}

exports.max = function max (array) {
  if ( !Array.isArray(array)) return 0;
  if ( array.length == 0 ) return 0;
  var max = Math.max.apply(null, array);
  return max;
}

exports.avg = function avg (array) {
  if ( !Array.isArray(array)) return 0;
  if ( array.length == 0 ) return 0;
  var avg =  array.reduce((a, b) => (a + b)) / array.length;
  return avg;
}
