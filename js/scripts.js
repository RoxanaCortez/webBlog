let flag = false;
let days = document.querySelectorAll(".days");
let selected;

for (let index = 0; index < days.length; index++) {
    dias[index].addEventListener("click", () => {
        let link = days[index].getAttribute("href").split('#');
        let day_id = link[link.length-1];
        
        let selected_day = document.getElementById(day_id);
        selected_day.classList.toggle("hide_elment");

        if (flag) {
            selected.classLifst.toggle("hide_element");
        }
        selected = selected_day;
        flag = true;
    });
};

dias[0].click();

