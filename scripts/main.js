var maHeading = document.querySelector("h1");
maHeading.textContent = "Hello world!"

var iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite...");
}

var myImage = document.querySelector("img");

myImage.onclick = function(){
    var mySrc = myImage.getAttribute("src")
    if (mySrc === "images/1.jpeg"){
        myImage.setAttribute("src", "images/bee-on-daisy.jpg")
    } else {
        myImage.setAttribute("src", "images/1.jpeg")
    }
};

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName(){
    var myName = prompt("Please enter your name");
    localStorage.SetItem("name", myName);
    myHeading.textContent = "Mozila is cool, " + myName;
}

if(!localStorage.getItem("name")){
    setUserName();
} else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozila is cool, " + storedName; 
}

myButton.onclick = function(){
    setUserName();
}