function cambiarImagen(id){

    let imagen = document.getElementById("imagenCentral");
    // asignamos id de la imagen clickada a la img del container-imagen 
    imagen.src = id;
    let imagenMostrada = document.getElementById(id);
    let altImagen = document.getElementById("textotImagen");
    // asignamos el alt de la imagen clickada al p del container-imagen
    altImagen.innerHTML = imagenMostrada.alt;
   
}
