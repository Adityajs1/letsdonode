const {createReadStream} = require('fs')

const stream = createReadStream('./content/big-file.txt')

stream.on('data', (chunk)=>{
    console.log(`Recieved ${chunk.length} bytes of data`)
})
stream.on(error, (err)=> console.log(err))

