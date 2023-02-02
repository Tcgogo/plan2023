import * as fs from "fs";
import { exec } from "child_process";
import chalk from "chalk";
import figlet from "figlet";

const dirInfo = fs.readdirSync("packages/subject");

const target = dirInfo.find((i) => i.includes(`${process.argv[2]}`));
console.log(
  "%c [target]-9",
  "font-size:13px; background:#336699; color:#fff;",
  target
);

function getFiglet(str: string = "Hello World") {
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

async function init() {
  const log1 = await getFiglet("Run Result");

  console.log(chalk.red(`title: ${target}`));
  console.log(chalk.green(log1));

  exec(
    `node --loader ts-node/esm packages/subject/${target}`,
    function (err, stdout, stderr) {
      if (err) {
        console.log("get weather api error:" + stderr);
      } else {
        console.log(chalk.yellow(stdout));
      }
    }
  );
}
init();
