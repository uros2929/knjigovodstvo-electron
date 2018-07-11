
let modalAnalitikaRacuna = document.getElementById("modalAnalitikaRacuna");
document.getElementById("dugmeAnalitikaRacuna").addEventListener('click', prikaziModalAnalitikaRacuna);
document.getElementById("dugmeIzadjiIzAnalitikaRacuna").addEventListener('click', skloniModalAnalitikaRacuna);


function prikaziModalAnalitikaRacuna() {
    modalAnalitikaRacuna.style.display = 'none'
    if (modalAnalitikaRacuna.style.display == "none") {
        modalAnalitikaRacuna.style.display = "block";
        blokiranjeDugmica("dugmeRokovnik","dugmeKalendar","dugmeKontakt");
    }
}
function skloniModalAnalitikaRacuna() {
    if (modalAnalitikaRacuna.style.display == "block") {
        modalAnalitikaRacuna.style.display = "none";
        odBlokirajDugmice("dugmeRokovnik","dugmeKalendar","dugmeKontakt");
    }
}
