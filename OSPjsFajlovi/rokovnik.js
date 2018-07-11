let modalRokovnik = document.getElementById("modalRokovnik");
document.getElementById("dugmeRokovnik").addEventListener('click', prikaziModalRokovnik);
document.getElementById("dugmeIzadjiIzRokovnika").addEventListener('click', skloniModalRokovnik);

function prikaziModalRokovnik(event) {
    event.preventDefault();
    modalRokovnik.style.display = 'none'
    if (modalRokovnik.style.display == "none") {
        modalRokovnik.style.display = "block";
        blokiranjeDugmica("dugmeDigitron","dugmeKalendar","dugmeGlavnaKnjiga","dugmeNabavka","dugmeAnalitikaRacuna","dugmeDokumenta","dugmeKreiranjeDokumenata","dugmeKnjizenjeRobe","dugmeKontakt");
    }
}
function skloniModalRokovnik(event) {
    event.preventDefault();
    if (modalRokovnik.style.display == "block") {
        modalRokovnik.style.display = "none";
        odBlokirajDugmice("dugmeDigitron","dugmeKalendar","dugmeGlavnaKnjiga","dugmeNabavka","dugmeAnalitikaRacuna","dugmeDokumenta","dugmeKreiranjeDokumenata","dugmeKnjizenjeRobe","dugmeKontakt");
    }
}


let rokovnikForma = document.getElementById("rokovnikForma"),
    izbrisiSveIzRokovnika = document.getElementById("izbrisiRokovnik"),
    rokovnikStavke = {};
prikaziStavkeUHtml();
izbrisSveStavkeIzRokovnika();
function postaviULocal() {
    rokovnikForma.addEventListener("submit", (event) => {
        event.preventDefault();
        let tekst = document.getElementById("upisObaveza").value;
        rokovnikStavke = localStorage.getItem("RokovnikStavke") !== null ? JSON.parse(localStorage.getItem("RokovnikStavke")) : {};
        kljucRokovnikStavke=tekst;
        if (tekst === "") {
            alert("Upisi obavezu!")
    }   else {
        rokovnikStavke[kljucRokovnikStavke] = tekst;
        setToLocalStorage("RokovnikStavke", rokovnikStavke);
        ispisDobavljacaNaStranicu();
        prikaziStavkeUHtml();
        event.target.reset();
    }})
}
postaviULocal();

function prikaziStavkeUHtml() {
    let rokovnikStavkePosleReload = localStorage.getItem("RokovnikStavke");
    if (rokovnikStavkePosleReload === null) {
         rokovnikStavke = {};
    } else {
        rokovnikStavke = JSON.parse(rokovnikStavkePosleReload);
    }
    let rokovnikStavkeHTML = '<ul id="lista">';
    for (let kljucRokovnikStavke in rokovnikStavke) {
        rokovnikStavkeHTML += `<li id="stavkaID${rokovnikStavke[kljucRokovnikStavke]}">${rokovnikStavke[kljucRokovnikStavke]}<em id="dugmeIzbrisiID${rokovnikStavke[kljucRokovnikStavke]}" onclick="izbrisiObavezu(event)">izbrisi</em><em id="dugmeIzmeniID${rokovnikStavke[kljucRokovnikStavke]}" onclick="izmeniObavezu(event)">izmeni</em></li>`; 
    }
    rokovnikStavkeHTML += '</ul>';
    document.getElementById("mainRokovnik").innerHTML = rokovnikStavkeHTML;
}
function izbrisSveStavkeIzRokovnika() {
    izbrisiSveIzRokovnika.addEventListener("click", (event) => {
        event.preventDefault();
        let potvrda = confirm("Da li ste sigurni")
        if (potvrda = true) {
            removeFromLocalStorage("RokovnikStavke");
            prikaziStavkeUHtml();
        }
    })

}
function izbrisiObavezu(event) {
    event.preventDefault();
    izvucenRokovnikIzLocala=getFromLocalStorage('RokovnikStavke');
    delete izvucenRokovnikIzLocala[event.target.id.substring(14)];
    localStorage.setItem('RokovnikStavke',JSON.stringify(izvucenRokovnikIzLocala));
    prikaziStavkeUHtml();
}

function izmeniObavezu(event) {
    event.preventDefault()
    let tekstEdit= document.getElementById("upisObaveza");
    izvucenRokovnikIzLocala=getFromLocalStorage('RokovnikStavke');
    tekstEdit.value=event.target.id.substring(13);
    delete izvucenRokovnikIzLocala[event.target.id.substring(13)]; 
    localStorage.setItem('RokovnikStavke',JSON.stringify(izvucenRokovnikIzLocala));
    prikaziStavkeUHtml();
    }







