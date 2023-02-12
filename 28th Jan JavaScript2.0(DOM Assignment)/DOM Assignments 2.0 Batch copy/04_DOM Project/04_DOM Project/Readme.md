
##Assignment 4 solution :

function page_load(){

   let ele=document.querySelectorAll(".clearfix");
console.log(ele);
let ele_arr=[...ele];
console.log(ele_arr);
ele[0].style.backgroundColor="#ec9b3b";
ele[1].style.backgroundColor="#ee548f";
ele[2].style.backgroundColor="#f6901a";
ele[3].style.backgroundColor="#82bb30";
ele[4].style.backgroundColor="#4facff";

let sup_txt=document.querySelectorAll(".stat");
let sup_txt_arr=[...sup_txt];

let app_color=sup_txt_arr.map((value)=>{value.style.color="white"});

let sup_txt_2=document.querySelectorAll(".stat-value");
let sup_txt_2_arr=[...sup_txt_2];

let app_color_2=sup_txt_2_arr.map((ele)=>{ele.style.color="white"});
   
}