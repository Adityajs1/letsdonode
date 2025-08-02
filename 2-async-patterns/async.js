const { log } = require('console')

const {readFile, writeFile} = require('fs').promises
const start = async() =>{
try{
    const first = await readFile('./content/first.txt', 'utf8')
    const second = await readFile('./content/second.txt', 'utf-8')
    await writeFile(
        './content/mind-grenade.txt',
        `THIS IS AWESOME : ${first}${second}`,
        {flag : 'a'} 
    )
    log
console.log(first, second);
}
catch(error){
   console.log(error);
}
}
start()

//const getText = (path)=>{
    //return new Promise((resolve, reject)=>{
    //readFile('./content/first.txt', 'utf-8', (err, data)=>{
    //if(err){
       // reject(err)
   // }//else{
       // resolve(data)
    //}
//})
//})
//}

//getText('./content/first.txt')
   //.then((result) => console.log(result))
//   //.catch((err) => console.log(err))















