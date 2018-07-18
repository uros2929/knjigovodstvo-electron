
let tabelaBody = document.getElementById("tabelaFakture"),
dugmeDodajRed = document.getElementById("dugmeDodajRed"),
dugmeResetujFakturu = document.getElementById("resetujFakturu"),
dugmeStampajFakturu = document.getElementById("stampajFakturu"),
dugmeSacuvajFakturu = document.getElementById("sacuvajFakturu"),
izbrisiRedDugme = document.getElementById('izbrisiRed'),
brojReda = document.getElementById('brojReda');

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
    if (brojReda.value==="") {
        alert('Upiši broj reda koji želiš da izbrišeš !')
        return;
    }
    tabelaBody.deleteRow(brojReda.value);
        })
    

dugmeResetujFakturu.addEventListener("click", (event) => {
event.preventDefault();
location.reload();
})
dugmeStampajFakturu.addEventListener("click", (event) => {
event.preventDefault();
alert("Stampanje!");
})
dugmeSacuvajFakturu.addEventListener("click", (event) => {
event.preventDefault();
alert("Cuvanje!")
})








