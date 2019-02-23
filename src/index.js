/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
var len;

module.exports = function getLoveTrianglesCount(preferences = []) {

  len = getMaxArray(preferences);
  let loveTriangles = 0;
  let i = 1;
  for (let i = 1; i <= len; i++) {
    let spichonee1 = preferences[i - 1];
    if (!spichoneIsPass(spichonee1)) {
      continue
    };
    if (spichonee1 == i) {
      continue;
    } else {
      let spichonee2 = preferences[spichonee1 - 1];
      if (!spichoneIsPass(spichonee2)) {
        continue
      };  
      if (spichonee2 == spichonee1) {
        continue;
      } else {
        let spichonee3 = preferences[spichonee2 - 1];
        if (!spichoneIsPass(spichonee3)) {
          continue
        };    
        if (spichonee3 == i) {
          loveTriangles++;
        };
      };
    };  
  };
  return loveTriangles/3;
};

function getMaxArray(arr) {
  
  const len = arr.length;
  let max = arr[0];
  for (let i = 1; i < len; i++) {
    if (max < arr[i]) {
      max = arr[i];
    };
  };
  return max;
};

function spichoneIsPass(spichonee) {

  let res = false;
  if ((spichonee > 0) || (spichonee <= len)) {
    res = true
  };
  return res;
};