var TailleMin=1;
var TailleMax=70;

 window.onload = function() { // empêcher l'exécution du code avant le chargement complet de tous les éléments de la page.

     var canvas = document.getElementById('canvas'); // On récupère l'objet canvas dans la variable canvas
     if (!canvas){
         alert("Impossible de récupérer le canvas"); // On vérifie qu'on a bien récupèré l'objet canvas dans la variable canvas
         return;
        }
     
     var context = canvas.getContext('2d'); // On récupère le context du canvas. Ce sont les méthodes de cet objet que l'on utilisera pour dessiner sur le canvas
     if (!context){
         alert("Impossible de récupérer le context du canvas"); // On vérifie qu'on a bien récupèré le context de canvas dans la variable context
         return;
        }
     
     do {
         var size = prompt("Veuillez entrer la taille de votre grille en choisissant un nombre entre " + TailleMin + " et " + TailleMax);
        } while (size < TailleMin || size > TailleMax);

     var width = window.innerWidth < window.innerHeight ? window.innerWidth : window.innerHeight;
     // si la largeur est inférieure à la hauteur, alors le canvas aura un witdth de la taille de la largeur, sinon ça sera celle de la longueur.
     // var y = (x < 2 ? "yes" : "no");

     var squarewidth = width/size; // On défini la taille de nos carrés par le calcul

     canvas.setAttribute("width", width); // On défini la largeur du Canvas
     canvas.setAttribute("height", width); // On défini la hauteur du Canvas
     
     for (var i = 0; i <= size; i++) {
         context.beginPath(); // On démarre un nouveau tracé
         context.moveTo(i*squarewidth, 0);
         context.lineTo(i*squarewidth, width);
         context.stroke();

         context.beginPath();
         context.moveTo(0, i*squarewidth);
         context.lineTo(width, i*squarewidth);
         context.stroke();
        }
    }



