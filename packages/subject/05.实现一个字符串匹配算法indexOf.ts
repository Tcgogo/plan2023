// 实现一个字符串匹配算法indexOf
// @ts-nocheck

// 朴素算法 O((n - m) * m)
function _Indexof1(str: any) {
  const target = String(str);
  const _this = this as string;
  const length = _this.length;
  const subLength = target.length;

  if (subLength > length) return -1;

  console.log("this", this);

  for (let i = 0; i < length - subLength; i++) {
    let cur = i,
      subBegin = 0;

    while (subBegin < subLength && target[subBegin] === _this[cur]) {
      cur++;
      subBegin++;
    }

    if (subBegin === subLength) {
      return i;
    }
  }

  return -1;
}

// KMP 算法
function _Indexof2(str: any) {
  const target = String(str);
}

String.prototype._Indexof1 = _Indexof1;
String.prototype._Indexof2 = _Indexof2;

console.log("123"._Indexof1("2"));
