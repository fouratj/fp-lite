module.exports = (arr, cb) => {
  if (!arrayCheck(arr)) {
    throw new Error('First argument must be of type Array');
    return;
  }
  
  return arr.reduce((pre, curr) => {
    if (cb(curr)) {
      pre.push(curr);
    }
    return pre;
  }, []);
};
