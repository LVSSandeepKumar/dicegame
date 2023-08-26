var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var diceRandomImage1 = "images/dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", diceRandomImage1);

var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

var diceRandomImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", diceRandomImage2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML=" Player 1 win ! "
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML=" Player 2 win ! "
} else {
    document.querySelector("h1").innerHTML="Draw !"
}