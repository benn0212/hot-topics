    // Finding our event-target objects
const cards = document.querySelector(".maincontent");
const navbutton = document.querySelector(".navportfolio");

// define event-handler for 
// the event-target objects (buttons):
function handleClick(event) {
/*    let buttonPortfolio = event.target;*/
    
    fetch("./partial.html")
    .then(function (response) {
        return response.text();
    })
    .then(function (data) {
        cards.innerHTML = data;
    });
}

// Registerring all buttons for CLICK event

navbutton.addEventListener("click", handleClick);

    
    









