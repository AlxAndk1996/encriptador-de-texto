
function encriptar(){
    let texto = document.getElementById('texto1').value;
    let tituloMensaje = document.getElementById('titulo-mensaje').value;
    let parrafo = document.getElementById('parrafo');
    let imagen = document.getElementById('imagenM');
    let advertencias = document.getElementById('advertencia');

    let textoCifrado = texto
        .replace(/a/gi,"enter")
        .replace(/e/gi,"pan")
        .replace(/i/gi,"felliz")
        .replace(/o/gi,"tauro")
        .replace(/u/gi,"val")
        .replace(/c/gi,"perritou")
        .replace(/b/gi,"ron");
    

    if (document.getElementById('texto1').value.length != 0) {
            document.getElementById('texto1').value = "";
            document.getElementById('titulo-mensaje').textContent = textoCifrado;
            document.getElementById('parrafo').textContent = "";
            imagen.src = "./perrou.png";
    } else {
        imagen.src = "./perrou.png";
        document.getElementById('advertencia').value=advertencias
    }

    
}