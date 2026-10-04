let form = document.querySelector("#contactForm");
form.addEventListener("submit", function(event) {
event.preventDefault();
let name = document.querySelector("#name").value;
form.textContent = "Thanks, " + name + "! I will reply soon.";
});

let btn = document.querySelector("#moreBtn");
btn.addEventListener("click", function() {
btn.textContent = "Thanks for visiting my portfolio!";
});