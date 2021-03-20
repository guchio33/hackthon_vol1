setInterval(() => {
    const current_time = new Date();
    const hour = current_time.getHours();
    const min = current_time.getMinutes();
    const sec = current_time.getSeconds();

    const win_col = sec % 60;

    const element_window = document.querySelector(".window_color");

    if(win_col==0||win_col==57){
        element_window.style.backgroundColor="rgba(0,0,0,0)";
    }
    if(win_col==3||win_col==54){
        element_window.style.backgroundColor="rgba(0,0,0,0.1)";
    }
    if(win_col==6||win_col==51){
        element_window.style.backgroundColor="rgba(0,0,0,0.2)";
    }
    if(win_col==9||win_col==48){
        element_window.style.backgroundColor="rgba(0,0,0,0.3)";
    }
    if(win_col==12||win_col==45){
        element_window.style.backgroundColor="rgba(0,0,0,0.4)";
    }
    if(win_col==15||win_col==42){
        element_window.style.backgroundColor="rgba(0,0,0,0.5)";
    }
    if(win_col==18||win_col==39){
        element_window.style.backgroundColor="rgba(0,0,0,0.6)";
    }
    if(win_col==21||win_col==36){
        element_window.style.backgroundColor="rgba(0,0,0,0.7)";
    }
    if(win_col==24||win_col==33){
        element_window.style.backgroundColor="rgba(0,0,0,0.8)";
    }
    if(win_col==27||win_col==30){
        element_window.style.backgroundColor="rgba(0,0,0,0.9)";
    }

  }, 10);
