/* scroll-navbar effect */
window.addEventListener("scroll", () => {
    document.querySelector("nav").classList.toggle("window-scroll", window.scrollY > 0)
})

/* quotes slider */
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 100,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
        600: {
            slidesPerView: 3
        }
    },

    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },

  });

/* NEWS SEARCHBAR */

var nov_int_rate = ["bank", "england", "interest", "rate", "inflation", "base", "5.25", "cpi", "monetary", "fractional", "reserve", "nov_int_rate"]
var multi_array = [nov_int_rate]

function searchFunction() {

    //define success array
    success = []

    //define article display styles
    var display_article = {
        "display": "block",
    };

    var no_display_article = {
        "display": "none",
    };

    // collect input
    let input = document.getElementById('searchbar').value 
    input=input.toLowerCase();

    // clean input
    punctuation = /[!";:'@#~.,?<>()*&^%$£!|=+-_]/g;
    clean_input = input.replace(punctuation, "");

    // split input into array
    let x = clean_input.split(" ");
    
    // search for terms in reference
    for (let i = 0; i < x.length; i++) {
        let word = x[i];
        for (let j = 0; j < multi_array.length; j++) {
            let array = multi_array[j];
            for (let a = 0; a < (array.length - 1); a++) {
                let ref = array[a];
                if (ref == word) {
                    success.push(array[array.length - 1]);
                };
            };
        };
    };

    if (success.length != 0) {
        var general = document.getElementById("output_no_results")
        alert(general)
        Object.assign(general.style, display_article)
        alert("hello")
        for (let b = 0; b < success.length; b++) {
            obj = document.getElementById(success[b])
        }
    };

    window.location.href = '../webpages/News Pages/news_output.html';

};

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

/* Extra Economics change sign and open swiper */

var extra_list_title = document.getElementsByClassName("extra_list_title");
var a;

for (a = 0; a < extra_list_title.length; a++) {
    extra_list_title[a].addEventListener("click", function() {
        this.classList.toggle("clicked");

        var sublist = this.nextElementSibling;
        if (sublist.style.display === "block") {
            sublist.style.display = "none";
        } else {
            sublist.style.display = "block";
        }
    });
}

/* The Great Economists */
var tile_hover_property = {
    "box-shadow": "0 1.5rem 1.5rem rgba(256, 256, 256, 0.2)",
    "height": "96.6%",
    "width": "105%",
    "transition": "var(--transition)"
};

var tile_static_property = {
    "width": "100%",
    "height": "92%"
};

function tile_hover(element) {
    var tile_container = element.parentElement;
    Object.assign(tile_container.style, tile_hover_property);
};

function not_tile_hover(element) {
    var tile_container = element.parentElement;
    Object.assign(tile_container.style, tile_static_property);
    tile_container.style.removeProperty("box-shadow");
};