/*
 *
 * Arr.js - Arr!
 *
 * Arr.js enhances the JavaScript Array Object by providing a set of custom functions. 
 *
 * @author Kevin Gimbel <kevingimbel.com>
 * @version 0.0.2
 * @page kevingimbel.com/arr-js
 * 
 *
 *
*/




/*
 * ## Array.first()
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
  if(parseInt(num,10) != num || num<0 || num>this.length) {
    return this[0];
  }
  return this.slice(0,num);
}






/*
 * ## Array.last()
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
 * ## Array.size()
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
 * ## Array.filter()
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
  this.each(function(index) { 
    if(condition(index)) {
      
      dump.push(index);
    }
  });
  return dump;
}




/*
 * ## Array.reverse() 
 * This function already exists, anyway let's rebuild it!!
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
  var array = this,
      dump = this.copy(),
      j; 
  
  for(var i = 0; i <= array.length; i++) {
     j = i-1;
     array[j] = dump[dump.length - i];
  }
  return array; 
}



/*
 * ## Array.contains()
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
 * ## Array.copy()
 *
 * Create a copy of the current array.
 *
 * @params none
 * @return new array
 */
Array.prototype.copy = function() {
  var array = [];
  
  this.each(function(index) {
    array.push(index);
  });

  return array;
}




/*
 * ## Array.replace()
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
 * ## Array.merge()
 *
 * @TODO Make array merge() go any level deep! ALL THE WAY DOWN! \o/
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




/*
 * ## Array.random()
 *
 * Returns a random element from the array, optional within a special range.
 *
 * ```
 * [1,2,3,4].random() // => 2
 * [1,2,3,4].random() // => 4
 * [1,2,3,4].random(1,3) // => 3
 * ```
 *
 * @params {Number} - Max number, if one is given
 * @params {Number} - Max and min number
 * @params {None}   - Max is the array's size, min is zero
 *
 * */

Array.prototype.random = function() {
  var max,
      min,
      a,
      b,
      random,
      size = this.length,
      args = arguments,
      variableSwitch = {
        0: function() {
          max = size;
          min = 0;
        },
        1: function() {
          max = args[0];
          min = 0;
        },
        2: function() {
          a = args[0];
          b = args[1];
          if(a > b) {
            max = a;
            min = b;
          } else {
            max = b;
            min = a;
          }
        }
      }
  
  var assignVariables = variableSwitch[args.length];
  assignVariables();
   
  random = Math.floor( (Math.random() * (max - min)) + min );
  return this[random];
}

/**
 * ## Array.each()
 *
 * Performce a callback function on every element of the array.
 * 
 * ```
 *  ['Lorem', 'Ipsum', 'Dolor'].each(function(item) {
 *    console.log(item);
 *  }); // => Lorem, Ipsum, Dolor
 * ```
 * 
 * @param {Function} Function to be called on every element
 * @return {Array} The original array
 */
Array.prototype.each = function(cb) {
  var array = this,
      i = 0;
  for(i; i < array.length; i++) {
    cb(array[i]);
  }
  return this;
}



/**
 *
 * ## Array.prepend()
 *
 * Prepands the current array with a new element, taking position 0 in the array.
 *
 * ```
 * ['Array', 'is', 'awesome'].prepand('My');
 * // => ['My', 'Array', 'is', 'awesome'];
 */

Array.prototype.prepend = function(prependIndex) {
  if(!prependIndex) {
    return this;
  }

  return this.reverse().append(prependIndex).reverse();
}


/**
 * ## Array.append()
 *
 * Wrapper function for Array.push().
 *
 * @param {Any} Anything
 * @return {Array} Array with new element added to the end
 *
 */
Array.prototype.append = function(append) {
  if(!append) {
    return this;
  }

  this.push(append);

  return this;
}



/**
 * ## Array.concat()
 *
 * Combines the existing Array with every thing it is passed. This is like Array.merge() but 
 * accepts everything as argument.
 *
 * @params {Anything} - Any number of Arrays or anything else that should be merged into the existing Array
 */

Array.prototype.concat = function() {
  var dump = this;
  
  if(arguments.length === 0) {
    return this;
  } 
  for(key in arguments) {
    if(arguments[key].constructor.toString().indexOf('Array') > -1) {
      console.log('Array found: ' + arguments[key]);
      Array.prototype.merge.call(dump, arguments[key]);
    } else {
      dump.push(arguments[key]);
    }
  }
    return dump;
}

/*
 * ## Array.concatLazy()
 *
 * Lazy concatination - everything will be passed as-is without merging or
 * concatinating.
 * 
 * ```
 * [1,2,3].concatLazy(['My', 'Array'], {some: 'object'}); // => [1,2,3, Array[2], Object];
 * ```
 *
 */
Array.prototype.concatLazy = function() {
  var array = this;
  for(key in arguments) {
    array.append(arguments[key]);
  }

  return array;
}
