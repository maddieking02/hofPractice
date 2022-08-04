// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */
  // Call iterator(value, key, collection) for each element of collection.
  // Accepts both arrays and objects.
  //
  // Note: _.each does not have a return value, but rather simply runs the
  // iterator function over each item in the input collection.

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var multiples = 0;

  _.each(numbers, function(number, index, collection) {
    if (number % 5 === 0) {
      multiples++;
    }
  });
  return multiples;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {
  var value;

  _.filter(fruits, function(fruit, index) {
    if (fruit === targetFruit) {
      value = fruits.slice(index, index + 1);
    }
  });
  return value;
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  return _.filter(fruits, function(fruit) {
    return fruit[0] === letter;
  });
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  return _.filter(desserts, function(dessert) {
    return dessert['type'] === 'cookie';
  });
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {
  return _.reduce(products, function(total, item) {
    var price = item['price'].substring(1);
    return total + Number(price);
  }, 0);
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {
// I - array of objects
// O - object of dessert types with value of each
// reduce takes a collection and will run each value through an iterator function
// iterator total will be {} total, item will be each dessert type
  var total = _.reduce(desserts, function(accumulator, dessert) {
    var dessertType = dessert['type'];
    if (accumulator[dessertType] === undefined) {
      accumulator[dessertType] = 1;
    } else {
      accumulator[dessertType]++;
    }
    return accumulator;
  }, {});
  return total;
};
// Attempt 1:
  // var totalDesserts = {};
  // return _.reduce(desserts, function(total, dessert) {
  //   var dessertType = dessert['type'];
  //   var total = totalDesserts[dessertType];
  //   if (total === undefined) {
  //     total = 1;
  //   } else {
  //     total++;
  //   }
  //   console.log(totalDesserts, dessertType, total);
  //   return totalDesserts;
  // });
  // //return totalDesserts;

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {
  // I - array of objects
  // O - array of movies that came out between 1990 and 2000

  var moviesFrom90s = _.reduce(movies, function(accumulator, movie) {
    if (movie['releaseYear'] >= 1990 && movie['releaseYear'] <= 2000) {
      accumulator.push(movie['title']);
    }
    return accumulator;
  }, []);
  return moviesFrom90s;
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {

  var movieRuntime = _.reduce(movies, function(accumulator, movie) {
    if (movie['runtime'] < timeLimit) {
      accumulator = true;
    }
    return accumulator;
  }, false);
  return movieRuntime;
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  return _.map(fruits, function(fruit) {
    return fruit.toUpperCase();
  });
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {
  return _.map(desserts, function(dessert) {
    if (dessert['ingredients'].includes('flour')) {
      dessert['glutenFree'] = false;
    } else {
      dessert['glutenFree'] = true;
    }
    // console.log(desserts);
    return dessert;
  });
  return desserts;
};

// var desserts = [
//   {
//     name: 'Chocolate Cake',
//     ingredients: ['cocoa', 'flour', 'sugar', 'eggs', 'milk', 'butter' ],
//     type: 'cake'
//   },

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {
  var salePrices = _.map(groceries, function(item) {
    var discount = Number(item['price'].substring(1)) * coupon;
    var salePrice = Number(item['price'].substring(1)) - discount;
    var finalSalePrice = Math.round(salePrice * 100) / 100;
    item['salePrice'] = '$' + finalSalePrice.toString();
    return item;
  });
  return salePrices;
};