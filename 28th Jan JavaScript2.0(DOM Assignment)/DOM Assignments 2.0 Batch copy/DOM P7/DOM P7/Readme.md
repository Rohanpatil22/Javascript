##Assignment 7 Solution
function page_load()
{
 
    let ele=document.querySelectorAll('.main__languages a');
    for(let x=0;x<ele.length;x++)
    {
        if(x%2!=0)
        {
            ele[x].remove();
        }
    }

    let inp_box=document.querySelector('.main__form-input');
    inp_box.value='ineuron';
   


}