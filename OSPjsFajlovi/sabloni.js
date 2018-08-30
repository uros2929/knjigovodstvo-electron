function setToLocalStorage(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
}

function getFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

function removeFromLocalStorage(key) {
    localStorage.removeItem(key);
}
function show(element) {
    element.style.display = "block"
}
function hide(element) {
    element.style.display = "none"
}
function blokiranjeDugmica(...dugme) {
    for (let id of dugme) {
        document.getElementById(id).disabled = true;
    }
}
function odBlokirajDugmice(...dugme) {
    for (let id of dugme) {
        document.getElementById(id).disabled = false;
    }
}
function prikaziModalMain(dugme, modal) {
    dugme.addEventListener('click', (event) => {
        event.preventDefault();
        modal.style.display = 'none'
        if (modal.style.display == "none") {
            modal.style.display = "block";
            blokiranjeDugmica("dugmeRokovnik", "dugmeKalendar", "dugmeKontakt");
        }
    })

}
function skloniModalMain(dugme, modal) {
    dugme.addEventListener('click', (event) => {
        event.preventDefault();
        if (modal.style.display == "block") {
            modal.style.display = "none";
            odBlokirajDugmice("dugmeRokovnik", "dugmeKalendar", "dugmeKontakt");
        }
    })
}
function stampanje(IDdivZaStampanje) { 
    let stavkeZaStampanje=document.getElementById(IDdivZaStampanje);
    document.body.innerHTML=stavkeZaStampanje.innerHTML;
    print();
    location.reload();
    
}
function setVal(vrednostID, vrednostIDJednako) {
    document.getElementById(vrednostID).value = vrednostIDJednako;
}
function getVal(vrednostID) {
    return document.getElementById(vrednostID).value;
}

function setValGlavnaKnjiga(...input) {
    for (let idBroj of input) {
        document.getElementById('brojAktiva'+idBroj).value="0";
        document.getElementById('brojPasiva'+idBroj).value="0";
        document.getElementById('textPasiva'+idBroj).value="";
        document.getElementById('textAktiva'+idBroj).value="";
    }
}

