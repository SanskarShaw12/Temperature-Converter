
var btn=document.querySelector(".button");

btn.addEventListener('click',()=>
{
    var num=document.querySelector("#num").value;
    var type=document.querySelector("#type");
    var valcel=document.querySelector("#valcel");
    var valkel=document.querySelector("#valkel");
    var valfar=document.querySelector("#valfar");
    
    if (num === '') 
    {
        alert("Please enter a value for the temperature.");
        return; 
    }
    if(type.value=="Celsius")
    {
        var k= parseInt(num) + 273;
        var f=num*(9/5)+32;
        
        valcel.value=num;
        valkel.value=k.toFixed(2);
        valfar.value=f.toFixed(2);
    }
    
    else if(type.value=="Kelvin")
    {
        var c= parseInt(num) - 273;
        var f=c*(9/5)+32;
        
        valcel.value=c.toFixed(2);
        valkel.value=num;
        valfar.value=f.toFixed(2);
    }

    else
    {
        var c= (parseInt(num)-32)*(5/9);
        var k=c+273;
        
        valcel.value=c.toFixed(2);
        valkel.value=k.toFixed(2);
        valfar.value=num;
    }
})