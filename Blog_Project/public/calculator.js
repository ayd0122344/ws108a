(function() {
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
})()