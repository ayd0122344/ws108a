const blog = module.exports = {}

blog.html=`
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
<div class="sidebar col-1 col-2">
 <ul>
  <p><b>．個人網站</b></p>
 <li><a href="#"><a href="https://www.facebook.com/a.yao.752">．Facebook</a></li>
 <li><a href="#"><a href="https://www.instagram.com/myosotis_yao/">．Instergram</a></li>
 <li><a href="#"><a href="https://ayd0122344.github.io/wd107b/01-html/ex3.html">．表單</a></li>
 <li><a href="#"><a href="https://ayd0122344.github.io/wd107b/02-css/01-%E5%85%A7%E5%A5%97%E7%94%A8CSS/ex4.html">．個人履歷</a></li>
 </ul>
</div>

<div class="navbar">
  <a href="#home">☆</a>
  <a href="#news">★</a>
  <a href="#home">☆</a>
  <a href="#news">★</a>  <a href="#home">☆</a>
  <a href="#news">★</a>
  <div class="dropdown">
  <button class="dropbtn" onclick="myFunction()">♥ ♥ ♥ ♥ ♥ ♥ 
    <i class="fa fa-caret-down"></i>

  </button>
  <div class="dropdown-content" id="myDropdown">
    <a href="#">If you can dream it, </a>
    <a href="#">you can do it.</a>
    <a href="#"> ( • ̀ω•́ )✧</a>
  </div>
  </div> 
</div>


<div class="head col-5">
<br>
<br>
<br>
<br>
<h1>Quitters never win and winners never quit!</h1>
<br>
<br>
<br>

<br>
<h1>歡迎來到我的個人網站!</h1>
<input id="input" style="font-size:30px;width:210px;" readonly="readonly" type="number"></input><br><br>
        <button onclick="caculate('1')" id="but1" style="font-size:30px;width:50px;height:50px;">1</button>
        <button onclick="caculate('2')" id="but2"style="font-size:30px;width:50px;height:50px;">2</button>
        <button onclick="caculate('3')" id="but3"style="font-size:30px;width:50px;height:50px;">3</button>
        <button onclick="operation('+')" id="but10"style="font-size:30px;width:50px;height:50px;">+</button><br>
        <button onclick="caculate('4')" id="but4"style="font-size:30px;width:50px;height:50px;">4</button>
        <button onclick="caculate('5')" id="but5"style="font-size:30px;width:50px;height:50px;">5</button>
        <button onclick="caculate('6')" id="but6"style="font-size:30px;width:50px;height:50px;">6</button>
        <button onclick="operation('-')" id="but11"style="font-size:30px;width:50px;height:50px;">-</button><br>
        <button onclick="caculate('7')" id="but7"style="font-size:30px;width:50px;height:50px;">7</button>
        <button onclick="caculate('8')" id="but8"style="font-size:30px;width:50px;height:50px;">8</button>
        <button onclick="caculate('9')"id="but9"style="font-size:30px;width:50px;height:50px;">9</button>
        <button onclick="operation('*')" id="but12"style="font-size:30px;width:50px;height:50px;">*</button><br>
        <button onclick="caculate('0')" id="but0"style="font-size:30px;width:50px;height:50px;">0</button>
        <button onclick="caculate('.')" id="but15"style="font-size:30px;width:50px;height:50px;">.</button>
        <button onclick="equal()"id="but14"style="font-size:30px;width:50px;height:50px;">=</button>
        <button onclick="operation('/')" id="but13"style="font-size:30px;width:50px;height:50px;">/</button><br>


        <h1  id="input" style="color:rgb(0, 0, 0);">BMI計算</h1>
		<p style="color:rgb(0, 0, 0);">身高:<input id="height"  style="font-size:30px;width:210px;"></input>公分</p>
		<p style="color:rgb(0, 0, 0);">體重:<input id="weight"  style="font-size:30px;width:210px;"></input>公斤</p>
		<button id="bmi" onclick="BMI()">計算</button>
		<p id="bmians" style="color:rgb(0, 0, 0);">你的BMI值為:</p>
        
</div>

<div>
<p><img class="top col-3" src="https://66.media.tumblr.com/8111ae683a69fe502b0092c8e292bc7f/tumblr_pikqfele1P1snpo44o10_500.gif"/></p>
<p><img class="lu col-4" src="https://66.media.tumblr.com/e9bde635fc46ae362b2c0b8abc2b8554/tumblr_o6sdyzsVmv1vrnte3o1_400.gif"/></p>
</div>

</body>
</html>`

