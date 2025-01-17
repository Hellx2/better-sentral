let theme = localStorage.getItem("theme");

if (!theme) {
    theme = "gray";
    localStorage.setItem("theme", "gray");
}

let color1, color2;

switch (theme) {
    case "catppuccin":
        color1 = "#1c1c3c";
        color2 = "#2c2c4c";
        break;
    case "gray":
        color1 = "#222222";
        color2 = "#333333";
        break;

    default:
        color1 = "";
        color2 = "";
}

setTimeout(function () {
    function style(doc) {
        doc.querySelectorAll(".header").forEach(
            (x) => (x.style.backgroundColor = color1),
        );

        doc.querySelectorAll(".nav_badge.not-icon").forEach(
            (x) => (x.style.backgroundColor = color1),
        );

        doc.querySelector(".main-container").style.backgroundColor = color2;

        doc.querySelectorAll("#right-col *").forEach((x) => {
            x.style.backgroundColor = color1;
            x.style.color = "#ffffff";
        });
    }

    style(document);

    document.querySelectorAll("#main_nav_ul li a").forEach((x) => {
        x.style.backgroundColor = color1;
        x.style.color = "#ffffff";
    });

    document.getElementById("left-col").style.display = "block";

    document.getElementById("left-col").innerHTML =
        `<iframe src='${document.URL.split("student")[0]}news/notices'></iframe>`;

    document.querySelector("#left-col iframe").style.width = "100%";
    document.querySelector("#left-col iframe").style.height = "80vh";
    setTimeout(() => {
        style(
            document.querySelector("#left-col iframe").contentWindow.document,
        );

        document
            .querySelector("#left-col iframe")
            .contentWindow.document.querySelector(
                ".mobile-footer",
            ).style.display = "none";
    }, 1000);

    (function () {
        let fn = () => {
            document
                .querySelector("#left-col iframe")
                .contentWindow.document.querySelectorAll(
                    "#left-col div.ng-scope",
                )
                .forEach((x) => {
                    x.style.backgroundColor = color1;
                    x.style.color = "#ffffff";
                });
            document
                .querySelector("#left-col iframe")
                .contentWindow.document.querySelectorAll(
                    "#left-col div.fadeout",
                )
                .forEach((x) => (x.style.display = "none"));
            document
                .querySelector("#left-col iframe")
                .contentWindow.document.querySelectorAll(
                    "#left-col div.fadeout",
                )
                .forEach((x) => (x.style.display = "none"));
            document
                .querySelector("#left-col iframe")
                .contentWindow.document.querySelectorAll("#left-col div h5")
                .forEach((x) => (x.style.color = "#ffffff"));
            document
                .querySelector("#left-col iframe")
                .contentWindow.document.querySelectorAll(".ng-binding")
                .forEach((x) => (x.style.color = "#ffffff"));
        };

        setTimeout(() => {
            fn();
            setInterval(fn, 5000);
        }, 2000);
    })();

    document
        .querySelector("#right-col")
        .prepend(
            document.querySelectorAll(
                ".student-detail-accordin .details_container",
            )[2],
        );
    document.querySelector("#right-col .details_container").style.display =
        "block";
    document
        .querySelector("#right-col .details_container")
        .classList.remove("ng-hide");

    document
        .querySelector("#right-col .details_container")
        .querySelectorAll("div.timetable-class")
        .forEach((x) => {
            x.querySelector(".ng-binding").style.padding = "0";
            x.style.padding = "2px";
            x.style.margin = "none";
            x.style.lineHeight = "1";
            x.style.minHeight = "2.5em";
            x.style.maxHeight = "2.5em";
            //if (x.innerText.length == 1) x.parentElement.style.display = "none";
        });

    document
        .querySelector("#right-col .details_container")
        .querySelectorAll(".timetable-period")
        .forEach((x) => {
            x.style.padding = "0";
            x.style.margin = "none";
            x.style.lineHeight = "1";
            x.style.minHeight = "2.5em";
            x.style.height = "2.5em";
            x.parentElement.style.display = "block";
        });
    document
        .querySelector("#right-col .details_container")
        .querySelectorAll(".timetable-dayperiod.inactive")
        .forEach((x) => (x.parentElement.style.display = "none"));

    document.querySelector(
        "#right-col > div:nth-child(5) > div:nth-child(1)",
    ).style.display = "none";
    document.querySelector(
        "div.ng-scope:nth-child(6) > div:nth-child(1)",
    ).style.display = "none";
    document.querySelector(".text-center").style.display = "none";

    let student_1 = document.URL.split("com.au/")[1].split("/")[0];
    let student_2 = document.URL.split("portal/#!/student/")[1];

    document.querySelector("header h1").children[0].innerHTML =
        `<img alt="" class="profile usr_profile" ng-src="/${student_1}/portal/util/getstudentphoto/${student_2}" src="/${student_1}/portal/util/getstudentphoto/${student_2}" style="background-color: rgb(28, 28, 60); color: rgb(255, 255, 255); width:30px; padding:0px; margin:0px">`;

    document.querySelector(
        ".student-image-name > img:nth-child(1)",
    ).style.display = "none";
    document.querySelector(".student-details-wrapper").style.display = "none";
    document.querySelector(
        ".student-profile-wrapper > div:nth-child(2) > hr:nth-child(1)",
    ).style.display = "none";
    document.querySelector("div.dash_collection:nth-child(2)").style.padding =
        "5px";

    document.querySelector("div.details_container:nth-child(1)").style.border =
        "1px solid #ffffff";
    document.querySelector(
        "div.details_container:nth-child(1)",
    ).style.borderRadius = "5px";
    document.querySelector(
        "div.details_container:nth-child(1)",
    ).style.marginBottom = "10px";

    document.querySelector(
        "ul.link_list:nth-child(1) > ng-include:nth-child(1) > div:nth-child(2) > li:nth-child(3)",
    ).style.display = "none";

    let classes_array = document
        .querySelector("div.student-classes:nth-child(3)")
        .innerText.replaceAll("\t", "")
        .split("\n")
        .filter((x) => x.trim() != "");

    let classes = {};

    for (let i = 0; i < classes_array.length; i += 2) {
        classes[classes_array[i].trim()] = classes_array[i + 1].trim();
    }

    document
        .querySelectorAll(
            '.timetable tr.ng-scope:not([style*="display: none"])',
        )
        .forEach((x) => {
            if (
                classes[
                    x.children[1].innerText
                        .split("\n")[0]
                        .split("(")[1]
                        .split(")")[0]
                        .trim()
                ] !=
                x.children[1].innerText
                    .split("\n")[1]
                    .split("with")[1]
                    .trim()
                    .replace(/\s+.\./, "")
                    .split(".")[0]
            )
                x.innerHTML +=
                    "<b style='color: #ffaa00;'>Substitute Teacher</b>";
        });

    document
        .querySelectorAll(".student-classes .ng-scope td")
        .forEach((x) => (x.style.padding = 0));

    document
        .querySelectorAll("div.dash_collection")
        .forEach((x) => (x.style.marginRight = 0));

    document.querySelector(
        "div.student-classes:nth-child(3) > table:nth-child(1)",
    ).style.margin = 0;

    document
        .querySelectorAll("#right-col > div:nth-child(3) > div:nth-child(1) p")
        .forEach((x) => (x.style.margin = 0));

    document
        .querySelectorAll(".student-detail-section .padding-bottom")
        .forEach((x) => (x.style.padding = 0));

    document
        .querySelectorAll(
            "#right-col > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) p",
        )
        .forEach((x) => (x.style.margin = 0));

    document.querySelector(
        "#right-col > div:nth-child(4) > div:nth-child(1) > div:nth-child(2)",
    ).style.padding = 0;

    document.querySelector(
        "#right-col > div:nth-child(7) > div:nth-child(1) > div:nth-child(2)",
    ).style.padding = 0;

    document.querySelector(
        "#right-col > div:nth-child(7) > div:nth-child(1) > div:nth-child(2)",
    ).style.paddingLeft = "10px";

    document.querySelector(
        "#right-col > div:nth-child(7) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > table:nth-child(1)",
    ).style.margin = 0;

    document.querySelector("#left-col > iframe:nth-child(1)").style.border =
        "none";
    document
        .querySelectorAll("#right-col .dash_collection")
        .forEach((x) => (x.style.border = "none"));
    document.querySelector("div.details_container:nth-child(1)").style.border =
        "none";
    document.querySelectorAll("#main_nav_ul li a").forEach((x) => {
        x.style.border = "none";
        x.style.marginBottom = "2px";
    });
}, 1500);

document.querySelector(".timetable").style.border = "none";
document.querySelector(".student-detail-section").style.padding = "0";
