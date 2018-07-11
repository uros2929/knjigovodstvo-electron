let modalDigitron = document.getElementById("modalDigitron");
document.getElementById("dugmeDigitron").addEventListener('click', prikaziModalDigitron);
document.getElementById("dugmeIzadjiIzDigitrona").addEventListener('click', skloniModalDigitron);
function prikaziModalDigitron() {
    modalDigitron.style.display = 'none'
    if (modalDigitron.style.display == "none") {
        modalDigitron.style.display = "block";
        blokiranjeDugmica("dugmeRokovnik","dugmeKalendar","dugmeKontakt");
    }
}
function skloniModalDigitron() {
    if (modalDigitron.style.display == "block") {
        modalDigitron.style.display = "none";
        odBlokirajDugmice("dugmeRokovnik","dugmeKalendar","dugmeKontakt");
    }
}

let prikazIskucanihBrojeva = document.getElementById("prikazIskucanihBrojeva"),
    reset = document.getElementById("reset"),
    otvorenaZagrada = document.getElementById("otvorenaZagrada"),
    zatvorenaZagrada = document.getElementById("zatvorenaZagrada"),
    brojJedan = document.getElementById("brojJedan"),
    brojDva = document.getElementById("brojDva"),
    brojTri = document.getElementById("brojTri"),
    operacijaSabiranje = document.getElementById("operacijaSabiranje"),
    brojCetiri = document.getElementById("brojCetiri"),
    brojPet = document.getElementById("brojPet"),
    brojSest = document.getElementById("brojSest"),
    operacijaOduzimanje = document.getElementById("operacijaOduzimanje"),
    brojSedam = document.getElementById("brojSedam"),
    brojOsam = document.getElementById("brojOsam"),
    brojDevet = document.getElementById("brojDevet"),
    operacijaMnozenje = document.getElementById("operacijaMnozenje"),
    brojNula = document.getElementById("brojNula"),
    brojTacka = document.getElementById("brojTacka"),
    jednako = document.getElementById("jednako"),
    operacijaDeljenje = document.getElementById("operacijaDeljenje");

prikazBrojevaNaEkranuFunkcija(otvorenaZagrada); prikazBrojevaNaEkranuFunkcija(zatvorenaZagrada); prikazBrojevaNaEkranuFunkcija(brojJedan); prikazBrojevaNaEkranuFunkcija(brojDva); prikazBrojevaNaEkranuFunkcija(brojTri); prikazBrojevaNaEkranuFunkcija(operacijaSabiranje); prikazBrojevaNaEkranuFunkcija(brojCetiri); prikazBrojevaNaEkranuFunkcija(brojPet), prikazBrojevaNaEkranuFunkcija(brojSest); prikazBrojevaNaEkranuFunkcija(operacijaOduzimanje); prikazBrojevaNaEkranuFunkcija(brojSedam); prikazBrojevaNaEkranuFunkcija(brojOsam); prikazBrojevaNaEkranuFunkcija(brojDevet); prikazBrojevaNaEkranuFunkcija(operacijaMnozenje); prikazBrojevaNaEkranuFunkcija(brojNula); prikazBrojevaNaEkranuFunkcija(brojTacka); prikazBrojevaNaEkranuFunkcija(operacijaDeljenje);
izbrisiPrikazaneBrojeve();


function prikazBrojevaNaEkranuFunkcija(dugmeDigitronParametar) {
    dugmeDigitronParametar.addEventListener("click", (event) => {
        event.preventDefault();
        prikazIskucanihBrojeva.value += dugmeDigitronParametar.value;
        racunanje();
    })
}
function izbrisiPrikazaneBrojeve() {
    reset.addEventListener("click", (event) => {
        event.preventDefault();
        prikazIskucanihBrojeva.value = "";
    })
}

function racunanje() {
    let rezultat = prikazIskucanihBrojeva.value;
    jednako.addEventListener('click', (event) => {
        event.preventDefault();
       return prikazIskucanihBrojeva.value=eval(rezultat); // eval radi sa stringovima, probao i sa JSON.stringify. pobrljavi ! xD
    })
    
} 




