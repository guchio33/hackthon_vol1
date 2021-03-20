setInterval(() => {
    const current_time = new Date();
    const hour = current_time.getHours();
    const min = current_time.getMinutes();
    const sec = current_time.getSeconds();

    const degrees_hour = hour * 30 + min * 0.5;
    const degrees_min = min * 6;
    const degrees_sec = sec * 6;
  
    const element_hour = document.querySelector(".clock_hour_hand");
    const element_min = document.querySelector(".clock_min_hand");
    const element_sec = document.querySelector(".clock_sec_hand");
  
    element_hour.style.transform = `rotate(${degrees_hour}deg)`;
    element_min.style.transform = `rotate(${degrees_min}deg)`;
    element_sec.style.transform = `rotate(${degrees_sec}deg)`;
  }, 10);
