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

let search_inp=document.querySelector('input');
search_inp.placeholder="Search My Projects";

let main_txt=document.querySelectorAll('.hero-left-section  span');
let main_txt_arr=[...main_txt];
main_txt_arr[2].innerText="an Employee";
main_txt_arr[3].innerText="iNeuron intelligence Pvt Ltd";

let img_sec=document.querySelector('.hero-right-section img');
img_sec.src="./person-image.jpg";

let add_btn=document.querySelector('.hero-right-section-btns');
let new_btn=document.createElement('button');
new_btn.innerText="Support Me"
new_btn.setAttribute('style','background-color:rgb(18, 155, 155);color:white');
add_btn.appendChild(new_btn);



}
