console.log("Welcome to my blog!");

document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for your message!");
});
