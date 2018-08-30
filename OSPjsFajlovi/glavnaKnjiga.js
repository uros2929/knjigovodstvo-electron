let modalGlavnaKnjiga = document.getElementById("modalGlavnaKnjiga"),
    dugmeGlavnaKnjiga = document.getElementById("dugmeGlavnaKnjiga"),
    dugmeIzadjiIzGlavnaKnjiga = document.getElementById("dugmeIzadjiIzGlavnaKnjiga");
prikaziModalMain(dugmeGlavnaKnjiga, modalGlavnaKnjiga)
skloniModalMain(dugmeIzadjiIzGlavnaKnjiga, modalGlavnaKnjiga)


function ispisAktiveIPasive() {

    let ispisRezultataAktive = document.getElementById('rezultatAktiva'),
        ispisRezultataPasive = document.getElementById('rezultatPasiva'),
        sabiranjeAktive = JSON.parse(getVal('brojAktiva1')) + JSON.parse(getVal('brojAktiva2')) + JSON.parse(getVal('brojAktiva3')) + JSON.parse(getVal('brojAktiva4')) + JSON.parse(getVal('brojAktiva5')) + JSON.parse(getVal('brojAktiva6')) + JSON.parse(getVal('brojAktiva7')) + JSON.parse(getVal('brojAktiva8')) + JSON.parse(getVal('brojAktiva9')) + JSON.parse(getVal('brojAktiva10')),
        sabiranjePasive = JSON.parse(getVal('brojPasiva1')) + JSON.parse(getVal('brojPasiva2')) + JSON.parse(getVal('brojPasiva3')) + JSON.parse(getVal('brojPasiva4')) + JSON.parse(getVal('brojPasiva5')) + JSON.parse(getVal('brojPasiva6')) + JSON.parse(getVal('brojPasiva7')) + JSON.parse(getVal('brojPasiva8')) + JSON.parse(getVal('brojPasiva9')) + JSON.parse(getVal('brojPasiva10'));


    ispisRezultataAktive.innerHTML = "= " + sabiranjeAktive;
    ispisRezultataPasive.innerHTML = "= " + sabiranjePasive;

    if (sabiranjeAktive != sabiranjePasive) {
        ispisRezultataAktive.style = "color:red";
        ispisRezultataPasive.style = "color:red";
    } else {
        ispisRezultataAktive.style = "color:green";
        ispisRezultataPasive.style = "color:green";
    }



}
ispisAktiveIPasive();

function resetujGlavnuKnjigu() {
    setValGlavnaKnjiga('1', '2', '3', '4', '5', '6', '7', '8', '9', '10');
    ispisAktiveIPasive();
}


