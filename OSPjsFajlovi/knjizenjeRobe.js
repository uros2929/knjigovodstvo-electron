let modalKnjizenjeRobe = document.getElementById("modalKnjizenjeRobe");
document.getElementById("dugmeKnjizenjeRobe").addEventListener('click', prikaziModalKnjizenjeRobe);
document.getElementById("dugmeIzadjiIzKnjizenjeRobe").addEventListener('click', skloniModalKnjizenjeRobe);


function prikaziModalKnjizenjeRobe() {
    modalKnjizenjeRobe.style.display = 'none'
    if (modalKnjizenjeRobe.style.display == "none") {
        modalKnjizenjeRobe.style.display = "block";
        blokiranjeDugmica("dugmeRokovnik","dugmeKalendar","dugmeKontakt");
    }
}
function skloniModalKnjizenjeRobe() {
    if (modalKnjizenjeRobe.style.display == "block") {
        modalKnjizenjeRobe.style.display = "none";
        odBlokirajDugmice("dugmeRokovnik","dugmeKalendar","dugmeKontakt");
    }
}
let dugmeDodajProizvod=document.getElementById('dugmeDodajProizvod'),
    knjizenjeRobeForma=document.getElementById('knjizenjeRobeForma'),
    brojProizvoda=1;
function knjizenjeRobeNapraviInput() {
    dugmeDodajProizvod.addEventListener('click',(event)=>{
        event.preventDefault();
        knjizenjeRobeForma.innerHTML +=`  <label for="nazivProizvoda">Naziv:</label> <input type="text" name="nazivProizvoda" id="nazivProizvoda">  <label for="brojProizvod">Kolicina:</label><input type="number" name="brojProizvod" id="brojProizvod${brojProizvoda}"><br>`;
        ++brojProizvoda;
    })
}
knjizenjeRobeNapraviInput();