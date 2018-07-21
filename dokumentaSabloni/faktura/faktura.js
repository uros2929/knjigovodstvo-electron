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

function headerTabele() {
    header = tabelaBody.createTHead();
    redH = header.insertRow(0);
    celijaH1 = redH.insertCell(0);
    celijaH1.classList.add('tabelaBR');
    celijaH2 = redH.insertCell(1);
    celijaH2.classList.add('tabelaKolicinaH');
    celijaH3 = redH.insertCell(2);
    celijaH3.classList.add('tabelaOpisH');
    celijaH4 = redH.insertCell(3);
    celijaH4.classList.add('tabelaCenaH');
    celijaH5 = redH.insertCell(4);
    celijaH5.classList.add('tabelaCenaH');
    celijaH1.innerHTML = "BR";
    celijaH2.innerHTML = "KOLICINA";
    celijaH3.innerHTML = "OPIS";
    celijaH4.innerHTML = "CENA PO JEDINICI";
    celijaH5.innerHTML = "UKUPNO";
}
headerTabele();
function pravljenjeRedovaTabele() {
    let broj = 1;
    dugmeDodajRed.addEventListener('click', (event) => {
        event.preventDefault();
        red = tabelaBody.insertRow(broj);
        celija1 = red.insertCell(0);
        celija1.innerHTML = `${broj}`;
        celija1.classList.add('broj');
        broj++;
        celija2 = red.insertCell(1);
        celija2.innerHTML = "<input type='number' placeholder='Količina'>";
        celija2.classList.add('tabelaKolicina');
        celija3 = red.insertCell(2);
        celija3.innerHTML = "<input type='text' class='opisInput' placeholder='Unesite opis'>";
        celija3.classList.add('tabelaOpis');
        celija4 = red.insertCell(3);
        celija4.innerHTML = "<input type='text' placeholder='Unesite cenu'>";
        celija4.classList.add('tabelaCena');
        celija5 = red.insertCell(4);
        celija5.innerHTML = "<input type='text' placeholder='Unesite ukupan iznos'>";
        celija5.classList.add('tabelaCena');
        if (broj === 22) {
            alert("Uneli ste maksimalan broj artikala!");
            dugmeDodajRed.disabled = true;
            dugmeDodajRed.style = "background-color: rgb(63,63,66);border-color: rgb(255, 85, 0);"
        }
    })
}
pravljenjeRedovaTabele();

izbrisiRedDugme.addEventListener('click', (event) => {
    event.preventDefault();
    if (brojReda.value === "") {
        alert('Upiši broj reda koji želiš da izbrišeš !')
        return;
    }
    tabelaBody.deleteRow(brojReda.value);
})


