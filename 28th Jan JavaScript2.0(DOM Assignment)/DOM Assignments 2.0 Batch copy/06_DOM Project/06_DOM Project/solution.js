function page_load()
{

   let ele=document.querySelector('header img');
   ele.src="./assets/ineuron-logo.png";

   let foot_logo_div=document.querySelector('.footer_social');
   let new_logo=document.createElement('div');
   new_logo.classList.add('footer_social_ico');
   new_logo.innerHTML="<i class='fa-brands fa-linkedin'><i>";
   foot_logo_div.appendChild(new_logo);

}