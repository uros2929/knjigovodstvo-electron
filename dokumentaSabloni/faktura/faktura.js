
let tabelaBody = document.getElementById("tabelaBody"),
    dugmeDodajRed = document.getElementById("dugmeDodajRed"),
    dugmeResetujFakturu = document.getElementById("resetujFakturu"),
    dugmeStampajFakturu = document.getElementById("stampajFakturu"),
    dugmeSacuvajFakturu = document.getElementById("sacuvajFakturu");
let broj = 2;
dugmeDodajRed.addEventListener("click", (event) => {
    event.preventDefault();
    tabelaBody.innerHTML += `<tr><td class='broj'>${broj}</td><td class='tabelaKolicina'><input type='text' placeholder='Količina'></td><td class='tabelaOpis'><input type='text' class='opisInput' placeholder='Unesite opis'></td><td class='tabelaCena'><input type='text' placeholder='Unesite cenu'></td><td class='tabelaCena'><input type='text' placeholder='Unesite ukupan iznos'></td></tr>`
    ++broj;
    if (broj === 22) {
        alert("Uneli ste maksimalan broj artikala!");
        dugmeDodajRed.disabled = true;
        dugmeDodajRed.style = "background-color: rgb(63,63,66);border-color: rgb(255, 85, 0);"
    }
});
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







