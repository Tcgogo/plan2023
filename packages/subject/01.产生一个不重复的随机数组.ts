// 参数 数组长度、最小范围、最大范围
export function randomUniqueArr(len = 100, min = 0, max = 200) {
  if (max - min < len) {
    return null;
  }

  const hash: number[] = [];

  while (hash.length < len) {
    const num = Math.floor(Math.random() * max);
    if (num < min) continue;

    if (!hash.includes(num)) {
      hash.push(num);
    }
  }

  return hash;
}

console.log(
  "%c [  ]-222",
  "font-size:13px; background:pink; color:#bf2c9f;",
  randomUniqueArr()
);
