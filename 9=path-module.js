// Importing the path module and bringing the seperator
const path = require('path')
console.log(path.sep);
// .join() uses the correct path seperator
const filePath = path.join('content', 'subfolder', 'text.txt')
console.log(filePath);
//.basename() extracts the final portion of the path
const base = path.basename(filePath)
console.log(base);
//absolute() will output the absolute path of the files
const absolute = path.resolve(__dirname,'content', 'subfolder', 'text.txt')
console.log(absolute);