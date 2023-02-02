import figlet from "figlet";

export function getFiglet(str: string = "Hello World") {
  return new Promise((resolve, reject) => {
    figlet(str, function (err, data) {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
}
