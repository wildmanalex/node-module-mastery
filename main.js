

// #1
var hello = function() {
	return ("Hello World");
}
console.log(hello());


// #2
var total = 0;
for(i = 2; i < process.argv.length; i++){
		total += Number(process.argv[i]);
}
console.log(total);

// #3
var fs = require('fs')
var contents = fs.readFileSync(process.argv[2])
var lines = contents.toString().split('\n').length - 1
console.log(lines)
//
// //4

fs.readFile(process.argv[2] ,function(err, data) {
	var content;
	if(err) throw err;
	else var lines = contents.toString().split('\n').length - 1
	console.log(lines)
})
