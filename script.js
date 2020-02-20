cards = document.querySelectorAll(".card");

click = 0;
previousCard = null;

cards.forEach(card => card.addEventListener("click", flip));

function flip() {
  click = click + 1;
  this.classList.toggle("flip");
  toggleImage(this);

  if(click % 2 == 1){
    previousCard = this;
    return;
  }
 

  if(isMatch(previousCard, this)){
  
    alert("Hurra! You've matches!");
    return;
  }
  toggleImage(this);
  toggleImage(previousCard);
}

function isMatch(firstCard, secondCard) {
img1 = firstCard.querySelector(".back").src;
img2 = secondCard.querySelector(".back").src;

return img1 == img2;
}

function toggleImage(card){
card.querySelector(".front").classList.toggle("hide");
card.querySelector(".back").classList.toggle("show");
}