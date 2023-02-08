// 防抖
// @ts-nocheck
// 普通版本
function debounce1(fn: (...args: any) => any, delay = 150, immediate = false) {
  let timeout: NodeJS.Timer | undefined = undefined;

  return function (...args: any) {
    const _this = this as any;
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      fn.apply(_this, args);
    }, delay);
  };
}

function A(time: number) {
  console.log("time: ", time);
}

const DBA = debounce1(A, 500);

DBA(new Date().getTime());

setTimeout(() => {
  DBA(123);
}, 300);

setTimeout(() => {
  DBA(123);
}, 1000);
