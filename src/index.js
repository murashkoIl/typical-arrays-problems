exports.min = function min(arr){
  return (arr && arr.reduce((prev, current) => 
    (prev < current ? prev : current), 0)) || 0;
}

exports.max = function max(arr){
  return (arr && arr.reduce((prev, current) =>
    (prev > current ? prev : current), 0)) || 0;
}

exports.avg = function avg(arr){
  return (arr && arr.reduce((prev, current) =>
    (prev += current), 0) / arr.length) || 0;
}
