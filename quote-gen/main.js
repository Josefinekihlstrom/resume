let askit = document.getElementById('askit');
let output = document.getElementById('output');
let quote = [
    '"Yes."',
    '"No."',
    '"You know the answear within your heart."',
    '"Do you really want to?"',
    '"What does your gut tell you?"',
    '"Yes and No"',
    '"Hmm, the stars are not aligned for me to answear this question"',
];

$(".fa-redo").hide();
$(document).ready(function() {
    $(".hello-text").delay(800).fadeIn(3000);
});

function showInput() {
    if(myform.message.value=="") {
        alert("Enter something");
    } else {
        var randomQuote = quote[Math.floor(Math.random() * quote.length)]
        output.innerHTML = randomQuote;
        $("#submitbtn").attr("disabled", true);
        $(".fa-redo").show();
        document.getElementById('display').innerHTML = 
                    document.getElementById("user_input").value;
    }
};
