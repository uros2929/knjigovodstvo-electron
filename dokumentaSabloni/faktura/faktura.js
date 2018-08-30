let tabelaBody = document.getElementById("tabelaFakture"),
    dugmeDodajRed = document.getElementById("dugmeDodajRed"),
    dugmeResetujFakturu = document.getElementById("resetujFakturu"),
    dugmeStampajFakturu = document.getElementById("stampajFakturu"),
    dugmeSacuvajFakturu = document.getElementById("sacuvajFakturu"),
    izbrisiRedDugme = document.getElementById('izbrisiRed'),
    brojReda = document.getElementById('brojReda');
let fakturaPodatci = document.getElementById('fakturaPodatci'),
    formaPosiljaoca = document.getElementById('formaPosiljaoca'),
    formaPrimaoca = document.getElementById('formaPrimaoca'),
    ukupneVrednosti = document.getElementById('ukupneVrednosti');

function $(vrednostID) {
    return document.getElementById(vrednostID);
}

function setVal(vrednostID, vrednostIDJednako) {
    document.getElementById(vrednostID).value = vrednostIDJednako;
}
function getVal(vrednostID) {
    return document.getElementById(vrednostID).value;
}
function cuvanjeBrojevaIzTabele(a) {
    let x = document.querySelectorAll(a);
     for (let i = 0; i < x.length; i++) {
      console.log(x[i].value)
    
     }  
}
function headerTabele() {
    let header = tabelaBody.createTBody();
    header.setAttribute('id', 'tBody');
    let values = [
        { class: 'tabelaBR', html: '' },
        { class: 'tabelaKolicinaH', html: 'KOLICINA' },
        { class: 'tabelaOpisH', html: 'OPIS' },
        { class: 'tabelaCenaH', html: 'CENA PO JEDINICI' },
        { class: 'tabelaCenaH', html: 'UKUPNO' },
    ];
    let redH = header.insertRow(0);
    for (let val in values) {
        let celija = redH.insertCell(val);
        celija.classList.add(values[val].class);
        celija.innerHTML = values[val].html;
    }
}

headerTabele();

function pravljenjeRedovaTabele() {
    let broj = 1;
    dugmeDodajRed.addEventListener('click', (event) => {
        event.preventDefault();
        let red = tabelaBody.insertRow();
        red.setAttribute('id', `red${broj}`);
        let celija1 = red.insertCell(0);
        celija1.innerHTML = `<div id='delred${broj}'>del</div>`;
        celija1.classList.add('broj');
        celija1.setAttribute('onclick', ' izbrisiRed(event)');
        broj++;
        let celija2 = red.insertCell(1);
        celija2.innerHTML = `<input type='number' class='kolicinaInput' placeholder='Količina' id='kolicina${broj}'>`;
        celija2.classList.add('tabelaKolicina');
        let celija3 = red.insertCell(2);
        celija3.innerHTML = `<input type='text' class='opisInput' placeholder='Unesite opis' id='opis${broj}'>`;
        celija3.classList.add('tabelaOpis');
        let celija4 = red.insertCell(3);
        celija4.innerHTML = `<input type='text' class='cenaInput' placeholder='Unesite cenu' id='cena${broj}'>`;
        celija4.classList.add('tabelaCena');
        let celija5 = red.insertCell(4);
        celija5.innerHTML = `<input type='text' class='ukupanIznosInput' placeholder='Unesite ukupan iznos' id='ukupanIznos${broj}'>`;
        celija5.classList.add('tabelaCena');
        /* if (broj === 22) {
             alert("Uneli ste maksimalan broj artikala!");
             dugmeDodajRed.disabled = true;
             dugmeDodajRed.style = "background-color: rgb(63,63,66);border-color: rgb(255, 85, 0);"
         }*/
    })
}

pravljenjeRedovaTabele();

dugmeResetujFakturu.addEventListener("click", (event) => {
    event.preventDefault();
    fakturaPodatci.reset();
    formaPosiljaoca.reset();
    formaPrimaoca.reset();
    ukupneVrednosti.reset();
    location.reload();
});
dugmeStampajFakturu.addEventListener("click", (event) => {
    event.preventDefault();
    print(); 
});
let fakture = {};

function sacuvajFakturu() {
    dugmeSacuvajFakturu.addEventListener("click", (event) => {
        event.preventDefault();
        let fakturaBroj = getVal('fakturaBroj'),
            imePrimaoca = getVal('imePrimaoca'),
            fakture = localStorage.getItem("fakture") !== null ? JSON.parse(localStorage.getItem("fakture")) : {};
        if (fakturaBroj === "") {
            alert('Broj fakture je obavezan !');
            return;
        }
        if (imePrimaoca === "") {
            alert('Ime primaoca je obavezno !');
            return;
        }
        if (fakture[fakturaBroj] !== undefined) {
            alert('Broj fakture već postoji !');
            let potvrda = confirm('Ako želite da izmenite datu fakturu potvrdite !');
            if (potvrda == true) {
                alert('Uspešno ste zamenili podatke iz fakture!')
            } else {
                alert('Promenite broj fakture!');
                return;
            }

        }
        fakture[fakturaBroj] = {
            fakturaBrojN: fakturaBroj,
            datumN: getVal('datum'),
            imePreduzecaPosiljaocaN: getVal('imePreduzecaPosiljaoca'),
            adresaPreduzecaN: getVal('adresaPreduzeca'),
            telefonN: getVal('telefon'),
            imePrimaocaN: imePrimaoca,
            imePreduzecaPrimaocaN: getVal('imePreduzecaPrimaoca'),
            ulicaIBrojN: getVal('ulicaIBroj'),
            gradDrzavaPPBN: getVal('gradDrzavaPPB'),
            telefonPrimaocaN: getVal('telefonPrimaoca'),
            medjuvrednostiN: getVal('medjuvrednosti'),
            porezNaPrometN: getVal('porezNaPromet'),
            ukupnoDugovanjeN: getVal('ukupnoDugovanje'),
          


        };
        localStorage.setItem("fakture", JSON.stringify(fakture));
        alert('Uspešno sačuvana faktura !');
        prikazSacuvanihFaktura();
        fakturaPodatci.reset();
        formaPosiljaoca.reset();
        formaPrimaoca.reset();
        ukupneVrednosti.reset();
        cuvanjeBrojevaIzTabele('.kolicinaInput');
        cuvanjeBrojevaIzTabele('.opisInput');
        cuvanjeBrojevaIzTabele('.cenaInput');
        cuvanjeBrojevaIzTabele('.ukupanIznosInput');
    });
}

