
##Assignment_1 Solution

let demo=document.querySelector('ul').children;
let demo_2=[...demo];
demo_2[2].innerText="Projects";

###task1 solution 
let temp=document.querySelector('ul');
let temp_2=document.createElement('li');
temp_2.innerText="Hire Me";
temp.appendChild(temp_2);

###task2 solution

let search_inp=document.querySelector('input');
search_inp.placeholder="Search My Projects";

###task3 solution

let img_sec=document.querySelector('.hero-right-section img');
img_sec.src="./person-image.jpg";

###task4 solution

let add_btn=document.querySelector('.hero-right-section-btns');
let new_btn=document.createElement('button');
new_btn.innerText="Support Me"
new_btn.setAttribute('style','background-color:rgb(18, 155, 155);color:white');
add_btn.appendChild(new_btn);
