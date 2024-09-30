function validate(){
    var j1 = document.getElementById("joueur1").value
    if(j1 === ""){
        alert("Le joueur doit avoir un nom")
        return false
    }
    else{
        //passage des joueurs dans l'url
        window.location.href = "jeu.html?j1=" + j1
    }


}