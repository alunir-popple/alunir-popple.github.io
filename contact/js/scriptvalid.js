/*Validation */
var langue = document.querySelector("header");
if(langue.classList.contains("french")){
    document.querySelector(".bouton").addEventListener("click", function(){
        document.querySelector(".resultat").innerText="Votre message a bien été envoyé";
    });
}
if(langue.classList.contains("deutsch")){
    document.querySelector(".bouton").addEventListener("click", function(){
        document.querySelector(".resultat").innerText="Ihre Nachricht wurde erfolgreich gesendet";
    });
}
if(langue.classList.contains("english")){
    document.querySelector(".bouton").addEventListener("click", function(){
        document.querySelector(".resultat").innerText="Your message has been sent";
    });
}


/* MOBILE */

/* Télécharger */
document.querySelector("#telechargerdeux").addEventListener("click", function() {
    document.location.href = "https://play.google.com/store?gl=FR&utm_source=emea_Med&utm_medium=hasem&utm_content=Oct2020&utm_campaign=Evergreen&pcampaignid=MKT-EDR-emea-fr-1001280-Med-hasem-py-Evergreen-Oct2020-Text_Search_BKWS%7cONSEM_kwid_43700007201121925&referrer=gclid%3DCjwKCAiAzrWOBhBjEiwAq85QZ831XWszPhFZmJm7fgnCYpCShOZzNbAPD9EROt61qRuxkhEDTkzAvhoCM64QAvD_BwE&gref=EkQKPAoICIDOtY4GEGMSLACrzlBnzfVdazM-EVmYmbt-CcJikJKE5nM1sA8P0RE63rWpG7GSEQNOTMC-GgIzrhAC8P8HARjj9tyaAw&gclid=CjwKCAiAzrWOBhBjEiwAq85QZ831XWszPhFZmJm7fgnCYpCShOZzNbAPD9EROt61qRuxkhEDTkzAvhoCM64QAvD_BwE&gclsrc=aw.ds";
});

/* Menu */
/* ouverture du menu */
document.querySelector("#menuM").addEventListener("click", function(){
    this.classList.add("remove");
    document.querySelector("#couverturemenu").classList.remove("remove");
});

/* fermeture du menu */
document.querySelector("#close").addEventListener("click", function(){
    document.querySelector("#couverturemenu").classList.add("remove");
    document.querySelector("#menuM").classList.remove("remove");
});


/* TABLETTE + PC */

/* Télécharger */
document.querySelector("#telechargerdeux2").addEventListener("click", function() {
    document.location.href = "https://play.google.com/store?gl=FR&utm_source=emea_Med&utm_medium=hasem&utm_content=Oct2020&utm_campaign=Evergreen&pcampaignid=MKT-EDR-emea-fr-1001280-Med-hasem-py-Evergreen-Oct2020-Text_Search_BKWS%7cONSEM_kwid_43700007201121925&referrer=gclid%3DCjwKCAiAzrWOBhBjEiwAq85QZ831XWszPhFZmJm7fgnCYpCShOZzNbAPD9EROt61qRuxkhEDTkzAvhoCM64QAvD_BwE&gref=EkQKPAoICIDOtY4GEGMSLACrzlBnzfVdazM-EVmYmbt-CcJikJKE5nM1sA8P0RE63rWpG7GSEQNOTMC-GgIzrhAC8P8HARjj9tyaAw&gclid=CjwKCAiAzrWOBhBjEiwAq85QZ831XWszPhFZmJm7fgnCYpCShOZzNbAPD9EROt61qRuxkhEDTkzAvhoCM64QAvD_BwE&gclsrc=aw.ds";
});