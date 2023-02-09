function page_load()
{
    let sel_textbox_1=document.getElementsByClassName("enterName");
    let sel_textbox_1_arr=[...sel_textbox_1];
    sel_textbox_1_arr[0].placeholder="FSJS 2.0";
    
    let sel_textbox_2=document.getElementsByClassName("userName");
    let sel_textbox_2_arr=[...sel_textbox_2];
    sel_textbox_2_arr[0].placeholder="FSJS 2.0";
    
    let email_textbox=document.querySelectorAll('input[type=email]');
    let email_textbox_arr=[...email_textbox];
    console.log(email_textbox_arr);

    for(let i=0;i<email_textbox_arr.length;i++)
    {
        email_textbox_arr[i].placeholder="fsjs@ineuron.ai";
    }

    let text_area_sel=document.querySelectorAll('textarea');
    let text_area_sel_arr=[...text_area_sel];
    console.log(email_textbox_arr);

    for(let i=0;i<text_area_sel_arr.length;i++)
    {
        text_area_sel_arr[i].placeholder="Hello World";
    }

}