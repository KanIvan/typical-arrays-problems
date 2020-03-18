exports.min = function min (array) {
  if (array == undefined || array.length == 0) {
      return [0]
  }
  else{
  var a = array[0]; 
  for (var i = 0; i < array.length; i++) { 
      if (a > array[i]) a = array[i];
}}
  return a;
}

exports.max = function max (array) {
  if (array == undefined || array.length == 0) {
      return [0]
  }
  else{
  var a = array[0]; 
  for (var i = 0; i < array.length; i++) { 
      if (a < array[i]) a = array[i];
}}
  return a;
}

exports.avg = function avg (array) {
  if (array == undefined || array.length == 0) {
      return [0]
  }
  else{
  var a = 0; 
  for (var i = 0; i < array.length; i++) { 
      a = a + array[i];
}
    var b = a / array.length;
}
  return b;
}