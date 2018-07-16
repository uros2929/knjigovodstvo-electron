let modalKalendar = document.getElementById("modalKalendar");
document.getElementById("dugmeKalendar").addEventListener('click', prikaziModalKalendar);
document.getElementById("dugmeIzadjiIzKalendara").addEventListener('click', skloniModalKalendar);
let textAreaKalendara = document.getElementById("textAreaKalendara");
function prikaziModalKalendar(event) {
    event.preventDefault();
    modalKalendar.style.display = 'none'
    if (modalKalendar.style.display == "none") {
        modalKalendar.style.display = "block";
        blokiranjeDugmica("dugmeDigitron", "dugmeRokovnik", "dugmeGlavnaKnjiga", "dugmeNabavka", "dugmeAnalitikaRacuna", "dugmeDokumenta", "dugmeKreiranjeDokumenata", "dugmeKnjizenjeRobe", "dugmeKontakt");
    }
}
function skloniModalKalendar(event) {
    event.preventDefault();
    if (modalKalendar.style.display == "block") {
        modalKalendar.style.display = "none";
        odBlokirajDugmice("dugmeDigitron", "dugmeRokovnik", "dugmeGlavnaKnjiga", "dugmeNabavka", "dugmeAnalitikaRacuna", "dugmeDokumenta", "dugmeKreiranjeDokumenata", "dugmeKnjizenjeRobe", "dugmeKontakt");
    }
}

let datum = new Date(),
    prviDanUGodini = datum.getDay();


let brojDanaUMesecu = "",
    prviDanUMesecu = "";
ispisKalendaraUHtml();

function ispisKalendaraUHtml() {
    trenutniDan = 0;
    if (prviDanUGodini == 0) {
        prviDanUGodini = 7;
    }
    ispis = "<div id='kalendar'>";
    for (mesec = 1; mesec <= 12; mesec++) {
        ispis += `<div id='mesec${mesec}'><div class='mesecUnutrasnji'>`;
        if (mesec == 1) {
            prviDanUMesecu = prviDanUGodini;
        }

        ispis += "<div class='dan'>pon</div><div class='dan'>uto</div><div class='dan'>sre</div>" +
            "<div class='dan'>čet</div><div class='dan'>pet</div><div class='dan'>sub</div>" +
            "<div class='dan'>ned</div>"

        for (let prazniDani = 0; prazniDani < (prviDanUMesecu - 1); prazniDani++) {
            ispis += "<div class='dan'></div>";
        }

        if (mesec == 2) {
            brojDanaUMesecu = 28;
        } else if (mesec == 4 || mesec == 6 || mesec == 9 || mesec == 11) {
            brojDanaUMesecu = 30;
        } else {
            brojDanaUMesecu = 31;
        }

        for (x = 1; x <= brojDanaUMesecu; x++) {
            ispis += `<div id='brojDana'>` + x + "</div>"
            trenutniDan++;
        }

        prviDanUMesecu = (trenutniDan + prviDanUGodini) % 7;
        if (prviDanUMesecu == 0) {
            prviDanUMesecu = 7;
        }

        ispis += "</div></div><br><br>";
    }
    ispis += "</div>"

    document.getElementById("mainKalendar").innerHTML = ispis;
};
let januarDugme = document.getElementById("januar"),
    februarDugme = document.getElementById("februar"),
    martDugme = document.getElementById("mart"),
    aprilDugme = document.getElementById("april"),
    majDugme = document.getElementById("maj"),
    junDugme = document.getElementById("jun"),
    julDugme = document.getElementById("jul"),
    avgustDugme = document.getElementById("avgust"),
    septembarDugme = document.getElementById("septembar"),
    oktobarDugme = document.getElementById("oktobar"),
    novembarDugme = document.getElementById("novembar"),
    decembarDugme = document.getElementById("decembar");
let januarPrikaz = document.getElementById("mesec1"),
    februarPrikaz = document.getElementById("mesec2"),
    martPrikaz = document.getElementById("mesec3"),
    aprilPrikaz = document.getElementById("mesec4"),
    majPrikaz = document.getElementById("mesec5"),
    junPrikaz = document.getElementById("mesec6"),
    julPrikaz = document.getElementById("mesec7"),
    avgustPrikaz = document.getElementById("mesec8"),
    septembarPrikaz = document.getElementById("mesec9"),
    oktobarPrikaz = document.getElementById("mesec10"),
    novembarPrikaz = document.getElementById("mesec11"),
    decembarPrikaz = document.getElementById("mesec12");
