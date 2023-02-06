// 有一堆整数，请把他们分成三份，确保每一份和尽量相等（11，42，23，4，5，6 4 5 6 11 23 42 56 78 90）
export default {};

const nums = [1, 2, 3, 4, 5, 6, 7, 8];

// 错误方法
function averageNumber(n: number) {
  nums.sort((a, b) => b - a);

  const res = Array(n).fill(0);

  nums.forEach((num) => {
    res.sort((a, b) => a - b);
    res[0] += num;
  });

  console.log("res", res);
}

// 背包

averageNumber(3);
