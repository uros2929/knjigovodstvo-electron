let modalNabavka = document.getElementById("modalNabavka"),
    dugmeNabavka = document.getElementById("dugmeNabavka"),
    dugmeIzadjiIzNabavka = document.getElementById("dugmeIzadjiIzNabavka");
prikaziModalMain(dugmeNabavka, modalNabavka)
skloniModalMain(dugmeIzadjiIzNabavka, modalNabavka)

let dobavljaci = {};
let ispisEmailaDobavljaca = document.getElementById("ispisEmailaDobavljaca");
function postaviUlocalDobavljace() {
    kontaktSaDobavljacima.addEventListener("submit", (event) => {
        event.preventDefault();
        let emailDobavljaca = document.getElementById("emailDobavljaca").value;
        let kljucDobavljaca = emailDobavljaca;
        dobavljaci = localStorage.getItem("Dobavljaci") !== null ? JSON.parse(localStorage.getItem("Dobavljaci")) : {};
        if (emailDobavljaca === "") {
            alert("Upisi novog dobavljaca!")
        } else {
            dobavljaci[kljucDobavljaca] = emailDobavljaca;
            setToLocalStorage("Dobavljaci", dobavljaci);
            ispisDobavljacaNaStranicu();
            event.target.reset();
        }
    })
}
postaviUlocalDobavljace();
function ispisDobavljacaNaStranicu() {
    let dobavljaciIzLocala = localStorage.getItem("Dobavljaci");
    if (dobavljaciIzLocala === null) {
        dobavljaci = {};
    } else {
        dobavljaci = JSON.parse(dobavljaciIzLocala);
    }
    let prikazDobavljacaHTML = '<ul id="prikazDobavljaca">';
    for (let kljucDobavljaca in dobavljaci) {
        prikazDobavljacaHTML += `<li id="dobavljaciID"><a href="mailto:${dobavljaci[kljucDobavljaca]}"title="Pošalji mail dobavljaču">${dobavljaci[kljucDobavljaca]}</a><button id="izbrisiDobavljaca${dobavljaci[kljucDobavljaca]}" onClick="dugmeIzbrisiCekiraneDobavljace(event)">Izbriši dobavljača</button></li>`;
    }
    prikazDobavljacaHTML += '</ul>'
    ispisEmailaDobavljaca.innerHTML = prikazDobavljacaHTML;

}
ispisDobavljacaNaStranicu();
function dugmeIzbrisiCekiraneDobavljace(event) {
    event.preventDefault();
    let potvrda = confirm("Da li ste sigurni ?")
    if (potvrda == true) {
        let izvuceno = getFromLocalStorage('Dobavljaci');
        delete izvuceno[event.target.id.substring(17)];
        localStorage.setItem("Dobavljaci", JSON.stringify(izvuceno));
        ispisDobavljacaNaStranicu();
    }
}


