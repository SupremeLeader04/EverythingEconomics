/* NEWS SEARCHBAR */

var nov_int_rate = ["bank", "england", "interest", "rate", "inflation", "base", "5.25", "cpi", "monetary", "fractional", "reserve", "nov_int_rate"]
var multi_array = [nov_int_rate]
var string_array = ["nov_int_rate"]

document.getElementById("searchbtn").addEventListener("click",
function searchFunction(event) { 

    // prevent page refresh
    event.preventDefault();

    //define success array
    success = []

    //define article display styles
    var display_article = {
        "display": "block",
    };

    var no_display_article = {
        "display": "none",
    };

    // reset search results
    for (c = 0; c < string_array.length; c++) {
        article = string_array[c];
        article_html = document.getElementById(article);
        Object.assign(article_html.style, no_display_article);
    };

    // collect input
    let input = document.getElementById('searchbar').value 
    input=input.toLowerCase();

    // clean input
    punctuation = /[!";:'@#~.,?<>()*&^%$/¬`£!|=+-_]/g;
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

    // print search results
    search_div = document.getElementById("search_results");
    Object.assign(search_div.style, display_article)

    if (success.length > 0) {
        decline = document.getElementById("output_no_results");
        Object.assign(decline.style, no_display_article);

        for (let b = 0; b < success.length; b++) {
            article = success[b];
            article_html = document.getElementById(article);
            Object.assign(article_html.style, display_article);
        };
    } else {
        accept = document.getElementById("output_no_results");
        Object.assign(accept.style, display_article);
    };
});

var Search = document.getElementById("searchbar");
Search.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("searchbtn").click();
    }
});

/* NEWS ARTICLE EFFECTS */
var hover_styles = {
    "box-shadow": "1.5rem 1.5rem 1.5rem 1.5rem rgba(256, 256, 256, 0.2)",
    "width": "80%",
    "transition": "var(--transition)"
};

var unhover_styles = {
    "width": "75%",
    "box-shadow": "0 0rem 0rem",
};

ar = document.getElementsByClassName("article-html")
for (i = 0; i < ar.length; i++) {
    ar[i].addEventListener("mouseover",
    function Hover(event) {
        arr = event.target.closest("div");
        Object.assign(arr.style, hover_styles);
    });
    ar[i].addEventListener("mouseout",
    function Unhover(event) {
        arrr = event.target.closest("div");
        Object.assign(arrr.style, unhover_styles);
    });
    ar[i].addEventListener("click",
    function openArticle(event) {
        result = event.target.closest("div").id;
        prefix = "../webpages/News Pages/";
        suffix = ".html";
        relpath = prefix.concat(result, suffix);
        window.location.replace(relpath);
    });
};