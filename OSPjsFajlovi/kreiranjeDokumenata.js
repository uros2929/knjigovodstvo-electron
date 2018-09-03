let modalKreiranjeDokumenata = document.getElementById("modalKreiranjeDokumenata"),
    dugmeKreiranjeDokumenata = document.getElementById("dugmeKreiranjeDokumenata"),
    dugmeIzadjiIzKreiranjeDokumenata = document.getElementById("dugmeIzadjiIzKreiranjeDokumenata");
prikaziModalMain(dugmeKreiranjeDokumenata, modalKreiranjeDokumenata)
dugmeIzadjiIzKreiranjeDokumenata.addEventListener('click', (event) => {
    event.preventDefault();
    if (modalKreiranjeDokumenata.style.display == "block") {
        modalKreiranjeDokumenata.style.display = "none";
        odBlokirajDugmice("dugmeRokovnik", "dugmeKalendar", "dugmeKontakt");
        location.reload();
    }
})
let sistemDokumenata = require('fs'),
    dugmeSacuvajDokument = document.getElementById('sacuvajDokument');
function cuvanjeDokumenta() {
    dugmeSacuvajDokument.addEventListener('click', (event) => {
        event.preventDefault();
        let tekstKreiranogDokumenta = document.getElementById('tekstKreiranogDokumenta').value;
        let nazivDokumenta = document.getElementById('nazivDokumenta').value;
        let nazivDokumentaSacuvanog = `kreiranaDokumenta/${nazivDokumenta}.txt`;
        let proveraNazivaDokumenta = sistemDokumenata.existsSync(`kreiranaDokumenta/${nazivDokumenta}.txt`);
        if (tekstKreiranogDokumenta == "") {
            alert('Upišite tekst novog dokumenta !');
            return ;
         }
         if (nazivDokumenta == "") {
             alert('Upišite naziv dokumenta !');
             return;
         }
        if (proveraNazivaDokumenta === true) {
            let potvrda = confirm('Upisali ste postojeće ime dokumenta ! Ako želite da zamenite stari tekst dokumenta sa trenutnim tekstom,potvrdite');
            if (potvrda == true) {
                alert('Uspešno ste promenili tekst starog dokumenta')
            } else {
                alert('Promenite ime dokumenta !');
                return;
            }
        }
        sistemDokumenata.writeFile(nazivDokumentaSacuvanog, tekstKreiranogDokumenta, "utf-8", (error) => {
            if (error) {
                return console.log(error);
            }
         
            alert("Dokument uspešno sačuvan !");
        });

    })
}
cuvanjeDokumenta();


let otvoriSacuvanaDokumenta = document.getElementById('otvoriSacuvanaDokumenta');
let app = require('electron').remote;
let dialog = app.dialog;
function otvoriDokumenta() {
    otvoriSacuvanaDokumenta.addEventListener('click', (event) => {
        event.preventDefault();
        dialog.showOpenDialog((imeFajla) => {
            if (imeFajla === undefined) {
                console.log('Greška!')
            } else {
                readFile(imeFajla[0]);
            }
        })
    })
}
otvoriDokumenta();

function readFile(filepath) {
    let fileIspis = sistemDokumenata.readFileSync(filepath, "utf-8")
    let tekstKreiranogDokumentaCitanje = document.getElementById('tekstKreiranogDokumenta');
    tekstKreiranogDokumentaCitanje.innerHTML = fileIspis;
}


