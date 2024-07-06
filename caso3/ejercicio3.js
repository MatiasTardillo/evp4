
var index;
var text = "<ul>";
var fruits = ["Platano", "Naranja", "Manzana", "Mango","Fresa","Uva","Granadilla"];
function ver() {
for (index = 0; index < fruits.length; index++) {
    text += "<li>" + fruits[index] + "</li>";
    }
    text += "</ul>";
    document.getElementById("demo1").innerHTML = text;
}
function ordenar() {
    fruits.sort();
    document.getElementById("demo2").innerHTML = fruits;
}
function invertir() {
    fruits.reverse();
    document.getElementById("demo3").innerHTML = fruits;
}
function longitud() {
    var cantidad=fruits.length;
    document.getElementById("demo4").innerHTML =
    "La cantidad de elementos del arrays es:"+cantidad;
}
function insertar() {
    fruits.push("Fresa");
    document.getElementById("demo5").innerHTML = fruits;
}
function eliminar() {
    fruits.splice(0, 1);
    document.getElementById("demo6").innerHTML = fruits;
}
