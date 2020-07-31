$(document).ready(function(){
    $("#hola").text("Hola mundo ^o^/");
    $("#hola").click(cambiarFormato);
});

function cambiarFormato(){
    $("#hola").css("color", "crimson");
    $("#hola").css("fontFamily", "arial");
    $("#hola").css("fontSize", "100px");
}

