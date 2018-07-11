let modalKontakt = document.getElementById("modalKontakt");
document.getElementById("dugmeKontakt").addEventListener('click', prikaziModalKontakt);
document.getElementById("dugmeIzadjiIzKontakt").addEventListener('click', skloniModalKontakt);


function prikaziModalKontakt() {
    modalKontakt.style.display = 'none'
    if (modalKontakt.style.display == "none") {
        modalKontakt.style.display = "block";
        blokiranjeDugmica("dugmeDigitron", "dugmeRokovnik", "dugmeGlavnaKnjiga", "dugmeNabavka", "dugmeAnalitikaRacuna", "dugmeDokumenta", "dugmeKreiranjeDokumenata", "dugmeKnjizenjeRobe", "dugmeKalendar");
    }
}
function skloniModalKontakt() {
    if (modalKontakt.style.display == "block") {
        modalKontakt.style.display = "none";
        odBlokirajDugmice("dugmeDigitron", "dugmeRokovnik", "dugmeGlavnaKnjiga", "dugmeNabavka", "dugmeAnalitikaRacuna", "dugmeDokumenta", "dugmeKreiranjeDokumenata", "dugmeKnjizenjeRobe", "dugmeKalendar");
    }
}