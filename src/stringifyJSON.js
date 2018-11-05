// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // go through each data and return accordingly
    // undefined, number, null, boolean, string, array, object
  if (obj === null){
    return "null";
  }
  if (typeof obj === "string") {
    return '"' + obj + '"';
  }
  // Array - use recursive function at each iteration
  if (Array.isArray(obj)) {
    var arr = [];
    for(var i=0; i<obj.length; i++) {
      arr.push(stringifyJSON(obj[i]));
    }
    return "[" + arr.join(',') + "]";
  }
  // Object - use recursive for obj[key]
  if (typeof obj === "object") {
    var result = [];
    for (var key in obj){
      if(obj[key] === undefined || typeof obj[key] === 'function') {
        break;
      }
      result.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
    }
    return "{" + result.join(",") + "}";
  }
  return obj.toString();
};
