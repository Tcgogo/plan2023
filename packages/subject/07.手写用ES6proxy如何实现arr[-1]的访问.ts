// 手写用 ES6proxy 如何实现 arr[-1] 的访问

const arr: number[] = [1, 2, 3];

const p = new Proxy(arr, {
  get(target: number[], key: string) {
    if (+key < 0) {
      return target[-key];
    }

    return target[+key];
  },
});

console.log("arr[-1]", p[-1]);