blog.css = `<style>
.head{
    text-align:center;
    color: rgb(0, 0, 0);
}
body {
  margin: 0px; 
}
.top{
	position: absolute;
	top:48px;
    left:160px;
    width:100%;
    height:40%;
	z-index:0;
    padding:0px;
    opacity:0.5;
	}

.navbar {
  overflow: hidden;
  background-color: rgb(250, 156, 234);
  font-family: Arial, Helvetica, sans-serif;
}
.navbar a {
  float: left;
  font-size: 16px;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
.dropdown {
  float: right;
  overflow: hidden;
  width:140px;
}
.dropdown .dropbtn {
  cursor: pointer;
  font-size: 16px;  
  border: none;
  outline: none;
  color: white;
  padding:14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}
.navbar a:hover, .dropdown:hover .dropbtn, .dropbtn:focus {
  background-color: rgb(241, 52, 124);
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f8f5db;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
.dropdown-content a {
  float: none;
  color: rgb(235, 22, 235);
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}
.dropdown-content a:hover {
  background-color: #ddd;
}
.show {
  display: block;
}
.sidebar {
  position: fixed;
  top: 45px;
  left: 0px;
  width: 10px;
  height: 1000px;
  background-color: rgb(250, 156, 234);
  color: white;
  margin: 0px;
  padding: 10px 5px;
  white-space:nowrap;
}
.sidebar a {
  color: white;
  text-decoration: none;
}
.sidebar li, .sidebar ul {
  list-style-type: none;
  margin:3px;
  padding: 2px;
}
.sidebar {
  transition: width 1s;
 }
.col-1 .sidebar a:hover {
  color: rgb(241, 52, 124);
}
.col-2.sidebar:hover {
  width: 145px; 
}
.dropdown:hover .dropdown-content {
  display: block;
}
.lu
{
width:160px;
height:90px;
position: fixed;
bottom:0px;
z-index: 10px;

}


.col-1 {width: 150px;}
@media only screen and (max-width: 768px) {
    [class*="col-2"]
    {
        width: 5px;
    }
    [class*="col-3"]
    {
        left:15px;
    }
    [class*="col-4"]
    {
        display: none;
    }
    [class*="col-5"]
    {
        text-align: center;
        text-indent: 0%;
    }
}
#but0,#but1,#but2,#but3,#but4,#but5,#but6,#but7,#but8,#but9,#but10,#but11,#but12,#but13,#but14,#but15
	{
	color:white;
	background-color:rgb(74, 240, 171);
	font-size:50px;
	}
	#bmi,#pick
	{
	background-color:rgb(74, 240,171);
	font-family: Microsoft JhengHei; 
	font-size:30px; 
	color:rgb(255, 255, 255);
	}
#but0:hover,#but1:hover,#but2:hover,#but3:hover,#but4:hover,#but5:hover,#but6:hover,#but7:hover,#but8:hover,#but9:hover,#but10:hover,#but11:hover,#but12:hover,#but13:hover,#but14:hover,#but15:hover,#bmi:hover,#pick:hover
	{
	color:#f575e4;
    }
</style>`

blog.script = `<script>
var str="0";
var str2="0";
var not=0;
var opttem='0';
var count=0;
var time=0;
var ans;
function caculate(num){	
    if(opttem==="1") return;
    if(str2!=0)return;
    if(count===0)
    {
        if(num===".")
        {	
            for(var i=0;i<str.length;i++)
            {
                if(str[i]===".") not++;	
            }
            if(not===0)str+=num;
        }
        else str+=num;
        document.getElementById("input").value=parseFloat(str);
    }
    else if(count===1)
    {
        if(num===".")
        {	
            for(var i=0;i<str2.length;i++)
            {
                if(str2[i]===".") not++;	
            }
            if(not===0)str2+=num;
        }
        else str2+=num;
        document.getElementById("input").value=parseFloat(str2);
    }
}
function operation(opt){
    if(str2!=0)return;
    opttem=opt;
    console.log(opttem);
    count=1;	
}
function equal(){
if(str2===0)return;
if(opttem=="+")ans=parseFloat(str)+parseFloat(str2);
else if(opttem=="-")ans=parseFloat(str)-parseFloat(str2);
else if(opttem=="*")ans=parseFloat(str)*parseFloat(str2);
else if(opttem=="/")ans=parseFloat(str)/parseFloat(str2);
str=ans;
str2=0;
opttem="1";
document.getElementById("input").value=ans;
}
</script>
<script>
function BMI()
{
    var height=document.getElementById("height").value;
    var weight=document.getElementById("weight").value;
    if(height=="") return;
    if(weight=="")return;
    if(isNaN(height)===true||isNaN(weight)===true) return;
    document.getElementById("bmians").innerHTML="你的BMI為"+weight/((height/100)*(height/100));
}
</script>`