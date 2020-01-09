(function() {
var height=document.getElementById("height").value;
var weight=document.getElementById("weight").value;
if(height=="") return;
if(weight=="")return;
if(isNaN(height)===true||isNaN(weight)===true) return;
document.getElementById("bmians").innerHTML="你的BMI為"+weight/((height/100)*(height/100));
})()