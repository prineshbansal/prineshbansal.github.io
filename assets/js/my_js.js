var i = 0;
var txt = 'Software Engineer | CS @ Northeastern | Graduating Fall \'21'; 
var speed = 75; 

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewriter-h3").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

$( document ).ready(function() {
    typeWriter()
});