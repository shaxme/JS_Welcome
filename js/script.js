var textWelcome = alert("Welcome !");
var firstName = prompt("First name ?").trim();
var lastName = prompt("Last name ?").trim();
var yourInterest= prompt("What's your interest ?").trim();
var yourBirthday = prompt("What's your birthday ?").trim();
var yourDegree = prompt("What's your degree ?").trim();
var email = prompt("Enter your email address ?").trim();
var profession = prompt("What's your profession ?").trim();
var textEnd = alert("Thanks for your answers !");



var paragraph = document.createElement("p");
paragraph.textContent = `Username: ${firstName} ${lastName}.`;
document.body.appendChild(paragraph);

var paragraph2 = document.createElement("p");
paragraph2.textContent = `User's last name: ${yourInterest}.`;
document.body.appendChild(paragraph2);

var paragraph3  = document.createElement("p");
paragraph3.textContent = `User's birthday: ${yourBirthday}.`;
document.body.appendChild(paragraph3);

var paragraph4  = document.createElement("p");
paragraph4.textContent = `User's degree: ${yourDegree}.`;
document.body.appendChild(paragraph4);

var paragraph5  = document.createElement("p");
paragraph5.textContent = `User's Email: ${email}.`;
document.body.appendChild(paragraph5);

var paragraph6  = document.createElement("p");
paragraph6.textContent = `User's profession: ${profession}.`;
document.body.appendChild(paragraph6);