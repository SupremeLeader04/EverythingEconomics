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