
var randomnumber1 = Math.floor(Math.random() * 6) + 1;
var randonimageNumber = "images/dice" + randomnumber1 + ".jfif";

document.querySelector('img')[0].setAttribute('src', randonimageNumber);
