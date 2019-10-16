let days = document.querySelectorAll(".days");
let flag = false;
let selected;

for (let index = 0; index < days.length; index++) {
    days[index].addEventListener("click", () => {
        let link = days[index].getAttribute("href").split('#');
        let day_id = link[link.length-1];
        
        let selected_day = document.getElementById(day_id);
        selected_day.classList.toggle("hide");

        if (flag) {
            selected.classList.toggle("hide");
        }
        
       selected = selected_day;
        flag = true;
    });
};

days[0].click();

