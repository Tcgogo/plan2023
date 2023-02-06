// 数组中的最大值
export default {};

const arr2 = [5, 2, 7, 9];
function max() {
  return arr2.sort((a, b) => b - a)[0];
}

console.log(max());
