let submit = document.getElementById('submitButton');
let ratings = document.querySelectorAll(".star");
ratings.forEach(rating => {
    rating.addEventListener("click", () => {
        const index = rating.dataset.index;
        handleRating(index)
    })
});

function handleRating(index) {
    for (let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove("active");
        if (i <= index) {
            ratings[i].classList.toggle("active")
        }
    }
}

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