dugmeResetujFakturu.addEventListener("click", (event) => {
    event.preventDefault();
    fakturaPodatci.reset();
    formaPosiljaoca.reset();
    formaPrimaoca.reset();
    ukupneVrednosti.reset();
    location.reload();
})
dugmeStampajFakturu.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Stampanje!");
})
let fakture = {};
function sacuvajFakturu() {
    dugmeSacuvajFakturu.addEventListener("click", (event) => {
        event.preventDefault();
        let fakturaBroj = document.getElementById('fakturaBroj').value,
            datum = document.getElementById('datum').value,
            imePreduzecaPosiljaoca = document.getElementById('imePreduzecaPosiljaoca').value,
            adresaPreduzeca = document.getElementById('adresaPreduzeca').value,
            telefon = document.getElementById('telefon').value,
            imePrimaoca = document.getElementById('imePrimaoca').value,
            imePreduzecaPrimaoca = document.getElementById('imePreduzecaPrimaoca').value,
            ulicaIBroj = document.getElementById('ulicaIBroj').value,
            gradDrzavaPPB = document.getElementById('gradDrzavaPPB').value,
            telefonPrimaoca = document.getElementById('telefonPrimaoca').value,
            medjuvrednosti = document.getElementById('medjuvrednosti').value,
            porezNaPromet = document.getElementById('porezNaPromet').value,
            ukupnoDugovanje = document.getElementById('ukupnoDugovanje').value,
            fakture = localStorage.getItem("fakture") !== null ? JSON.parse(localStorage.getItem("fakture")) : {};
        if (fakturaBroj === "") {
            alert('Broj fakture je obavezan !')
            return;
        }
        if (imePrimaoca === "") {
            alert('Ime primaoca je obavezno !')
            return;
        }
        if (fakture[fakturaBroj] !== undefined) {
            alert('Broj fakture već postoji !')
            let potvrda = confirm('Ako želite da izmenite datu fakturu potvrdite !')
            if (potvrda == true) {
                alert('Uspešno ste zamenili podatke iz fakture!')
            } else {
                alert('Promenite broj fakture!')
                return;
            }

        }
        novaFaktura = {
            fakturaBrojN: fakturaBroj,
            datumN: datum,
            imePreduzecaPosiljaocaN: imePreduzecaPosiljaoca,
            adresaPreduzecaN: adresaPreduzeca,
            telefonN: telefon,
            imePrimaocaN: imePrimaoca,
            imePreduzecaPrimaocaN: imePreduzecaPrimaoca,
            ulicaIBrojN: ulicaIBroj,
            gradDrzavaPPBN: gradDrzavaPPB,
            telefonPrimaocaN: telefonPrimaoca,
            medjuvrednostiN: medjuvrednosti,
            porezNaPrometN: porezNaPromet,
            ukupnoDugovanjeN: ukupnoDugovanje
        }
        fakture[fakturaBroj] = novaFaktura;
        localStorage.setItem("fakture", JSON.stringify(fakture));
        alert('Uspešno sačuvana faktura !');
        prikazSacuvanihFaktura();
        fakturaPodatci.reset();
        formaPosiljaoca.reset();
        formaPrimaoca.reset();
        ukupneVrednosti.reset();

    })
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
    let provera = confirm('Da li ste sigurni da želite da izbrišete fakturu ?')
    if (provera == true) {
        faktureIzLocala = JSON.parse(localStorage.getItem('fakture'));
        let kljucSacuvaneFakture = event.target.id.substring(14);
        delete faktureIzLocala[kljucSacuvaneFakture]
        localStorage.setItem('fakture', JSON.stringify(faktureIzLocala));
        prikazSacuvanihFaktura();
        alert('Faktura uspešno obrisana !')
    }

}
function izmeniFakturu(event) {
    event.preventDefault();
    faktureIzLocala = JSON.parse(localStorage.getItem('fakture'));
    let kljucSacuvaneFakture = event.target.id.substring(14),
        izvuceneFakture = faktureIzLocala[kljucSacuvaneFakture];
    let fakturaBrojIzvucena = izvuceneFakture.fakturaBrojN,
        datumIzvucen = izvuceneFakture.datumN,
        imePreduzecaPosiljaocaIzvuceno = izvuceneFakture.imePreduzecaPosiljaocaN,
        adresaPreduzecaIzvucena = izvuceneFakture.adresaPreduzecaN,
        telefonIzvucen = izvuceneFakture.telefonN,
        imePrimaocaIzvucen = izvuceneFakture.imePrimaocaN,
        imePreduzecaPrimaocaIzvuceno = izvuceneFakture.imePreduzecaPrimaocaN,
        ulicaIBrojIzvuceni = izvuceneFakture.ulicaIBrojN,
        gradDrzavaPPBIzvuceno = izvuceneFakture.gradDrzavaPPBN,
        telefonPrimaocaIzvucen = izvuceneFakture.telefonPrimaocaN,
        medjuvrednostiIzvucena = izvuceneFakture.medjuvrednostiN,
        porezNaPrometIzvucen = izvuceneFakture.porezNaPrometN,
        ukupnoDugovanjeIzvuceno = izvuceneFakture.ukupnoDugovanjeN;

    document.getElementById('fakturaBroj').value = fakturaBrojIzvucena;
    document.getElementById('datum').value = datumIzvucen;
    document.getElementById('imePreduzecaPosiljaoca').value = imePreduzecaPosiljaocaIzvuceno;
    document.getElementById('adresaPreduzeca').value = adresaPreduzecaIzvucena;
    document.getElementById('telefon').value = telefonIzvucen;
    document.getElementById('imePrimaoca').value = imePrimaocaIzvucen;
    document.getElementById('imePreduzecaPrimaoca').value = imePreduzecaPrimaocaIzvuceno;
    document.getElementById('ulicaIBroj').value = ulicaIBrojIzvuceni;
    document.getElementById('gradDrzavaPPB').value = gradDrzavaPPBIzvuceno;
    document.getElementById('telefonPrimaoca').value = telefonPrimaocaIzvucen;
    document.getElementById('medjuvrednosti').value = medjuvrednostiIzvucena;
    document.getElementById('porezNaPromet').value = porezNaPrometIzvucen;
    document.getElementById('ukupnoDugovanje').value = ukupnoDugovanjeIzvuceno;
    prikazSacuvanihFaktura();
}






