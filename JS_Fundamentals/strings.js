var abc = "abcdefghijklmnopqrstuvwxyz";
console.log('abc', abc)
var esc = 'I don\'t \n know';
console.log('esc', esc)  // \n new line
var len = abc.length;
var str2 = "this is Str2"
console.log('str2', str2)
console.log('len', len)     // string length
abc.indexOf("lmno");
console.log('abc', abc)          // find substring, -1 if doesn't contain 
abc.lastIndexOf("lmno");        // last occurance
console.log('abc', abc)
abc.slice(3, 6);                // cuts out "def", negative values count from behind
console.log('abc', abc)
abc.replace("abc", "123");       // find and replace, takes regular expressions
console.log('abc', abc)
abc.toUpperCase();              // convert to upper case
console.log('abc', abc)
abc.toLowerCase();              // convert to lower case
console.log('abc', abc)
abc.concat(" ", str2);          // abc + " " + str2
console.log('str2 = ', str2)
abc.charAt(2);                  // character at index: "c"
console.log('abc', abc)
abc[2];                         // unsafe, abc[2] = "C" doesn't work
console.log('abc', abc)
abc.charCodeAt(2);              // character code at index: "c" -> 99
console.log('abc', abc)
abc.split(",");                 // splitting a string on commas gives an array
console.log('abc', abc)
abc.split("");                  // splitting on characters
console.log('abc', abc)
//console.log(128.toString(16))            // number to hex(16), octal (8) or binary (2)