
##Assignment_1 Solution

let demo=document.querySelector('ul').children;
let demo_2=[...demo];
demo_2[2].innerText="Projects";

let temp=document.querySelector('ul');
let temp_2=document.createElement('li');
temp_2.innerText="Hire Me";
temp.appendChild(temp_2);