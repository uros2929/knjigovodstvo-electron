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

function getEBID(vrednostID) {
    return document.getElementById(vrednostID);
}

function setVal(vrednostID, vrednostIDJednako) {
    document.getElementById(vrednostID).value = vrednostIDJednako;
    if (document.getElementById(vrednostID).value === "undefined") {
        document.getElementById(vrednostID).value = "";
    }
}
function getVal(vrednostID) {
    return document.getElementById(vrednostID).value;
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
    let broj = 0;
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
        if (broj === 22) {
            alert("Uneli ste maksimalan broj artikala!");
            dugmeDodajRed.disabled = true;
            dugmeDodajRed.style = "background-color: rgb(63,63,66);border-color: rgb(255, 85, 0);"

        }
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
    dugmeDodajRed.style = "display:none";
    dugmeResetujFakturu.style = "display:none";
    dugmeStampajFakturu.style = "display:none";
    dugmeSacuvajFakturu.style = "display:none";
    print();
    location.reload();
});
function cuvanjeBrojevaIzTabele(a) {
    let x = document.querySelectorAll(a);
    let i;
    let fakturaBroj = getVal('fakturaBroj');
    let elementiZaCuvanje = [];
    for (i = 0; i < x.length; i++) {
        elementiZaCuvanje.push(x[i].value)

    }
    localStorage.setItem(fakturaBroj + a, JSON.stringify(elementiZaCuvanje))
}


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
        cuvanjeBrojevaIzTabele('.kolicinaInput');
        cuvanjeBrojevaIzTabele('.opisInput');
        cuvanjeBrojevaIzTabele('.cenaInput');
        cuvanjeBrojevaIzTabele('.ukupanIznosInput');
        alert('Uspešno sačuvana faktura !');
        prikazSacuvanihFaktura();
        fakturaPodatci.reset();
        formaPosiljaoca.reset();
        formaPrimaoca.reset();
        ukupneVrednosti.reset();
        location.reload();



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
        localStorage.removeItem(kljucSacuvaneFakture + '.kolicinaInput');
        localStorage.removeItem(kljucSacuvaneFakture + '.opisInput');
        localStorage.removeItem(kljucSacuvaneFakture + '.cenaInput');
        localStorage.removeItem(kljucSacuvaneFakture + '.ukupanIznosInput');
        prikazSacuvanihFaktura();
        alert('Faktura uspešno obrisana !')
    }

}

