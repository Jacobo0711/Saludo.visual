function saludar() {
    var nom= document.getElementById("txtNom").value;
    var mensaje ="hola "+nom+" como estas?";
    document.getElementById("lblResp").innerHTML = mensaje
}