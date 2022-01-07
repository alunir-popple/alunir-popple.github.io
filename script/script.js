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

/* ANIMATION SECTION */

var sectionune = document.querySelector("#sectionune");
var sectiondeux = document.querySelector("#sectiondeux");
var sectiontrois = document.querySelector("#sectiontrois");

window.onload = () => {

    let observer = new IntersectionObserver(observables => {
        for(let observable of observables){
            if(observable.intersectionRatio > 0.8){
                observable.target.classList.remove("hidden");

                if (sectionune.classList.contains("hidden")==true){
                    document.querySelector("#para").classList.add("hidden");
                }
                else{
                    document.querySelector("#para").classList.remove("hidden");
                }

                if (sectiondeux.classList.contains("hidden")==true){
                    document.querySelector("#paradeux").classList.add("hidden");
                }
                else{
                    document.querySelector("#paradeux").classList.remove("hidden");
                }

                if (sectiontrois.classList.contains("hidden")==true){
                    document.querySelector("#paratrois").classList.add("hidden");
                }
                else{
                    document.querySelector("#paratrois").classList.remove("hidden");
                }

            }else{
                observable.target.classList.add("hidden");

                if (sectionune.classList.contains("hidden")==true && sectiondeux.classList.contains("hidden")==true && sectiontrois.classList.contains("hidden")==true){
                    document.querySelector("#para").classList.add("hidden");
                    document.querySelector("#paradeux").classList.add("hidden");
                    document.querySelector("#paratrois").classList.add("hidden");
                }
            }
        }
    }, {
        threshold: [0.25, 0.5, 0.85]
    });


    const sections = document.querySelectorAll("section");
    for(let section of sections){
        section.classList.add("hidden");
        observer.observe(section);

    }
}




/* LANGUE */

function anglais() {
    document.querySelector("#accueil").innerText = "Discover Popple.";
    document.querySelector("#licontact").innerHTML = "<a href='contact/contact-english.html' id='contact2'>Contact Us</a>";
    document.querySelector("#licontact2").innerHTML = "<a href='contact/contact-english.html' id='contact2'>Contact Us</a>";
    document.querySelector(".navfooter").innerHTML = "<ul class='ulfooter'><li class='lititrefooter' id='t1'><strong>Company</strong></li><hr><li class='lifooter'>Popple Inc.</li><li class='lifooter'>Career</li></ul><ul class='ulfooter'><li class='lititrefooter' id='t2'><strong>Community</strong></li><hr><li class='lifooter'>Community rules</li><li class='lifooter'>Security Center</li></ul><ul class='ulfooter'><li class='lititrefooter' id='t3'><strong>Advertising</strong></li><hr><li class='lifooter'><a href='download/Advertising Policies.pdf' id='liens'>Advertising Policy</a></li><li class='lifooter'><a href='download/Political Ads Library.pdf' id='liens'>Advertising Library policies</a></li><li class='lifooter'><a href='download/Brand Guidelines.pdf' id='liens'>Brand Charter</a></li></ul><ul class='ulfooter'><li class='lititrefooter' id='t4'><strong>Legal</strong></li><hr><li class='lifooter'><a href='download/Advertising Policies.pdf' id='liens'>Privacy Center</a></li><li class='lifooter'><a href='download/Advertising Policies.pdf' id='liens'>Cookie Policy</a></li><li class='lifooter'><a href='download/Advertising Policies.pdf' id='liens'>Cookie management</a></li><li class='lifooter'><a href='download/Advertising Policies.pdf' id='liens'>Terms and Conditions for custom creative tools</a></li><li class='lifooter'><a href='download/Advertising Policies.pdf' id='liens'>Terms and Conditions dor Community Geofilters</a></li></ul>";
    document.querySelector("#telechargerdeux2").innerText = "Download";
    document.querySelector("#telechargerdeux").innerText = "Download";
    document.querySelector(".langage2_1").innerText = "Language :";
    document.querySelector("#para").innerText = "Share your best discoveries with your friends!";
    document.querySelector("#paradeux").innerHTML = "Find out what's new this week!";
    document.querySelector("#paratrois").innerHTML = "Keep up to date with the latest news!";
    document.querySelector("#ambiance").innerHTML = "It's culture time !";
    document.querySelector("#sectiondeux").innerHTML = "<img id='capturedeux' src='images/Accueil_Anglais.jpg' alt=''>";
    document.querySelector("#sectionune").innerHTML = "<img id='capture' src='images/Discussion_Anglais.jpg' alt=''>";
    document.querySelector("#sectiontrois").innerHTML = "<img id='capture' src='images/Actus_Anglais.jpg' alt=''>";
}

