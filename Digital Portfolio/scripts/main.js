// Picks a random subheader for the user to read
function randomSubheader() {
    var subheader = document.getElementById("subheader");
    var subheaderText = ["Lover of Colors", "Web Developer Extraordinaire", "Maker of Things", "I like to make websites pretty", "CSS is my happy place... If it works", "Adult Teenager with Computer", "Code Magician", "Dark Theme Enthusiast", "One True Brace Formatter", "The One, The Only"];
    var randomNumber = Math.floor(Math.random() * subheaderText.length);
    console.log(randomNumber);
    subheader.innerHTML = subheaderText[randomNumber];
}

// Change the page theme
function changeTheme() {
    var r = document.querySelector(':root');
}