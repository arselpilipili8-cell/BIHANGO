async function lireLDR() {
    try {
        const reponse = await fetch("http://192.168.79.163/ldr");
        const valeur = await reponse.text();

        document.getElementById("ldr").textContent = valeur;
    } catch (erreur) {
        document.getElementById("ldr").textContent = "ESP32 déconnecté";
        console.log(erreur);
    }
}

setInterval(lireLDR, 1000);

lireLDR();
