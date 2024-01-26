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
};