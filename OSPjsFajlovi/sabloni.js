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
    let celaStranica=document.body.innerHTML;
    let stavkeZaStampanje=document.getElementById(IDdivZaStampanje);
    document.body.innerHTML=stavkeZaStampanje.innerHTML;
    print();
    document.body.innerHTML=celaStranica;
}