prikazMesecaOtvaranje(januarDugme, januarPrikaz); prikazMesecaOtvaranje(februarDugme, februarPrikaz); prikazMesecaOtvaranje(martDugme, martPrikaz); prikazMesecaOtvaranje(aprilDugme, aprilPrikaz); prikazMesecaOtvaranje(majDugme, majPrikaz); prikazMesecaOtvaranje(junDugme, junPrikaz); prikazMesecaOtvaranje(julDugme, julPrikaz); prikazMesecaOtvaranje(avgustDugme, avgustPrikaz); prikazMesecaOtvaranje(septembarDugme, septembarPrikaz); prikazMesecaOtvaranje(oktobarDugme, oktobarPrikaz); prikazMesecaOtvaranje(novembarDugme, novembarPrikaz); prikazMesecaOtvaranje(decembarDugme, decembarPrikaz);


function prikazMesecaOtvaranje(dugme, prikaz) {
    dugme.addEventListener("click", (event) => {
        event.preventDefault();
        textAreaKalendara.style.display = "block"
        if (prikaz.style.display = "none") {
            prikaz.style.display = " block";
            dugme.style.color = "red";
            blokiranjeDugmica("dugmeIzadjiIzKalendara");
        }
    })
    dugme.addEventListener("dblclick", (event) => {
        event.preventDefault();
        textAreaKalendara.style.display = "none"
        prikaz.style.display = "none";
        dugme.style.color = "white";
        odBlokirajDugmice("dugmeIzadjiIzKalendara");
    })
}

let TAlocalStorage = {};
function textAreaKalendaraCuvanjePrikaz(klikZaPrikazTArea, dugme) {
    klikZaPrikazTArea.addEventListener('click', (event) => {
        event.preventDefault();
        textAreaKalendara.innerHTML = `<textarea rows="12" id='textArea${dugme}' style='display:block;resize: none'>Upisi Obaveze</textarea>`;
        textAreaKalendara.innerHTML += `<button id="sacuvajPodatkeTextA${dugme}">Sačuvaj</button>`;
        let TAstavke=localStorage.getItem("textAreaSacuvaniTekst");
        if (TAstavke=== null) {
            for (let dugmeA = 1; dugmeA <= 12; dugmeA++) {
                let kljucKlasaTekstaVrednost = `textArea${dugmeA}`;
            TAlocalStorage[kljucKlasaTekstaVrednost] = "Upisi obaveze !";
            setToLocalStorage(`textAreaSacuvaniTekst`, TAlocalStorage);  
                
            }
         
        }else{
            TAlocalStorage=JSON.parse(TAstavke);
        }
            let kljucTA = `textArea${dugme}`;
            textAreaKalendara.innerHTML = `<textarea rows="12" id='textArea${dugme}' style='display:block;resize: none'>${TAlocalStorage[kljucTA]}</textarea>`;
            textAreaKalendara.innerHTML += `<button id="sacuvajPodatkeTextA${dugme}">Sačuvaj</button>`
          
       
        let sacuvajPodatkeTextA = document.getElementById(`sacuvajPodatkeTextA${dugme}`);
        sacuvajPodatkeTextA.addEventListener("click", (event) => {
            event.preventDefault();
            let klasaTekstaVrednost = document.getElementById(`textArea${dugme}`).value;
            let kljucKlasaTekstaVrednost = `textArea${dugme}`;
            TAlocalStorage[kljucKlasaTekstaVrednost] = klasaTekstaVrednost;
            setToLocalStorage(`textAreaSacuvaniTekst`, TAlocalStorage);

        })
        klikZaPrikazTArea.addEventListener("dblclick", (event) => {
            event.preventDefault();
            let klasaTeksta = document.getElementById(`textArea${dugme}`);
            klasaTeksta.style.display = "none";

        })
      
    })
}
textAreaKalendaraCuvanjePrikaz(januarDugme, "1"); textAreaKalendaraCuvanjePrikaz(februarDugme, "2"); textAreaKalendaraCuvanjePrikaz(martDugme, "3"); textAreaKalendaraCuvanjePrikaz(aprilDugme, "4"); textAreaKalendaraCuvanjePrikaz(majDugme, "5"); textAreaKalendaraCuvanjePrikaz(junDugme, "6"); textAreaKalendaraCuvanjePrikaz(julDugme, "7"); textAreaKalendaraCuvanjePrikaz(avgustDugme, "8"); textAreaKalendaraCuvanjePrikaz(septembarDugme, "9"); textAreaKalendaraCuvanjePrikaz(oktobarDugme, "10"); textAreaKalendaraCuvanjePrikaz(novembarDugme, "11"); textAreaKalendaraCuvanjePrikaz(decembarDugme, "12");


