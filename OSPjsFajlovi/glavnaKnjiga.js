let modalGlavnaKnjiga = document.getElementById("modalGlavnaKnjiga");
document.getElementById("dugmeGlavnaKnjiga").addEventListener('click', prikaziModalGlavnaKnjiga);
document.getElementById("dugmeIzadjiIzGlavnaKnjiga").addEventListener('click', skloniModalGlavnaKnjiga);


function prikaziModalGlavnaKnjiga() {
    modalGlavnaKnjiga.style.display = 'none'
    if (modalGlavnaKnjiga.style.display == "none") {
        modalGlavnaKnjiga.style.display = "block";
        blokiranjeDugmica("dugmeRokovnik", "dugmeKalendar", "dugmeKontakt");
    }
}
function skloniModalGlavnaKnjiga() {
    if (modalGlavnaKnjiga.style.display == "block") {
        modalGlavnaKnjiga.style.display = "none";
        odBlokirajDugmice("dugmeRokovnik", "dugmeKalendar", "dugmeKontakt");
    }
}