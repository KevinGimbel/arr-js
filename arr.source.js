/*
 *
 * Arr.js - Arr!
 *
 * Arr.js enhances the JavaScript Array Object by providing a set of custom functions. 
 *
 * @author Kevin Gimbel <kevingimbel.com>
 * @version 0.0.1
 * @project page kevingimbel.com/arr-js
 * 
 *
 *
*/
"use strict";









//
// Array.last()
//
// Simpy returns the last element of an array. If a number is given
// as a parameter it will return the last N elements.
//
// @params none, number
// @return last element or range (when given a number)
// 
Array.prototype.last = function(num) {
  var i;
  // if there's no number given just return the last element
 if(typeof num !== 'number') {
   return this[this.length - 1];
 } 
  // "else", return an array of last entries based on the number provided
  var dump = [], // a dump array to return
      array = this; // reassigning this (current array) to a var
  for(i = 1; i <= num; i++) {
    dump.push(array[array.length - i]);
  }
  return dump; // return the dump array
}









//
// Array.first()
//
// Simpy returns the first element of an array. If a number is given
// as a parameter it will return the first N elements.
//
// @params none, number
// @return first element or range (when given a number)
// 
Array.prototype.first = function(num) {
  var i;

  if(typeof num !== 'number') {
    return this[0];
  }
  var dump = [], // dump array
      array = this; // reasigning this (current array) to the var array
  for(i = 0; i <= num - 1; i++) { // simple looping
    dump.push(array[i]); // and pushing
  } 
  return dump; // returning the new array
}









//
// Array.empty()
//
// Returns true if the array is empty, if it's not it'll
// return the array.
//
// @params none
// @return true, array
// 
Array.prototype.empty = function(num) {
  if(this.length > 0) {
    return this;
  }
  return true;
}









//
// Array.filter()
//
// Takes a conditional function and returns every
// element of the array that's resolved truhty
//
// var arr = [0, 15, 6, 13, 20, 'test'];
// 
// arr.filter(function(item) {
//    return item > 10;
// }); // => [15, 13, 20]
//
// @params function
// @return truthy array elements
//
Array.prototype.filter = function(condition) {
  var dump = []; // dump array to operate with
  // calling forEach on the array
  this.forEach(function(index) { 
    // testing if the conditional function resolves to true
    if(condition(index)) {
      // if so, pushing the index into the dump array
      dump.push(index);
    }
  });
  // and return the dump array
  return dump;
}









//
// Array.size()
//
// Returns the _computable_ array size (this.length - 1)
//
// @params none
// @return array.length - 1
//
Array.prototype.size = function() {
  return this.length - 1;
}









//
// Array.reverse() - this function actually exists!
// 
// Takes an given array and returns a reversed version.
//
// @params none
// @return reversed array
// 
Array.prototype.reverse = function() {
  var dump = [], // a dump array that'll be returned
      array = this, // reassigning this (current array) to a var
      i;
  // now we just go through all the items, pushing them into the array...
  for(i = 1; i <= array.length; i++) {
    // startung with the last element and going down to element 0. 
    dump.push(array[array.length - i]);
  }
  return dump; // return the dump array
}









//
// Array.contains()
//
// Checks an array for one or more entries, seperated by comma (,)
// Notice: If one of the searches is not found this function will return
// false, otherwise it will return the complete array.
//
// @params String(s) of search words
// @return array; self
//
// [0,1,2,3,4,5].contains(3,4); // => [0,1,2,3,4,5]
// [0, 2, 'test'].contains('my test') // => false
//

Array.prototype.contains = function() {
  var found = [], // an array of all found elements (this is important!)
      array = this, // a reference to the current array
      search, // search - either one or more arguments
      i;
  
  // if there's more than one argument passed
  if(arguments.length > 1) {
    // make search an array
    search = [];
    // loop through all the arguments (-1; just like normal arrays)
    for(i = 0; i <= arguments.length - 1; i++) {
      // call contains() on every single argument
      if(array.contains(arguments[i])) {
        // and if it returns the array (so not false), push it to
        // the found elements
        found.push(arguments[i]);
      }
    }
    // if the found array is as long as the arguments array,
    // we can be sure everything was found and return true
    if(found.length === arguments.length) {
      return true;
    }
  // if arguments is not bigger than 1
  } else {
    // asume we're not searching for multipe things
    search = arguments[0];
  }
  
  // if it's a single-search, just use indexOf() to check if the
  // index we search is present.
  // indexOf will return the ARRAY index 
  // [1,2,3].indexOf(2); // => 1
  // or -1 if the element is not in the array.
  if(this.indexOf(search) !== -1) {
    return this;
  }
  // if all things fail, return false - the searched index
  // is not in this array.
  return false;
}









//
// Array.copy()
//
// Create a copy of the current array.
//
// @params none
// @return new array
//
Array.prototype.copy = function() {
  var array = [];
  
  this.forEach(function(index) {
    array.push(index);
  });

  return array;
}









//
// Array.replace()
//
// Takes a search word (array element) and replaces it with the
// replacement given as second parameter.
//
// @params search, replacement
// @return replaced element
// 
Array.prototype.replace = function(search, replacement) {
  var i,
      array = this.copy();
  // loop through the array
  for(i = 0; i <= array.size(); i++) {
    // if the current element is what we search
    if(array[i] === search) {
      // replace it with the replacement
      array[i] = replacement;
      // return the array
      return array;
    }
  }
  // search wasn't found; return false
  return false;
}









//
// Array.merge()
//
// Merges the given array with the array it operates on into one big array.
//
// @params one or more arrays
// @return merged array
//
Array.prototype.merge = function() {
  var i = 0,
      j = 0,
      array = [];
  // if there are no arguments there's nothing to work on.
  if(!arguments) {
    return false;
  }

  // copy the array we work on into the
  // local "array" variables, this way the
  // original array is not overwritten
  var array = this.copy();

  // iterate over all the arguments (which are most likely arrays)
  for(i = 0; i <= arguments.length - 1; i++) {
    // if they are arrays, iterate over them
    for(j = 0; j <= arguments[i].length - 1; j++) {
      // and push each array element into the array we work on
      array.push(arguments[i][j]);
    }
  }

  // return the new array
  return array;
}