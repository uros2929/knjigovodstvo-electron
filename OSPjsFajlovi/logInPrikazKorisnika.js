function getFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}
function prikaziPodatkeKorisnika() {
    let PodatciUlogovanogKorisnika = document.getElementById("PodatciUlogovanogKorisnika");
    PodatciUlogovanogKorisnika.innerHTML = getFromLocalStorage("Ulogovani korisnik");
}
prikaziPodatkeKorisnika();
let odjaviSeDugme=document.getElementById("logoutDugme");
function odjaviSe() {
    odjaviSeDugme.addEventListener("click",(event)=>{
        event.preventDefault();
        localStorage.removeItem("Ulogovani korisnik");  
        location.href="OSPbyUM-PrijaviSe.html";
    })
}
odjaviSe();
