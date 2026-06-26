// typing effect

const text=[
"Software Developer",
"Web Developer",
"Problem Solver"
];


let i=0;
let j=0;
let remove=false;


function type(){


let word=text[i];


if(!remove){

document.getElementById("typing").textContent =
word.substring(0,j++);


if(j>word.length){

remove=true;

setTimeout(type,1000);
return;

}


}else{


document.getElementById("typing").textContent =
word.substring(0,j--);


if(j<0){

remove=false;

i++;

if(i>=text.length){

i=0;

}

}

}


setTimeout(type,100);

}


type();





// theme switch

const btn=document.getElementById("mode");


btn.onclick=()=>{

document.body.classList.toggle("light");


btn.textContent =
document.body.classList.contains("light")
? "🌙"
: "☀️";

}