let main_style = document.createElement("style");

(await fetch("https://raw.githubusercontent.com/Hellx2/better-sentral/main/main.css")).text().then(text => {
    main_style.innerText = text;
    document.body.appendChild(main_style);
    document.querySelector(".header").style.backgroundColor = "#002255";
})

let details = document.createElement("div");
details.classList.add("dash_collection");
details.appendChild(document.querySelector(".student-details-wrapper"))

document.querySelector("#left-col").prepend(details)

let timetable = document.createElement("div");
timetable.classList.add("dash_collection");
timetable.appendChild(document.querySelector("div.details_container:nth-child(3)"));
document.querySelector("#right-col").prepend(timetable)

document.querySelectorAll(".details_container")[0].classList.remove("ng-hide")
document.querySelector("#right-col > div:nth-child(5) > div:nth-child(1)").style.display = "none";

document.querySelectorAll(".timetable-class > div").forEach(x => x.style.padding = "5px")
document.querySelectorAll(".timetable-class").forEach(x => {
    x.style.minHeight = "60px";
    x.style.backgroundColor = "#2d2d2d";
})

document.querySelectorAll(".timetable-dayperiod").forEach(x => x.style.backgroundColor = "#282828")
document.querySelectorAll(".timetable-period").forEach(x => x.style.backgroundColor = "#262626")
