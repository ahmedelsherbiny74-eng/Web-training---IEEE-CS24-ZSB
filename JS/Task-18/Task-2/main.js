let cards = document.querySelectorAll(".sec-3 .container .cards .card");
console.log(cards);
shuffle(cards);
console.log(cards);
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));
        [array[i], array[random]] = [array[random], array[i]]; 
    }
}