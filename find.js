const arrayCheck = require('./config.js')

module.exports = (arr, cb) => {
  if (!arrayCheck(arr)) {
    throw new Error('First argument must be of type Array');
    return;
  }

  let elem;
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      elem = arr[i];
      break;
    }
  }
  return elem;
};