sacuvajFakturu();

function prikazSacuvanihFaktura() {
    let sacuvaneFakture = document.getElementById('sacuvaneFakture'),
        sacuvaneFaktureIzLocala = localStorage.getItem('fakture');
    if (sacuvaneFaktureIzLocala === null) {
        fakture = {}
    } else {
        fakture = JSON.parse(sacuvaneFaktureIzLocala);
    }
    let faktureStavkeHTML = '<ul id="listaFakture">';
    for (let kljucFakture in fakture) {
        faktureStavkeHTML += `<li id="listaFaktureID${kljucFakture}" onclick="izmeniFakturu(event)"> ${kljucFakture}<em id="izbrisiFakturu${kljucFakture}" onclick="izbrisiFakturu(event)">izbriši</em> </li>`
    }
    faktureStavkeHTML += '</ul>';
    sacuvaneFakture.innerHTML = faktureStavkeHTML;
}

prikazSacuvanihFaktura();

function izbrisiFakturu(event) {
    event.preventDefault();
    let provera = confirm('Da li ste sigurni da želite da izbrišete fakturu ?');
    if (provera == true) {
        faktureIzLocala = JSON.parse(localStorage.getItem('fakture'));
        let kljucSacuvaneFakture = event.target.id.substring(14);
        delete faktureIzLocala[kljucSacuvaneFakture];
        localStorage.setItem('fakture', JSON.stringify(faktureIzLocala));
        prikazSacuvanihFaktura();
        alert('Faktura uspešno obrisana !')
    }

}

function izmeniFakturu(event) {
    event.preventDefault();
    let faktureIzLocala = JSON.parse(localStorage.getItem('fakture'));
    let kljucSacuvaneFakture = event.target.id.substring(14),
        izvuceneFakture = faktureIzLocala[kljucSacuvaneFakture];
    for (let broj = 1; broj < 22; broj++) {
        let red = tabelaBody.insertRow(broj);
        let celija1 = red.insertCell(0);
        celija1.innerHTML = `<div id='delred${broj}'>del</div>`;
        celija1.classList.add('broj');
        celija1.setAttribute('onclick', ' izbrisiRed(event)');
        let celija2 = red.insertCell(1);
        celija2.innerHTML = `<input type='number' placeholder='Količina' id='kolicina${broj}'>`;
        celija2.classList.add('tabelaKolicina');
        let celija3 = red.insertCell(2);
        celija3.innerHTML = `<input type='text' class='opisInput' placeholder='Unesite opis' id='opis${broj}'>`;
        celija3.classList.add('tabelaOpis');
        let celija4 = red.insertCell(3);
        celija4.innerHTML = `<input type='text' placeholder='Unesite cenu' id='cena${broj}'>`;
        celija4.classList.add('tabelaCena');
        let celija5 = red.insertCell(4);
        celija5.innerHTML = `<input type='text' placeholder='Unesite ukupan iznos' id='ukupanIznos${broj}'>`;
        celija5.classList.add('tabelaCena');
    }
    setVal('fakturaBroj', izvuceneFakture.fakturaBrojN);
    setVal('datum', izvuceneFakture.datumN);
    setVal('imePreduzecaPosiljaoca', izvuceneFakture.imePreduzecaPosiljaocaN);
    setVal('adresaPreduzeca', izvuceneFakture.adresaPreduzecaN);
    setVal('telefon', izvuceneFakture.telefonN);
    setVal('imePrimaoca', izvuceneFakture.imePrimaocaN);
    setVal('imePreduzecaPrimaoca', izvuceneFakture.imePreduzecaPrimaocaN);
    setVal('ulicaIBroj', izvuceneFakture.ulicaIBrojN);
    setVal('gradDrzavaPPB', izvuceneFakture.gradDrzavaPPBN);
    setVal('telefonPrimaoca', izvuceneFakture.telefonPrimaocaN);
    setVal('medjuvrednosti', izvuceneFakture.medjuvrednostiN);
    setVal('porezNaPromet', izvuceneFakture.porezNaPrometN);
    setVal('ukupnoDugovanje', izvuceneFakture.ukupnoDugovanjeN);
    setVal('kolicina1', izvuceneFakture.kolicinaN)

    prikazSacuvanihFaktura();
}

function izbrisiRed(event) {
    event.preventDefault();
    let provera = confirm('Da li ste sigurni ?')
    let redZaBrisanje = document.getElementById(event.target.id.substring(3));
    if (provera == true) {
        redZaBrisanje.parentNode.removeChild(redZaBrisanje);
    }
}


