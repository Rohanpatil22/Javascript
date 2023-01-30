function page_load(){

let demo=document.querySelector('ul').children;
//console.log(demo);
let demo_2=[...demo];
//console.log(demo_2);
demo_2[2].innerText="Projects";

let temp=document.querySelector('ul');
let temp_2=document.createElement('li');
temp_2.innerText="Hire Me";
temp.appendChild(temp_2);

}
