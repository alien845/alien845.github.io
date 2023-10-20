function validaContra(pass) {
    //alert('Contrasenya '+pass);
    if (pass.length < 6) {
        alert("Contrasenya massa curta");
        return false;
    } else {
        alert('Contrasenya correcta');
        return true;
    }
}
// Acepta NIEs (Estrangers con X, Y o Z al principi)
function validaDOC() {
    var dni = document.getElementById("doc").value;
    var num, ultima_lletra, lletra;
    var expressio_regular_dni = /^[XYZ]?\d{5,8}[A-Z]$/;
    dni = dni.toUpperCase();
    if (expressio_regular_dni.test(dni) == true) {
        num = dni.substr(0, dni.length - 1);
        num = num.replace('X', 0);
        num = num.replace('Y', 1);
        num = num.replace('Z', 2);
        ultima_lletra = dni.substr(dni.length - 1, 1);
        num = num % 23;
        lletra = 'TRWAGMYFPDXBNJZSQVHLCKET';
        lletra = lletra.substring(num, num + 1);
        if (lletra != ultima_lletra) {
            alert('DOCUMENT erroni, la lletra no se correspon');
            return false;
        } else {
            alert('DOCUMENT correcte');
            return true;
        }
    } else {
        alert('DOCUMENT erroni, format no vàlid');
        return false;
    }
}

function validarForm() {
    // var nom = document.forms["formulari"]["nom"].value;
    // var nom=document.getElementByName("nom")[0].value; //per name="nom"
    var nom = document.getElementById("nom").value; //per id="nom"
    var pass = document.getElementById("pass").value;
    var doc = document.getElementById("doc").value;
    alert("Comencem a validar ..." + nom + " " + doc);
    if (validaContra(pass) && validaDOC(doc)) {
        alert("Tot Correcte, envie'm el teu formulari. Gràcies " + nom);
        document.getElementById("formulari").submit();
        return true;
    }
    else{
        return false;
    }
}