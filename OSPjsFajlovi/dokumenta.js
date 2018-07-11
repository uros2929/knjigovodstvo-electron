let modalDokumenta = document.getElementById("modalDokumenta");
document.getElementById("dugmeDokumenta").addEventListener('click', prikaziModalDokumenta),
document.getElementById("dugmeIzadjiIzDokumenata").addEventListener('click',skloniModalDokumenta);

function prikaziModalDokumenta() {
    modalDokumenta.style.display = 'none'
    if (modalDokumenta.style.display == "none") {
        modalDokumenta.style.display = "block";
        blokiranjeDugmica("dugmeRokovnik","dugmeKalendar","dugmeKontakt");
    }
}
function skloniModalDokumenta(event) {
    event.preventDefault();
    if (modalDokumenta.style.display == "block") {
        modalDokumenta.style.display = "none";
        odBlokirajDugmice("dugmeRokovnik","dugmeKalendar","dugmeKontakt");
    }
}