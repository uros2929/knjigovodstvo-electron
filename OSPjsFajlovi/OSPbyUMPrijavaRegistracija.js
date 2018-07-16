let formaLogInSve = document.getElementById("formaLogInSve"),
    formaLogIn = document.getElementById("formaLogIn"),
    dugmeRegistujSe = document.getElementById("dugmeRegistujSe"),
    formaRegistrujSe = document.getElementById("formaRegistrujSe"),
    dugmeZaboravljenaSifra = document.getElementById("dugmeZaboravljenaSifra"),
    formaZaboravljenaSifra = document.getElementById("formaZaboravljenaSifra");
prikaziFormuZaRegistrovanje();
prkaziFormuZaZaboravljenuSifru();
postaviPodatkeKorisnikaULocal();
ulogujSeNaStranicu();
zaboravljenaSifra();
function show(element) {
    element.style.display = "block"
}
function hide(element) {
    element.style.display = "none"
}
function setToLocalStorage(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
}
function getFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}
function removeFromLocalStorage(key) {
    localStorage.removeItem(key);
}
function prikaziFormuZaRegistrovanje() {
    dugmeRegistujSe.addEventListener("click", (event) => {
        event.preventDefault();
        hide(formaLogInSve);
        hide(divZaCitat);
        show(formaRegistrujSe);
    })
}
function prkaziFormuZaZaboravljenuSifru() {
    dugmeZaboravljenaSifra.addEventListener("click", (event) => {
        event.preventDefault();
        hide(formaLogInSve)
        show(formaZaboravljenaSifra)
    })
}
function postaviPodatkeKorisnikaULocal() {
    formaRegistrujSe.addEventListener("submit", (event) => {
        event.preventDefault();
        let ime = document.getElementById("imeRegistracija").value,
            prezime = document.getElementById("prezimeRegistracija").value,
            firma = document.getElementById("firmaRegistracija").value,
            email = document.getElementById("emailRegistracija").value,
            password = document.getElementById("passwordRegistracija").value,
            potvrdiPassword = document.getElementById("potvrdiPasswordRegistracija").value,
            sifraFirme = document.getElementById("sifraFirmeRegistarcija").value,
            korisnici = localStorage.getItem("Korisnici") !== null ? JSON.parse(localStorage.getItem("Korisnici")) : {};
        if (password !== potvrdiPassword) {
            alert("Potvrda šifre nije ispravna")
            return;
        }
        let noviKorisnik = {
            imeKorisnika: ime,
            prezimeKorisnika: prezime,
            firmaKorisnika: firma,
            emailKorisnika: email,
            passwordKorisnika: password,
            sifraFirmeKorisnika: sifraFirme
        };
        korisnici[email] = noviKorisnik;
        setToLocalStorage("Korisnici", korisnici);
        alert("Uspesno ste se registrovali");
        hide(formaRegistrujSe);
        show(formaLogInSve);
    })
}
function ulogujSeNaStranicu() {
    formaLogIn.addEventListener("submit", (event) => {
        event.preventDefault();
        let email = document.getElementById("emailLog").value,
            password = document.getElementById("passLog").value,
            korisnici = localStorage.getItem("Korisnici") !== null ? getFromLocalStorage("Korisnici") : {};
        if (korisnici === {} || typeof korisnici[email] === "undefined") {
            alert("Nepostojeci korisnik")
            return;
        }
        if (korisnici[email].passwordKorisnika !== password) {
            alert("Pogrešili ste šifru")
        } else {
            setToLocalStorage("Ulogovani korisnik", email);
            location.href = "OSPbyUM.html"
        }
    })
}
function zaboravljenaSifra() {
    formaZaboravljenaSifra.addEventListener("submit", (event => {
        event.preventDefault();
        let  korisnici = localStorage.getItem("Korisnici") !== null ? getFromLocalStorage("Korisnici") : {},
            email = document.getElementById("odgovorEmail").value,
            sifraFirmeOdgovor = document.getElementById("odgovor").value,
            pokaziSifru=document.getElementById("pokaziSifru"),
            divPrikazZaboravljenjeSifre=document.getElementById("prikazZaboravljeneSifre");

        if (korisnici[email].sifraFirmeKorisnika !== sifraFirmeOdgovor ) {
            alert("Uneli ste pogresnu sifru iz firme!")
            location.reload();

        } else {
            pokaziSifru.innerHTML="Vaša šifra je:  "+korisnici[email].passwordKorisnika+"<br><br>"+"Za 5 sekundi vratićemo vas na početnu stranicu";
            divPrikazZaboravljenjeSifre.style="border: 2px rgb(255,85,0) solid;background-color: rgb(63,63,66);"
            setTimeout(() => {
              location.reload();
            }, 5000);
        }

    }))

}







