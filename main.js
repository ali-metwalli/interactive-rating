let submit = document.getElementById('submitButton');

function buttonColors() {
    submit.style.backgroundColor = 'white';
    submit.style.color = 'hsl(25, 97%, 53%)';
}
function OriginalButtonColors() {
    submit.style.backgroundColor = 'hsl(25, 97%, 53%)';
    submit.style.color = 'white';
}

submit.onmouseover = buttonColors;
submit.onmouseout = OriginalButtonColors;