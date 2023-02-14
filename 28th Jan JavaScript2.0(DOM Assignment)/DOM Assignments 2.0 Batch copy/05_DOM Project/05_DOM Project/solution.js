function page_load()
{
    let ele=document.querySelector('.recipe-gallery');
    var new_div=document.createElement('div');
    new_div.classList.add('card');
    new_div.setAttribute('style','font-weight:bold')
    new_div.innerHTML='add 6th card here';
    ele.appendChild(new_div);
}