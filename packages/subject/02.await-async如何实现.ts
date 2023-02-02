/**
 * 思路 asyncToGenerator接受一个generator函数，返回一个promise，
 * 下一次调用next的时候，传的参数会被作为上一个yield前面接受的值
 */

type GeneratorFn = Generator<Promise<string>, Promise<string>, string>;

type IteratorResultType = IteratorResult<Promise<string>, Promise<string>>;

type ReturnGeneratorFn = () => GeneratorFn;

const getData: () => Promise<string> = () =>
  new Promise((resolve) => setTimeout(() => resolve("data"), 1000));

function* testG(): GeneratorFn {
  const res1 = yield getData();
  console.log(res1);
  const res2 = yield getData();
  console.log(res2);
  return Promise.resolve("success");
}

async function init() {
  const gen = testG();
  const dataPromise = gen.next();
  dataPromise.value.then((res) => {
    const dataPromise2 = gen.next(res);
    dataPromise2.value.then((res2) => {
      const dataPromise3 = gen.next(res2);
    });
  });
}

// init();

function asyncToGenerator(generatorFn: ReturnGeneratorFn) {
  return function (): Promise<string> {
    const gen = generatorFn();

    return new Promise((resolve, reject) => {
      let res: IteratorResultType;

      function step(
        key: keyof GeneratorFn,
        data?: Awaited<ReturnType<GeneratorFn["next"]>["value"]>
      ) {
        try {
          res = gen[key](data) as IteratorResultType;
        } catch (error) {
          reject(error);
        }

        const { value, done } = res;

        if (done) {
          return resolve(value);
        } else {
          return Promise.resolve(value).then(
            (val) => {
              step("next", val);
            },
            (err) => {
              step("throw", err);
            }
          );
        }
      }

      step("next");
    });
  };
}

const awaitFn = asyncToGenerator(testG);
console.log("awaitFn", awaitFn);

awaitFn().then((res) => {
  console.log("res", res);
});
