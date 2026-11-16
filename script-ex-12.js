const form = document.querySelector("form");
const confirmation = document.getElementById("confirmation");

form.addEventListener("submit", function(event) {

    // stop reload
    event.preventDefault();

    // read what they entered
    const name = document.getElementById("name").value;
    const program = document.getElementById("program");
    const programName = program.options[program.selectedIndex].text;

    // show the confirmation 
    confirmation.textContent = "Thanks, " + name + "! You've requested a spot in the " + programName + ".";

});