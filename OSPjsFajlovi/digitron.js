let modalDigitron = document.getElementById("modalDigitron"),
    dugmeDigitron = document.getElementById("dugmeDigitron"),
    dugmeIzadjiIzDigitrona = document.getElementById("dugmeIzadjiIzDigitrona");
prikaziModalMain(dugmeDigitron, modalDigitron);
skloniModalMain(dugmeIzadjiIzDigitrona, modalDigitron);

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
    jednako.addEventListener('click', (event) => {
        event.preventDefault();
        let novRezultat = "n/a";
        try {
            novRezultat = eval(prikazIskucanihBrojeva.value)
        } catch (error) {

        }
        if (novRezultat !== "n/a") {
            prikazIskucanihBrojeva.value = novRezultat;
        }
    })
}




