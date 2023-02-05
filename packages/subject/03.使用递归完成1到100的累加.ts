// 使用递归完成 1 到 100 的累加

function sum(n = 1): number {
  if (n < 100) {
    return sum(n + 1) + n;
  }

  return n;
}

console.log(sum());
