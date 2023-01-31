// function loadEvent(){ //body onload
//     alert('Loaded Website');
// }

function clickEvent(arg){
    arg.innerHTML = "Cliked";
}

function hoverEvent(arg){
    arg.innerHTML = "You Hover";
}

function outEvent(arg){
    arg.innerHTML = "Hover me";
}

function downEvent(arg){
    arg.innerHTML = "Hi Friends";
}

function upEvent(arg){
    arg.innerHTML = "Hold me";
}

function changeEvent(arg){
    arg.value = arg.value.toUpperCase();
}
//-----------------------------------------
function powerOn(){
    let heading = document.getElementById("head");
    heading.style.color ="red";
}
function powerOff(){
    let heading = document.getElementById("head");
    heading.style.color ="grey";
}

let num1=1, num2=2;
if(num1>num2){
    document.getElementById('pid').innerHTML="Correct lessthan number 2";
}else{
    document.getElementById('pid').innerHTML="Wrong number 2 is Greathan";
}

let a=2, num3=a;
switch(num3){
    case 1:
        document.write("case1");
        break;
    case 2:
        document.write("case2");
        break;
    default:
        document.write("default");
        break;
}

function hello(name, age, fav){
    return name+" "+age+" "+fav;
}
alert("Hello "+hello("Raymond ",29," eating"));