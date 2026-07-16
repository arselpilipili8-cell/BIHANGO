const ip = "http://192.168.79.163/ldr"; // Remplacer par l'adresse IP de l'ESP32

async function lireLDR(){

    try{

        const reponse = await fetch(ip);

        const valeur = await reponse.text();

        document.getElementById("value").innerHTML = valeur;

        let pourcentage=(valeur/4095)*100;

        document.getElementById("bar").style.width=pourcentage+"%";

        if(valeur<1200){

            document.getElementById("etat").innerHTML="🌞 Forte lumière";

        }

        else if(valeur<2800){

            document.getElementById("etat").innerHTML="🌤 Luminosité moyenne";

        }

        else{

            document.getElementById("etat").innerHTML="🌙 Obscurité";

        }

    }

    catch{

        document.getElementById("etat").innerHTML="ESP32 déconnecté";

    }

}

setInterval(lireLDR,1000);