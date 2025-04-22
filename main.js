// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const likeButtons = document.getElementsByClassName("like-glyph");
for (let element of likeButtons) {
  element.addEventListener("click", function (event) {
    mimicServerCall()
      .then(() => {
        const clickedElement = event.target;
        clickedElement.classList.contains("activated-heart") ? 
        clickedElement.classList.remove("activated-heart") : 
        clickedElement.classList.add("activated-heart");
      })
      .catch(function () {
        const errorMessage = document.getElementById("modal");
        errorMessage.classList.remove("hidden");
        setTimeout(() => {
          errorMessage.classList.add("hidden")
        }, 3000);
      })
  });
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
