const {readFile, writeFile} = require('fs')
console.log('start');
 readFile(
'./content/first.txt', 'utf8',(err, result)=>{
    if(err){
        console.log(err)
        return;
    }
        const first = result
        readFile('./content/second.txt','utf8', (err, result)=>{
            if(err){
                console.log(err)
                return;
            }
            const second = result
            writeFile(
                './content/result-async.txt', `Here is the result : ${first}, ${second}`,(err,result)=>{
                    if(err){
                    console.log(err)
                    return;
                }
                console.log('done with this task');
                } 
            )
        })
    })
    console.log('starting the new task');

    // This is why we prefer using async nonblocking over sync blocking
    // sync runs line by line and it takes the complete time it doesn;t 
    // matter how much time a specific programmes need to run  and the 
    //smaller programs wait in the line
    




