
function page_load()
{
let sel_h3=document.querySelectorAll('.accordian h3');
let arr_h3=[...sel_h3];
console.log(arr_h3);
for(let x in arr_h3){
    console.log(x);
arr_h3[x].style.backgroundColor="rgb(148 150 216)";

}

let last_ele=document.querySelectorAll('.accordian p');
console.log(last_ele);
last_ele[last_ele.length-1].innerText="I posses very good command over the Full Stack Development technologies like MERN which can be seen in my work over the Github.";

}