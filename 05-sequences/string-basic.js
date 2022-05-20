const prompt = require('prompt-sync')();
let s = 'the quick brown fox';
let n = "she sell seashells";
console.log('she said,"I sold seashells"');
console.log("I don't know");
// all strings must be on a single line, cannot have newlines
console.log("Dear Mum,\n\tI hope this letter finds you well");

// escape sequences are for special characters that
// confuses JavaScript if they are in a string
console.log('She said,"I don\'t know what happenend!"');
console.log("She said, \"she sells seashells at the seashore\"");
console.log("C:\\My Documents\\test\\new_file.txt");

// text literal or otherwise the backtick string
console.log(`

She said, "I sold seashells at the seashore"
See ma. lot of enter
My file is at C:/My Documents/test/new

`);

let firstName = "Ah Kow";
let lastName = "Tan";
let bill = 200;
let formLetter =`Dear ${firstName} ${lastName},
   Your bill of $${bill} is due soon. Please pay up soon or
be fine 10% of your bill, which is $${0.1 * bill}.
`
console.log(formLetter);

let name = prompt(`Name: `)

console.log(`

Dear ${name}:

  I can't believe that it's been more than six months since we spoke. You remember the song?

Should auld acquaintance be for forgot,
and never be brought to mind?
should auld acquaintance be forgot,
and auld lang syne?

"Merry X'mas and a Happy New Year!" 
`);

console.log("Dear " + name + ",\n\nI can't believe it has been more than six months since we we spoke." + 
"You remember the song?\n");