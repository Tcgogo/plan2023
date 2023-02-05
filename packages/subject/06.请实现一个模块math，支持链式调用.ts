// 请实现一个模块 math，支持链式调用math.add(2,4).minus(3).times(2);

class _Math {
  value = 0;

  // 加
  add(...args: number[]) {
    this.value = args.reduce((n1, n2) => n1 + n2, this.value);
    return this;
  }

  // 减
  minus(...args: number[]) {
    this.value = args.reduce((n1, n2) => n1 - n2, this.value);
    return this;
  }

  // 乘
  times(timer: number) {
    this.value = this.value * timer;
    return this;
  }

  getVal() {
    return this.value;
  }
}

const m = new _Math();
const res = m
  .add(2 + 3)
  .minus(1)
  .times(5)
  .getVal();
console.log(res);
