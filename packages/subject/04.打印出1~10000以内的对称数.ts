// 打印出 1~10000 以内的对称数

function getNum(begin = 1, end = 10000) {
  const res: number[] = [];

  for (let i = begin; i < end; i++) {
    const target = `${i}`;

    if (target.length <= 1) continue;

    if (target.split("").reverse().join("") === target) {
      res.push(+target);
    }
  }

  return res;
}

console.log(getNum());
