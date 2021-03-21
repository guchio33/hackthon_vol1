var switch_count=0;
function light(){

    switch_count++;
    const element_switch = document.querySelector(".switch_color");
    const element_flip = document.querySelector(".switch_img");
    
    if(switch_count%2==1){
        element_switch.style.backgroundColor="rgba(0,0,0,0.7)";
        element_flip.style.transform = `scale(1,-1)`;
    }else{
        element_switch.style.backgroundColor="rgba(0,0,0,0)";
        element_flip.style.transform = `scale(1,1)`;
    }
}