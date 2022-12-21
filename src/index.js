Array.prototype.mapV2 = function (callback) {
  let result = [];
  this.forEach((item) => {
    result.push(callback(item));
  });
  return result;
};
const tempArr = [1, 2, 3, 4, 5];
console.log(tempArr.mapV2((item) => item * 5));