function français() {
    document.querySelector("#accueil").innerText = "Découvrez Popple.";
    document.querySelector("#licontact").innerHTML = "<a href='contact/contact-french.html' id='contact2'>Contact</a>";
    document.querySelector("#licontact2").innerHTML = "<a href='contact/contact-french.html' id='contact2'>Contact</a>";
    document.querySelector(".navfooter").innerHTML = "<ul class='ulfooter'><li class='lititrefooter' id='t1'><strong>Entreprise</strong></li><hr><li class='lifooter'>Popple Inc.</li><li class='lifooter'>Carrières</li></ul><ul class='ulfooter'><li class='lititrefooter' id='t2'><strong>Communauté</strong></li><hr><li class='lifooter'>Règles communautaires</li><li class='lifooter'>Centre de sécurité</li></ul><ul class='ulfooter'><li class='lititrefooter' id='t3'><strong>Publicité</strong></li><hr><li class='lifooter'><a href='download/Advertising Policies.pdf' id='liens'>Politique relative à la publicité</a></li><li class='lifooter'><a href='download/Political Ads Library.pdf' id='liens'>Bibliothèque des publicités politiques</a></li><li class='lifooter'><a href='download/Brand Guidelines.pdf' id='liens'>Charte de la marque</a></li></ul><ul class='ulfooter'><li class='lititrefooter' id='t4'><strong>Juridique</strong></li><hr><li class='lifooter'><a href='download/Advertising Policies.pdf' id='liens'>Centre de Confidentialité</a></li><li class='lifooter'><a href='download/Advertising Policies.pdf' id='liens'>Politique relative aux cookies</a></li><li class='lifooter'><a href='download/Advertising Policies.pdf' id='liens'>Gestion des cookies</a></li><li class='lifooter'><a href='download/Advertising Policies.pdf' id='liens'>Conditions générales des outils créatifs personnalisés</a></li><li class='lifooter'><a href='download/Advertising Policies.pdf' id='liens'>Conditions générales des Geofilters communautaires</a></li></ul>";
    document.querySelector("#telechargerdeux2").innerText = "Télécharger";
    document.querySelector("#telechargerdeux").innerText = "Télécharger";
    document.querySelector(".langage2_1").innerText = "Langue :";
    document.querySelector("#para").innerText = "Partagez vos meilleures découvertes avec vos amis !";
    document.querySelector("#paradeux").innerText = "Découvrez les nouveautés de la semaine !";
    document.querySelector("#paratrois").innerText = "Vous avez aimé un film ? Partagez votre avis !";
    document.querySelector("#ambiance").innerHTML = "C'est ambiance culture !";
    document.querySelector("#sectiondeux").innerHTML = "<img id='capturedeux' src='images/interface deux.jpg' alt=''>";
    document.querySelector("#sectionune").innerHTML = "<img id='capture' src='images/Version_2.jpg' alt=''>";
    document.querySelector("#sectiontrois").innerHTML = "<img id='capture' src='images/Actus.png' alt=''>";
}

function deutsch() {
    document.querySelector("#accueil").innerText = "Entdecken Popple.";
    document.querySelector("#licontact").innerHTML = "<a href='contact/contact-deutsch.html' id='contact2'>Kontakt</a>";
    document.querySelector("#licontact2").innerHTML = "<a href='contact/contact-deutsch.html' id='contact2'>Kontakt</a>";
    document.querySelector(".navfooter").innerHTML = "<ul class='ulfooter'><li class='lititrefooter' id='t1'><strong>Firma</strong></li><hr><li class='lifooter'>Popple Inc.</li><li class='lifooter'>Karriere</li></ul><ul class='ulfooter'><li class='lititrefooter' id='t2'><strong>Gemeinschaft</strong></li><hr><li class='lifooter'>Gemeinschaftsvorschriften</li><li class='lifooter'>Sicherheitszentrum</li></ul><ul class='ulfooter'><li class='lititrefooter' id='t3'><strong>Werbung</strong></li><hr><li class='lifooter'><a href='download/Advertising Policies.pdf' id='liens'>Sicherheitspolitik</a></li><li class='lifooter'><a href='download/Political Ads Library.pdf' id='liens'>Bibliothek für politische Werbungen</a></li><li class='lifooter'><a href='download/Brand Guidelines.pdf' id='liens'>Marken-Charta</a></li></ul><ul class='ulfooter'><li class='lititrefooter' id='t4'><strong>Rechtliche Bestimmungen</strong></li><hr><li class='lifooter'><a href='download/Advertising Policies.pdf' id='liens'>Vertraulichkeitsstelle</a></li><li class='lifooter'><a href='download/Advertising Policies.pdf' id='liens'>Cookie-Richtlinie</a></li><li class='lifooter'><a href='download/Advertising Policies.pdf' id='liens'>Verwaltung von Cookies</a></li><li class='lifooter'><a href='download/Advertising Policies.pdf' id='liens'>Allgemeine Bedingungen für personalisierte Kreativwerkzeuge</a></li><li class='lifooter'><a href='download/Advertising Policies.pdf' id='liens'>Allgemeine Bedingungen für Gemeinschaftgeofilter</a></li></ul>";
    document.querySelector("#telechargerdeux2").innerText = "Herunterladen";
    document.querySelector("#telechargerdeux").innerText = "Herunterladen";
    document.querySelector(".langage2_1").innerText = "Sprache :";
    document.querySelector("#para").innerText = "Teile deine besten Entdeckungen mit deinen Freunden!";
    document.querySelector("#paradeux").innerText = "Entdecken Sie die Neuheiten der Woche!";
    document.querySelector("#paratrois").innerText = "Bleiben Sie auf dem Laufenden!";
    document.querySelector("#ambiance").innerHTML = "Es ist Kulturatmosphäre!";
    document.querySelector("#sectiondeux").innerHTML = "<img id='capturedeux' src='images/Accueil_Allemand.jpg' alt=''>";
    document.querySelector("#sectionune").innerHTML = "<img id='capture' src='images/Discussion_Allemand.jpg' alt=''>";
    document.querySelector("#sectiontrois").innerHTML = "<img id='capture' src='images/Actus_Allemand.jpg' alt=''>";
}

document.querySelector("option#english").addEventListener("click", anglais);
document.querySelector("option#français").addEventListener("click", français);
document.querySelector("option#deutsch").addEventListener("click", deutsch);

document.querySelector("option#english2").addEventListener("click", anglais);
document.querySelector("option#français2").addEventListener("click", français);
document.querySelector("option#deutsch2").addEventListener("click", deutsch);

