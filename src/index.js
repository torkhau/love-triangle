/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  const SpichoneIsPass = (spichonee) => {
    if ((spichonee > 0) || (spichonee <= maxLenForLooking)) {
      return true
    };
    return false;
  }

  let maxLenForLooking = preferences[0];
  for (let i = 1; i < preferences.length; i++) {
    if (maxLenForLooking < preferences[i]) {
      maxLenForLooking = preferences[i];
    }
  }
  let loveTriangles = 0;
  for (let i = 1; i <= maxLenForLooking; i++) {
    let spichonee1 = preferences[i - 1];
    if (!SpichoneIsPass(spichonee1)) {
      continue
    };
    if (spichonee1 == i) {
      continue;
    } else {
      let spichonee2 = preferences[spichonee1 - 1];
      if (!SpichoneIsPass(spichonee2)) {
        continue
      };
      if (spichonee2 == spichonee1) {
        continue;
      } else {
        let spichonee3 = preferences[spichonee2 - 1];
        if (!SpichoneIsPass(spichonee3)) {
          continue
        };
        if (spichonee3 == i) {
          loveTriangles++;
        };
      };
    };
  };
  return loveTriangles / 3;
};