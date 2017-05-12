const _ = require('./underbar');

const first = function(str, n) {
  // Your code goes here
  if (n === undefined) {
    return str[0];
  } else {
    return str.slice(0, n);
  }
};

const last = function(str, n) {
  // Your code goes here
  if (n === undefined) {
    return str[str.length - 1];
  } else {
    return str.slice(str.length - n, str.length);
  }
};

const removeChar = function(str, target) {
  // hint: use _.reject
  // Your code goes here
  return _.reject(str, value => value === target).join('');
};

const hasChar = function(str, target) {
  // hint: use _.some
  // Your code goes here
  return _.some(str, value => value === target);
};

const isOnlyDigits = function(str) {
  // Your code goes here
  return _.every(str, value => !isNaN(value));
};

const filterToOnlyDigits = function(str) {
  // Your code goes here
  return _.filter(str, value => !isNaN(value) && value !== ' ').join('');
};

const truncateString = function(val, maxLength) {
  // A freebie solution, this is the ONLY method here that doesn't use Underbar.
  return String(val).slice(0, maxLength);
};

const truncateLongItems = function(obj, maxLength) {
  // hint: use truncateString above
  // Your code goes here
  return _.map(obj, value => truncateString(value, maxLength));
};

const countChars = function(str) {
  // Your code goes here
  const charList = {};
  _.each(_.uniq(str), value => charList[value] = 0);
  _.each(str, value => charList[value]++);
  return charList;
};

const dedup = function(str) {
  // Your code goes here
  return _.uniq(str).join('');
};

module.exports = {
  first: first,
  last: last,
  hasChar: hasChar,
  removeChar: removeChar,
  isOnlyDigits: isOnlyDigits,
  filterToOnlyDigits: filterToOnlyDigits,
  countChars: countChars,
  dedup: dedup,
  truncateLongItems: truncateLongItems,
  truncateString: truncateString
};
