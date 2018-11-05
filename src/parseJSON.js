// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  // create a counter to keep track of key-value pairs
  // if counter is an odd number, we set it as the key; even number, set the string to value



  var currentIndex = 0;
  var result;
  var objectCounter = 1;
  /*var nextCharacter = function() {
    currentIndex += 1;
    return json[currentIndex];
  }*/

  var objParser = function(obj) {
    if (Object.keys(obj).length === 0) {
      return {};
    }
    var value = obj.substring(obj.indexOf(':')+1, obj.length).trim();
    result[obj.substring(1, obj.indexOf('"', 1))] = stringParser(value.substring(1,value.length-1));
  }

  var arrayParser = function(obj) {
    console.log(obj);
    if (obj.length === 0) {
      return [];
    }
    var arr = obj.substring(1,obj.length-1).split(',');
    console.log(arr);
    for(var i=0; i<arr.length; i++) {
      result.concat(stringParser(obj[i].substring(1,obj[i].length-1).trim()));
    }
  }

  var stringParser = function(obj) {

    if(obj === "true" || obj === "false") {
      return obj === "true" ? true : false;
    }
    if(obj === 'null') {
      return null;
    }
    return obj;
  }

  for (var currentIndex = 0; currentIndex < json.length; currentIndex++){
    if(json[currentIndex] === '[') {
      result = [];
      result.concat(arrayParser(json.substring(currentIndex,json.lastIndexOf(']') + 1)));
    }
    if (json[currentIndex] === '{') {
      result = {};
      objParser(json.substring(currentIndex+1,json.lastIndexOf('}')));
    }
    if (json[currentIndex] === '"') {
      var word = json.slice(currentIndex + 1, json.indexOf('"',currentIndex +1));
      stringParser(word);
    }
  }
  
  return result;
  // will need an object parser, array parser, string parser
  
};
