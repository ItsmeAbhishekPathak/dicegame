

function clickhappens() {
  var randomnum1 = Math.floor(Math.random() * 6) + 1;
  var randomnum2 = Math.floor(Math.random() * 6) + 1;
  var image1 = "images/dice" + randomnum1 + ".png";
  var image2 = "images/dice" + randomnum2 + ".png";
  document.querySelector(".img1").setAttribute("src", image1);
  document.querySelector(".img2").setAttribute("src", image2);
  if (randomnum1 > randomnum2) {
    document.querySelector("h1").innerHTML = "🚩Player1 wins";
  } else if (randomnum1 < randomnum2) {
    document.querySelector("h1").innerHTML = "🚩Player2 wins";
  } else {
    document.querySelector("h1").innerHTML = "Draw";
  }
}
