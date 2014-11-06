/*
 *
 * Arr.js - Arr!
 *
 * Arr.js enhances the JavaScript Array Object by providing a set of custom functions. 
 *
 * @author Kevin Gimbel <kevingimbel.com>
 * @version 0.0.1
 * @page kevingimbel.com/arr-js
 * 
 *
 *
*/




/*
 * Array.last()
 *
 * Simply returns the last element of an array. If a number is given
 * as a parameter it will return the last N elements.
 * 
 * ```js
 * [0,1,2,3].last() // => 3
 * [0,1,2,3,4,5,6].last(3) // => [6,5,4]
 * ```
 *
 * @params none, number
 * @return last element; {array} range
*/ 
Array.prototype.last = function(num) {
  
 if(typeof num !== 'number') {
   return this[this.length - 1];
 } 
  
  var dump = [], 
      array = this; 
  for(var i = 1; i <= num; i++) {
    dump.push(array[array.length - i]);
  }
  return dump; 
}




/*
 * Array.first()
 *
 * Simply returns the first element of an array. If a number is given
 * as a parameter it will return the first N elements.
 * 
 * ```js
 * [0,1,2,3].first() // => 0
 * [0,1,2,3].first(2) // => [0,1]
 * ```
 *
 * @params none, number
 * @return first element; {array} range
*/ 
Array.prototype.first = function(num) {
  if(typeof num !== 'number') {
    return this[0];
  }
  var dump = [], 
      array = this; 
  for(var i = 0; i <= num - 1; i++) { 
    dump.push(array[i]); 
  } 
  return dump; 
}




/*
* Array.size()
 *
 * Returns the array size (this.length - 1) used in for loops.
 * 
 * ```js
 * [0,1,2,3].size() // => 3
 * ```
 *
 * @params none
 * @return array.length - 1
*/
Array.prototype.size = function() {
  return this.length - 1;
}




/*
* Array.filter()
 *
 * Takes a conditional function and returns every
 * element of the array that's resolved truhty
 *
 * ```js
 * var arr = [0, 15, 6, 13, 20, 'test'];
 * 
 * arr.filter(function(item) {
 *    return item > 10;
 * }); // => [15, 13, 20]
 * ```
 *
 * @params function
 * @return truthy array elements
*/
Array.prototype.filter = function(condition) {
  var dump = [];
  this.forEach(function(index) { 
    if(condition(index)) {
      
      dump.push(index);
    }
  });
  return dump;
}




/*
* Array.reverse() - this function actually exists!
 * 
 * Takes an given array and returns a reversed version.
 *
 * ```js
 * [1,2,3,4,5].reverse(); // => [5,4,3,2,1]
 * ```
 * @params none
 * @return reversed array
*/ 
Array.prototype.reverse = function() {
  var dump = [], 
      array = this; 
  
  for(var i = 1; i <= array.length; i++) {
    dump.push(array[array.length - i]);
  }
  return dump; 
}



/*
* Array.contains()
 *
 * Checks an array for one or more entries, separated by comma (,)
 * *Notice*: If one of the searches is not found this function will return
 * false, otherwise it will return the complete array.
 *
 * ```js
 * [0,1,2,3,4,5].contains(3,4); // => [0,1,2,3,4,5]
 * [0, 2, 'test'].contains('my test') // => false
 * ```
 *
 * @params String(s) of search words
 * @return array; self
 *
*/
Array.prototype.contains = function() {
  var found = [], 
      array = this, 
      search; 

  if(arguments.length > 1) { 
    search = [];
    for(var i = 0; i <= arguments.length - 1; i++) {
      if(array.contains(arguments[i])) {
        found.push(arguments[i]);
      }
    }

    if(found.length === arguments.length) {
      return true;
    }
  
  } else {   
    search = arguments[0];
  }

  if(this.indexOf(search) !== -1) {
    return this;
  }

  return false;
}




/*
* Array.copy()
*
* Create a copy of the current array.
*
* @params none
* @return new array
*/
Array.prototype.copy = function() {
  var array = [];
  
  this.forEach(function(index) {
    array.push(index);
  });

  return array;
}




/*
* Array.replace()
*
* Takes a search word (array element) and replaces it with the
* replacement given as second parameter.
*
* ```js
* [0,1,2,3,4,5].replace(5, 'test'); // => [0,1,2,3,4,'test']
* ```
*
* @params search, replacement
* @return array
*/ 
Array.prototype.replace = function(search, replacement) {
  var i,
      array = this.copy();
  for(i = 0; i <= array.size(); i++) {
    if(array[i] === search) {
      array[i] = replacement;
      return array;
    }
  }
  return false;
}




/*
* Array.merge()
*
* Merges the given array with the array it operates on into one big array.
*
* ```
* ['my', 'array'].merge([4,8,15], [16,23,42]); // => ['my', 'array', 4, 8, 15, 16, 23, 42]
* ``` 
*
* @params one or more arrays
* @return merged array
*/
Array.prototype.merge = function() {
  var i = 0,
      j = 0;
  
  if(!arguments) {
    return false;
  }

  for(i = 0; i <= arguments.length - 1; i++) {
    for(j = 0; j <= arguments[i].length - 1; j++) {
      this.push(arguments[i][j]);
    }
  }

  return this;
}