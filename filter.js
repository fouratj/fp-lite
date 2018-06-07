module.exports = (arr, cb) => {
  return arr.reduce((pre, curr) => {
    if (cb(curr)) {
      pre.push(curr);
    }
    return pre;
  }, []);
};