let glavnaKnjigaBilansStanja = {};
function sacuvajGlavnuKnjigu() {
    let formaPasiva = document.getElementById('formaPasiva'),
        formaAktiva = document.getElementById('formaAktiva'),
        datumBS = getVal('bsp'),
        nazivAktiva1 = getVal('textAktiva1'),
        nazivAktiva2 = getVal('textAktiva2'),
        nazivAktiva3 = getVal('textAktiva3'),
        nazivAktiva4 = getVal('textAktiva4'),
        nazivAktiva5 = getVal('textAktiva5'),
        nazivAktiva6 = getVal('textAktiva6'),
        nazivAktiva7 = getVal('textAktiva7'),
        nazivAktiva8 = getVal('textAktiva8'),
        nazivAktiva9 = getVal('textAktiva9'),
        nazivAktiva10 = getVal('textAktiva10'),
        brojAktiva1 = getVal('brojAktiva1'),
        brojAktiva2 = getVal('brojAktiva2'),
        brojAktiva3 = getVal('brojAktiva3'),
        brojAktiva4 = getVal('brojAktiva4'),
        brojAktiva5 = getVal('brojAktiva5'),
        brojAktiva6 = getVal('brojAktiva6'),
        brojAktiva7 = getVal('brojAktiva7'),
        brojAktiva8 = getVal('brojAktiva8'),
        brojAktiva9 = getVal('brojAktiva9'),
        brojAktiva10 = getVal('brojAktiva10'),
        nazivPasiva1 = getVal('textPasiva1'),
        nazivPasiva2 = getVal('textPasiva2'),
        nazivPasiva3 = getVal('textPasiva3'),
        nazivPasiva4 = getVal('textPasiva4'),
        nazivPasiva5 = getVal('textPasiva5'),
        nazivPasiva6 = getVal('textPasiva6'),
        nazivPasiva7 = getVal('textPasiva7'),
        nazivPasiva8 = getVal('textPasiva8'),
        nazivPasiva9 = getVal('textPasiva9'),
        nazivPasiva10 = getVal('textPasiva10'),
        brojPasiva1 = getVal('brojPasiva1'),
        brojPasiva2 = getVal('brojPasiva2'),
        brojPasiva3 = getVal('brojPasiva3'),
        brojPasiva4 = getVal('brojPasiva4'),
        brojPasiva5 = getVal('brojPasiva5'),
        brojPasiva6 = getVal('brojPasiva6'),
        brojPasiva7 = getVal('brojPasiva7'),
        brojPasiva8 = getVal('brojPasiva8'),
        brojPasiva9 = getVal('brojPasiva9'),
        brojPasiva10 = getVal('brojPasiva10');
    glavnaKnjigaBilansStanja = localStorage.getItem("glavnaKnjigaBilansStanja") !== null ? JSON.parse(localStorage.getItem("glavnaKnjigaBilansStanja")) : {};

    if (glavnaKnjigaBilansStanja[datumBS] !== undefined) {
        alert("Već postoji bilans za dati datum !")
        let potvrda = confirm("Ako želite da sačuvate nov bilans za dati datum potvrdite !")
        if (potvrda == false) {
            return;
        }

    }
    let noviBilansStanja = {
        nazivAktiva1: nazivAktiva1,
        brojAktiva1: brojAktiva1,
        nazivAktiva2: nazivAktiva2,
        brojAktiva2: brojAktiva2,
        nazivAktiva3: nazivAktiva3,
        brojAktiva3: brojAktiva3,
        nazivAktiva4: nazivAktiva4,
        brojAktiva4: brojAktiva4,
        nazivAktiva5: nazivAktiva5,
        brojAktiva5: brojAktiva5,
        nazivAktiva6: nazivAktiva6,
        brojAktiva6: brojAktiva6,
        nazivAktiva7: nazivAktiva7,
        brojAktiva7: brojAktiva7,
        nazivAktiva8: nazivAktiva8,
        brojAktiva8: brojAktiva8,
        nazivAktiva9: nazivAktiva9,
        brojAktiva9: brojAktiva9,
        nazivAktiva10: nazivAktiva10,
        brojAktiva10: brojAktiva10,
        nazivPasiva1: nazivPasiva1,
        brojPasiva1: brojPasiva1,
        nazivPasiva2: nazivPasiva2,
        brojPasiva2: brojPasiva2,
        nazivPasiva3: nazivPasiva3,
        brojPasiva3: brojPasiva3,
        nazivPasiva4: nazivPasiva4,
        brojPasiva4: brojPasiva4,
        nazivPasiva5: nazivPasiva5,
        brojPasiva5: brojPasiva5,
        nazivPasiva6: nazivPasiva6,
        brojPasiva6: brojPasiva6,
        nazivPasiva7: nazivPasiva7,
        brojPasiva7: brojPasiva7,
        nazivPasiva8: nazivPasiva8,
        brojPasiva8: brojPasiva8,
        nazivPasiva9: nazivPasiva9,
        brojPasiva9: brojPasiva9,
        nazivPasiva10: nazivPasiva10,
        brojPasiva10: brojPasiva10
    }
    glavnaKnjigaBilansStanja[datumBS] = noviBilansStanja
    setToLocalStorage('glavnaKnjigaBilansStanja', glavnaKnjigaBilansStanja);
    alert("Uspešno ste sačuvali Bilans Stanja");
    formaPasiva.reset();
    formaAktiva.reset();
    prikazSacuvanihBilansaStanja();
}

function prikazSacuvanihBilansaStanja() {
    let sacuvaniBS = document.getElementById('sacuvaniBS'),
        sacuvaniBSLocalStorage = localStorage.getItem('glavnaKnjigaBilansStanja');
    if (sacuvaniBSLocalStorage == null) {
        glavnaKnjigaBilansStanja = {}
    } else {
        glavnaKnjigaBilansStanja = JSON.parse(sacuvaniBSLocalStorage);
    }
    let sacuvaniBSHTML = '<ul id="listaBS">';
    for (let kljucsacuvaniBS in glavnaKnjigaBilansStanja) {
        sacuvaniBSHTML += `<li id="knjizenjeRobestavkaID${kljucsacuvaniBS}">${kljucsacuvaniBS}<em id="dugmeIzbrisiBS${kljucsacuvaniBS}" onclick="izbrisiBS(event)">izbriši</em><em id="dugmePrikaziBS${kljucsacuvaniBS}" onclick="prikaziBS(event)">prikaži</em><em id="dugmeStampajBS${kljucsacuvaniBS}" onclick="stampanjeGlavneKnjige(event)">štampaj</em></li>`;
    }
    sacuvaniBSHTML += '</ul>';
    sacuvaniBS.innerHTML = sacuvaniBSHTML;
}
prikazSacuvanihBilansaStanja();

function izbrisiBS(event) {
    event.preventDefault();
    let potvrda = confirm("Da li ste sigurni ?");
    if (potvrda == true) {
        sacuvaniBSLocalStorage = getFromLocalStorage('glavnaKnjigaBilansStanja');
        let kljucBS = event.target.id.substring(14);
        delete sacuvaniBSLocalStorage[kljucBS];
        localStorage.setItem('glavnaKnjigaBilansStanja', JSON.stringify(sacuvaniBSLocalStorage));
        prikazSacuvanihBilansaStanja();
        alert('Bilans stanja uspešno obrisan !')
    }
}