function izmeniFakturu(event) {
    event.preventDefault();
    let faktureIzLocala = JSON.parse(localStorage.getItem('fakture'));
    let kljucSacuvaneFakture = event.target.id.substring(14),
        izvuceneFakture = faktureIzLocala[kljucSacuvaneFakture];
    let kolicinaIzLocala = JSON.parse(localStorage.getItem(kljucSacuvaneFakture + '.kolicinaInput')),
        opisIzLocala = JSON.parse(localStorage.getItem(kljucSacuvaneFakture + '.opisInput')),
        cenaIzLocala = JSON.parse(localStorage.getItem(kljucSacuvaneFakture + '.cenaInput')),
        ukupanIznosIzLocala = JSON.parse(localStorage.getItem(kljucSacuvaneFakture + '.ukupanIznosInput'));

    for (let broj = 1; broj <= 22; broj++) {
        let red = tabelaBody.insertRow(broj);
        let celija1 = red.insertCell(0);
        celija1.innerHTML = `<div id='delred${broj}'>${broj}</div>`;
        celija1.classList.add('broj');
        celija1.setAttribute('onclick', ' izbrisiRed(event)');
        let celija2 = red.insertCell(1);
        celija2.innerHTML = `<input type='number' placeholder='Količina' id='kolicina${broj}'>`;
        celija2.classList.add('tabelaKolicina');
        let celija3 = red.insertCell(2);
        celija3.innerHTML = `<input type='text' class='opisInput' placeholder='Unesite opis' id='opis${broj}'>`;
        celija3.classList.add('tabelaOpis');
        let celija4 = red.insertCell(3);
        celija4.innerHTML = `<input type='number' placeholder='Unesite cenu' id='cena${broj}' >`;
        celija4.classList.add('tabelaCena');
        let celija5 = red.insertCell(4);
        celija5.innerHTML = `<input type='number' placeholder='Unesite ukupan iznos' id='ukupanIznos${broj}'>`;
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


    setVal('kolicina1', kolicinaIzLocala[0]);
    setVal('kolicina2', kolicinaIzLocala[1]);
    setVal('kolicina3', kolicinaIzLocala[2]);
    setVal('kolicina4', kolicinaIzLocala[3]);
    setVal('kolicina5', kolicinaIzLocala[4]);
    setVal('kolicina6', kolicinaIzLocala[5]);
    setVal('kolicina7', kolicinaIzLocala[6]);
    setVal('kolicina8', kolicinaIzLocala[7]);
    setVal('kolicina9', kolicinaIzLocala[8]);
    setVal('kolicina10', kolicinaIzLocala[9]);
    setVal('kolicina11', kolicinaIzLocala[10]);
    setVal('kolicina12', kolicinaIzLocala[11]);
    setVal('kolicina13', kolicinaIzLocala[12]);
    setVal('kolicina14', kolicinaIzLocala[13]);
    setVal('kolicina15', kolicinaIzLocala[14]);
    setVal('kolicina16', kolicinaIzLocala[15]);
    setVal('kolicina17', kolicinaIzLocala[16]);
    setVal('kolicina18', kolicinaIzLocala[17]);
    setVal('kolicina19', kolicinaIzLocala[18]);
    setVal('kolicina20', kolicinaIzLocala[19]);
    setVal('kolicina21', kolicinaIzLocala[20]);

    setVal('opis1', opisIzLocala[0]);
    setVal('opis2', opisIzLocala[1]);
    setVal('opis3', opisIzLocala[2]);
    setVal('opis4', opisIzLocala[3]);
    setVal('opis5', opisIzLocala[4]);
    setVal('opis6', opisIzLocala[5]);
    setVal('opis7', opisIzLocala[6]);
    setVal('opis8', opisIzLocala[7]);
    setVal('opis9', opisIzLocala[8]);
    setVal('opis10', opisIzLocala[9]);
    setVal('opis11', opisIzLocala[10]);
    setVal('opis12', opisIzLocala[11]);
    setVal('opis13', opisIzLocala[12]);
    setVal('opis14', opisIzLocala[13]);
    setVal('opis15', opisIzLocala[14]);
    setVal('opis16', opisIzLocala[15]);
    setVal('opis17', opisIzLocala[16]);
    setVal('opis18', opisIzLocala[17]);
    setVal('opis19', opisIzLocala[18]);
    setVal('opis20', opisIzLocala[19]);
    setVal('opis21', opisIzLocala[20]);

    setVal('cena1', cenaIzLocala[0]);
    setVal('cena2', cenaIzLocala[1]);
    setVal('cena3', cenaIzLocala[2]);
    setVal('cena4', cenaIzLocala[3]);
    setVal('cena5', cenaIzLocala[4]);
    setVal('cena6', cenaIzLocala[5]);
    setVal('cena7', cenaIzLocala[6]);
    setVal('cena8', cenaIzLocala[7]);
    setVal('cena9', cenaIzLocala[8]);
    setVal('cena10', cenaIzLocala[9]);
    setVal('cena11', cenaIzLocala[10]);
    setVal('cena12', cenaIzLocala[11]);
    setVal('cena13', cenaIzLocala[12]);
    setVal('cena14', cenaIzLocala[13]);
    setVal('cena15', cenaIzLocala[14]);
    setVal('cena16', cenaIzLocala[15]);
    setVal('cena17', cenaIzLocala[16]);
    setVal('cena18', cenaIzLocala[17]);
    setVal('cena19', cenaIzLocala[18]);
    setVal('cena20', cenaIzLocala[19]);
    setVal('cena21', cenaIzLocala[20]);

    setVal('ukupanIznos1', ukupanIznosIzLocala[0]);
    setVal('ukupanIznos2', ukupanIznosIzLocala[1]);
    setVal('ukupanIznos3', ukupanIznosIzLocala[2]);
    setVal('ukupanIznos4', ukupanIznosIzLocala[3]);
    setVal('ukupanIznos5', ukupanIznosIzLocala[4]);
    setVal('ukupanIznos6', ukupanIznosIzLocala[5]);
    setVal('ukupanIznos7', ukupanIznosIzLocala[6]);
    setVal('ukupanIznos8', ukupanIznosIzLocala[7]);
    setVal('ukupanIznos9', ukupanIznosIzLocala[8]);
    setVal('ukupanIznos10', ukupanIznosIzLocala[9]);
    setVal('ukupanIznos11', ukupanIznosIzLocala[10]);
    setVal('ukupanIznos12', ukupanIznosIzLocala[11]);
    setVal('ukupanIznos13', ukupanIznosIzLocala[12]);
    setVal('ukupanIznos14', ukupanIznosIzLocala[13]);
    setVal('ukupanIznos15', ukupanIznosIzLocala[14]);
    setVal('ukupanIznos16', ukupanIznosIzLocala[15]);
    setVal('ukupanIznos17', ukupanIznosIzLocala[16]);
    setVal('ukupanIznos18', ukupanIznosIzLocala[17]);
    setVal('ukupanIznos19', ukupanIznosIzLocala[18]);
    setVal('ukupanIznos20', ukupanIznosIzLocala[19]);
    setVal('ukupanIznos21', ukupanIznosIzLocala[20]);
    dugmeSacuvajFakturu.disabled = true;
    dugmeSacuvajFakturu.style = "background-color: rgb(63,63,66);border-color: rgb(255, 85, 0);";
    dugmeDodajRed.disabled = true;
    dugmeDodajRed.style = "background-color: rgb(63,63,66);border-color: rgb(255, 85, 0);"
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


