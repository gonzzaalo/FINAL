function cargarAyudaNombre(){
    var h3=document.getElementById("h3ayuda");
    h3.innerHTML="Ingrese con mayúsculas su Nombre";
    }
    function cargarAyudaApellido(){
    var h3=document.getElementById("h3ayuda");
    h3.innerHTML="Ingrese con mayúsculas su Apellido";
    }
function preguntar()
{
    var vNombre=prompt("¿cual es tu Nombre?");
    alert("Bienvenido"+vNombre);

}
function definirTitulo()
{
    var vTitulo=prompt("defina el titulo aqui");
    var vH1=document.getElementById ("TituloPrincipal");
    vH1.innerHTML=vTitulo;
}
function ModoOscuro()
{
    var vBody=document.getElementById ("cuerpo");
    vBody.style.background="gray";
    

}
function ModoClaro() {
    var vBody=document.getElementById ("cuerpo");
    vBody.style.background="white";
}