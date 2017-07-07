function calculateArea() {
var text = document.getElementsByName('rawtext')[0].value;

var cleantext = text.replace(/\r?\n|\r/g," ");
//out = out.match(/.{1,225}/g);;;

var len = 225;
var curr = len;
var prev = 0;
output = [];
while (cleantext[curr]) {
    if (cleantext[curr++] == ' ') {
        output.push(cleantext.substring(prev,curr));
        prev = curr;
        curr += len;
    }

}



output.push(cleantext.substr(prev));
output = output.join("\n \n")

console.log(output);

document.getElementById("output").value = output;

//console.log(textarea.value);
}
