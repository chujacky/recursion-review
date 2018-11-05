// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  // create results array
  var results = [];

  // if there's a classList and it contains - target
  var getElementByNode = function(element) {
    if (element.classList && element.classList.contains(className)){
      results.push(element);
    }
    if (element.childNodes) {
      for(var i=0; i<element.childNodes.length; i++) {
        getElementByNode(element.childNodes[i]);  
      }
    }
  }
  getElementByNode(document.body);
    // add it to the results
  // if it has childNodes
    // loop that we can use for recursion - check node
  // return results
  return results;
};
