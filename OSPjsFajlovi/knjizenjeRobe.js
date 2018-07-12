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
let dugmeDodajProizvod=document.getElementById('dugmeDodajProizvod');
proizvodi={};
function sacuvajProizvodULocalStorage() {
    dugmeDodajProizvod.addEventListener('click',(event)=>{
        event.preventDefault();
        let knjizenjeRobeForma=document.getElementById('knjizenjeRobeForma'),
            sifraProizvoda=document.getElementById('sifraProizvoda').value,
            nazivProizvoda=document.getElementById('nazivProizvoda').value,
            kolicinaProizvoda=document.getElementById('kolicinaProizvoda').value,
            opisProizvoda=document.getElementById('opisProizvod').value,
            proizvodi=localStorage.getItem("knjizenjeProizvoda") !== null ? JSON.parse(localStorage.getItem("knjizenjeProizvoda")) : {};
            if (sifraProizvoda==="") {
                alert('Šifra proizvoda je obavezna !')
                return;
            }
            if (nazivProizvoda==="") {
                alert('Naziv proizvoda je obavezan !')
                return;
            }
        let noviProizvodi={
            sifra: sifraProizvoda,
            naziv: nazivProizvoda,
            kolicina:kolicinaProizvoda,
            opis: opisProizvoda
        };

        proizvodi[sifraProizvoda]=noviProizvodi
        setToLocalStorage('knjizenjeProizvoda',proizvodi);
        alert('Uspešno ste dodali novi proizvod');
        prikazSacuvanihProizvoda();
        knjizenjeRobeForma.reset();
    })
   
}
sacuvajProizvodULocalStorage();

function prikazSacuvanihProizvoda() {
    let prikazIzFormeKnjizenje=document.getElementById('prikazIzFormeKnjizenje'),
        robaIzLocalStorage=localStorage.getItem('knjizenjeProizvoda');
        if (robaIzLocalStorage==null) {
            proizvodi={}
        }else{
            proizvodi=JSON.parse(robaIzLocalStorage);
            console.log(proizvodi);
        }
        let knjizenjeRobeStavkeHTML = '<ul id="lista">';
        for (let kljucKnjizenjeRobe in proizvodi) {
            knjizenjeRobeStavkeHTML += `<li id="knjizenjeRobestavkaID${kljucKnjizenjeRobe}">${kljucKnjizenjeRobe}<em id="dugmeIzbrisiID${kljucKnjizenjeRobe}" onclick="izbrisiProizvod(event)">izbrisi</em><em id="dugmeIzmeniID${kljucKnjizenjeRobe}" onclick="izmeniProizvod(event)">izmeni</em></li>`;  
           
           
        }
        knjizenjeRobeStavkeHTML += '</ul>';
        prikazIzFormeKnjizenje.innerHTML=knjizenjeRobeStavkeHTML;
    
}
prikazSacuvanihProizvoda();
function izbrisiProizvod(event) {
    event.preventDefault();
    robaIzLocalStorage=getFromLocalStorage('knjizenjeProizvoda');
    let kljucSacuvanogProizvoda=event.target.id.substring(14);
     delete robaIzLocalStorage[kljucSacuvanogProizvoda] 
     localStorage.setItem('knjizenjeProizvoda',JSON.stringify(robaIzLocalStorage));
     prikazSacuvanihProizvoda();
}
function izmeniProizvod(event) {
    event.preventDefault();
    robaIzLocalStorage=getFromLocalStorage('knjizenjeProizvoda');
    let kljucSacuvanogProizvoda=event.target.id.substring(13),
        izvucenoIzObjekta=robaIzLocalStorage[kljucSacuvanogProizvoda];
        delete robaIzLocalStorage[kljucSacuvanogProizvoda];
        localStorage.setItem('knjizenjeProizvoda',JSON.stringify(robaIzLocalStorage));
    let sifraProizvodaIzvucena=izvucenoIzObjekta.sifra,
        nazivProizvodaIzvucen=izvucenoIzObjekta.naziv,
        kolicinaProizvodaIzvucena=izvucenoIzObjekta.kolicina,
        opisProizvodaIzvucen=izvucenoIzObjekta.opis;
        
        document.getElementById('sifraProizvoda').value=sifraProizvodaIzvucena;
        document.getElementById('nazivProizvoda').value=nazivProizvodaIzvucen;
        document.getElementById('kolicinaProizvoda').value=kolicinaProizvodaIzvucena;
        document.getElementById('opisProizvod').value=opisProizvodaIzvucen;

        prikazSacuvanihProizvoda();

}