function prikaziBS(event) {
    event.preventDefault();
    sacuvaniBSLocalStorage = getFromLocalStorage('glavnaKnjigaBilansStanja');
    let kljucBS = event.target.id.substring(14),
        izvuceniBSizLocala = sacuvaniBSLocalStorage[kljucBS];
    setVal('bsp', kljucBS);
    setVal('textAktiva1', izvuceniBSizLocala.nazivAktiva1);
    setVal('textAktiva2', izvuceniBSizLocala.nazivAktiva2);
    setVal('textAktiva3', izvuceniBSizLocala.nazivAktiva3);
    setVal('textAktiva4', izvuceniBSizLocala.nazivAktiva4);
    setVal('textAktiva5', izvuceniBSizLocala.nazivAktiva5);
    setVal('textAktiva6', izvuceniBSizLocala.nazivAktiva6);
    setVal('textAktiva7', izvuceniBSizLocala.nazivAktiva7);
    setVal('textAktiva8', izvuceniBSizLocala.nazivAktiva8);
    setVal('textAktiva9', izvuceniBSizLocala.nazivAktiva9);
    setVal('textAktiva10', izvuceniBSizLocala.nazivAktiva10);
    setVal('brojAktiva1', izvuceniBSizLocala.brojAktiva1);
    setVal('brojAktiva2', izvuceniBSizLocala.brojAktiva2);
    setVal('brojAktiva3', izvuceniBSizLocala.brojAktiva3);
    setVal('brojAktiva4', izvuceniBSizLocala.brojAktiva4);
    setVal('brojAktiva5', izvuceniBSizLocala.brojAktiva5);
    setVal('brojAktiva6', izvuceniBSizLocala.brojAktiva6);
    setVal('brojAktiva7', izvuceniBSizLocala.brojAktiva7);
    setVal('brojAktiva8', izvuceniBSizLocala.brojAktiva8);
    setVal('brojAktiva9', izvuceniBSizLocala.brojAktiva9);
    setVal('brojAktiva10', izvuceniBSizLocala.brojAktiva10);
    setVal('textPasiva1', izvuceniBSizLocala.nazivPasiva1);
    setVal('textPasiva2', izvuceniBSizLocala.nazivPasiva2);
    setVal('textPasiva3', izvuceniBSizLocala.nazivPasiva3);
    setVal('textPasiva4', izvuceniBSizLocala.nazivPasiva4);
    setVal('textPasiva5', izvuceniBSizLocala.nazivPasiva5);
    setVal('textPasiva6', izvuceniBSizLocala.nazivPasiva6);
    setVal('textPasiva7', izvuceniBSizLocala.nazivPasiva7);
    setVal('textPasiva8', izvuceniBSizLocala.nazivPasiva8);
    setVal('textPasiva9', izvuceniBSizLocala.nazivPasiva9);
    setVal('textPasiva10', izvuceniBSizLocala.nazivPasiva10);
    setVal('brojPasiva1', izvuceniBSizLocala.brojPasiva1);
    setVal('brojPasiva2', izvuceniBSizLocala.brojPasiva2);
    setVal('brojPasiva3', izvuceniBSizLocala.brojPasiva3);
    setVal('brojPasiva4', izvuceniBSizLocala.brojPasiva4);
    setVal('brojPasiva5', izvuceniBSizLocala.brojPasiva5);
    setVal('brojPasiva6', izvuceniBSizLocala.brojPasiva6);
    setVal('brojPasiva7', izvuceniBSizLocala.brojPasiva7);
    setVal('brojPasiva8', izvuceniBSizLocala.brojPasiva8);
    setVal('brojPasiva9', izvuceniBSizLocala.brojPasiva9);
    setVal('brojPasiva10', izvuceniBSizLocala.brojPasiva10);
    ispisAktiveIPasive();
}

function stampanjeGlavneKnjige(event) {
    let glavnaKnjigaBilansStanjaStampanje = document.getElementById('modalGlavnaKnjiga'),
        sacuvaniBS = document.getElementById('sacuvaniBS'),
        dugmeSacuvaj = document.getElementById('sacuvajBS')
    dugmeRestartuj = document.getElementById('dugmeResetujGlavnuKnjigu'),
        dugmeIzadjiIzGlavnaKnjiga = document.getElementById('dugmeIzadjiIzGlavnaKnjiga');
    bodyZaStamapnje = document.body;
    dugmeIzadjiIzGlavnaKnjiga.style = 'display:none';
    sacuvaniBS.style = 'display:none';
    dugmeSacuvaj.style = 'display:none';
    dugmeRestartuj.style = 'display:none';
    bodyZaStamapnje.style = 'width:120%;margin-left:8%'
    bodyZaStamapnje.innerHTML = glavnaKnjigaBilansStanjaStampanje.innerHTML;
    prikaziBS(event);
    print();
    location.reload();
   
}




