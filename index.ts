
import * as fs from 'fs'
import { exec } from 'child_process'


const dirInfo = fs.readdirSync('packages/test100');

const target = dirInfo.find((i) => i.includes(`${process.argv[2]}`))

console.log('------------------------------------------------> target', target)

exec(`node --loader ts-node/esm packages/test100/${target}`, function(err,stdout,stderr){
  if(err) {
      console.log('get weather api error:'+stderr);
  } else {
      console.log(stdout);
  }
})