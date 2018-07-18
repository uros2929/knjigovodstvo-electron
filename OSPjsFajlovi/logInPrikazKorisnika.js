function prikaziPodatkeKorisnika() {
    let PodatciUlogovanogKorisnika = document.getElementById("PodatciUlogovanogKorisnika");
    PodatciUlogovanogKorisnika.innerHTML = getFromLocalStorage("Ulogovani korisnik");
    let PodatciUlogovanogKorisnikaImeiPrezime = document.getElementById('PodatciUlogovanogKorisnikaImeiPrezime'),
        ulogovaniKorisnik = localStorage.getItem("Ulogovani korisnik") !== null ? JSON.parse(localStorage.getItem("Ulogovani korisnik")) : {},
        podaciUlogovanihKorisnika = localStorage.getItem("Korisnici") !== null ? JSON.parse(localStorage.getItem("Korisnici")) : {};
    PodatciUlogovanogKorisnikaImeiPrezime.innerHTML += "<br>" + podaciUlogovanihKorisnika[ulogovaniKorisnik].imeKorisnika;
    PodatciUlogovanogKorisnikaImeiPrezime.innerHTML += " " + podaciUlogovanihKorisnika[ulogovaniKorisnik].prezimeKorisnika;
}
prikaziPodatkeKorisnika();
let odjaviSeDugme = document.getElementById("logoutDugme");
function odjaviSe() {
    odjaviSeDugme.addEventListener("click", (event) => {
        event.preventDefault();
        localStorage.removeItem("Ulogovani korisnik");
        location.href = "OSPbyUM-PrijaviSe.html";
    })
}
odjaviSe();
