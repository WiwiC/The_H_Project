var afficher = document.querySelector('button');
afficher.onclick = function () {
    document.getElementById("id_hidden").className = "";
    afficher.className = "hidden";
}


var search = document.forms["formulaire"].search_bar;
var click = document.forms["formulaire"].boutton_click;

click.onclick = function () {
    var value = search.value.trim();
    if (value != "" ) {
        var mot_a_rechercher = value.replace(/( )+/g, "+");
        document.location.href="https://www.google.fr/#q=" + mot_a_rechercher;
    }
    else {
    }
}


function pop_up() {

}
setTimeout(pop_up, 5000);

