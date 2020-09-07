var fs = require("fs");

var buff = fs.readFileSync(process.argv[2],'utf-8').toString() ;
var lines = buff.split('\n')
console.log(lines.length-1) ;

// fs.readFileSync('/path/to/file', function (err, data) {
//    if (err) {
//       console.log(err.stack);
//       return;
//    }
//    console.log(data.toString());
// });
// console.log("Program Ended");
