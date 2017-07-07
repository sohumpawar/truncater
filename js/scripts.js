function truncate() {

    // Get the transcript text input
    var text = document.getElementsByName('rawtext')[0].value;

    // Remove linebreaks
    var cleantext = text.replace(/\r?\n|\r/g, " ");

    // Initialize counter variables & desired substring length
    var len = 225;
    var curr = len;
    var prev = 0;
    output = [];

    // String cutting loop
    while (cleantext[curr]) {
        if (cleantext[curr++] == ' ') {
            var sub = cleantext.substring(prev, curr);
            sub = sub.replace(/^[.\s]+|[.\s]+$/g, ""); // Remove trailing periods
            console.log(sub);
            output.push(sub);
            prev = curr;
            curr += len;
        }

    }

    // Join output string with double linebreaks
    output = output.join("\n \n")

    // Push output to textarea
    document.getElementById("output").value = output;

}
