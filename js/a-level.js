/* A-Level TOP MENU */

var macroBtn = document.getElementById("macroeconomic_btn");
var microBtn = document.getElementById("microeconomic_btn");
var examBtn = document.getElementById("exam_btn");

var macroList = document.getElementById("macro_container");
var microList = document.getElementById("micro_container");
var examList = document.getElementById("exam_container");

var static_selected_styles = {
    "background-color": "var(--colour-cool-green)",
    "border-color": "var(--colour-cool-green)",
    "color": "#000"
};
var static_unselected_styles = {
    "background-color": "#282929",
    "border-color": "var(--colour-cool-green)",
    "color": "var(--colour-cool-green)"
};
var show_list = {
    "display": "block",
};
var not_show_list = {
    "display": "none",
};

function macro_clicked() {
    Object.assign(macroBtn.style, static_selected_styles),
    Object.assign(microBtn.style, static_unselected_styles),
    Object.assign(examBtn.style, static_unselected_styles),
    Object.assign(macroList.style, show_list),
    Object.assign(microList.style, not_show_list),
    Object.assign(examList.style, not_show_list)
};

function micro_clicked() {
    Object.assign(macroBtn.style, static_unselected_styles),
    Object.assign(microBtn.style, static_selected_styles),
    Object.assign(examBtn.style, static_unselected_styles),
    Object.assign(macroList.style, not_show_list),
    Object.assign(microList.style, show_list),
    Object.assign(examList.style, not_show_list)
};

function exam_clicked() {
    Object.assign(macroBtn.style, static_unselected_styles),
    Object.assign(microBtn.style, static_unselected_styles),
    Object.assign(examBtn.style, static_selected_styles),
    Object.assign(macroList.style, not_show_list),
    Object.assign(microList.style, not_show_list),
    Object.assign(examList.style, show_list)
};

/* A-level change sign and open sublist */

var sublist_title = document.getElementsByClassName("sublist_title");
var a;

for (a = 0; a < sublist_title.length; a++) {
    sublist_title[a].addEventListener("click", function() {
        this.classList.toggle("clicked");

        var sublist = this.nextElementSibling;
        if (sublist.style.display === "block") {
            sublist.style.display = "none";
        } else {
            sublist.style.display = "block";
        }
    });
}