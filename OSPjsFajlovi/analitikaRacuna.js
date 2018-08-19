let modalAnalitikaRacuna = document.getElementById("modalAnalitikaRacuna"),
    dugmeAnalitikaRacuna = document.getElementById("dugmeAnalitikaRacuna"),
    dugmeIzadjiIzAnalitikaRacuna = document.getElementById("dugmeIzadjiIzAnalitikaRacuna");
prikaziModalMain(dugmeAnalitikaRacuna, modalAnalitikaRacuna);
dugmeIzadjiIzAnalitikaRacuna.addEventListener('click', (event) => {
    event.preventDefault();
    if (modalAnalitikaRacuna.style.display == "block") {
        modalAnalitikaRacuna.style.display = "none";
        odBlokirajDugmice("dugmeRokovnik", "dugmeKalendar", "dugmeKontakt");
        location.reload();
    }
})

let datumAnalitika = document.getElementById('datumAnalitika'),
    stranka = document.getElementById('stranka'),
    duguje = document.getElementById('duguje'),
    potrazuje = document.getElementById('potrazuje'),
    prikazAnalitike = document.getElementById('prikazAnalitike'),
    sacuvanaAnalitika = document.getElementById('sacuvanaAnalitika'),
    dugmeSacuvajAnalitiku = document.getElementById('dugmeSacuvajAnalitiku'),
    formaAnalitikaRacuna = document.getElementById('formaAnalitikaRacuna'),
    dugmeStampajAnalitiku = document.getElementById('dugmeStampajAnalitiku'),
    analitikaRacuna = {};
function sacuvajAnalitikuRacuna() {
    dugmeSacuvajAnalitiku.addEventListener('click', (event) => {
        event.preventDefault();
        analitikaRacuna = localStorage.getItem("analitikaRacuna") !== null ? JSON.parse(localStorage.getItem("analitikaRacuna")) : {};
        if (stranka.value == "") {
            alert('Upiši naziv stranke !')
            return;
        }
        if (datumAnalitika.value == "") {
            alert('Upiši datum !')
            return;
        }
        if (analitikaRacuna[stranka.value + datumAnalitika.value] !== undefined) {
            alert('Već postojeca analitika za dati datum, zamenite ime stranke !')
            return;
        }

        let novaAnalitika = {
            datumAnalitikaN: datumAnalitika.value,
            strankaN: stranka.value,
            dugujeN: duguje.value,
            potrazujeN: potrazuje.value
        }
        analitikaRacuna[stranka.value + datumAnalitika.value] = novaAnalitika;
        setToLocalStorage('analitikaRacuna', analitikaRacuna);
        alert('Uspešno dodato !');
        prikazSacuvaneAnalitike();
        formaAnalitikaRacuna.reset();
    })
}
sacuvajAnalitikuRacuna();
function prikazSacuvaneAnalitike() {
    analitikaIzLocalStorage = localStorage.getItem("analitikaRacuna");
    if (analitikaIzLocalStorage == null) {
        analitikaRacuna = {}
    } else {
        analitikaRacuna = JSON.parse(analitikaIzLocalStorage)
    }
    analitikaStavkeHTML = `<ul id='listaSacuvaneAnalitike'>`;
    for (let kljucAnalitike in analitikaRacuna) {
        analitikaStavkeHTML += `<li id='analitikaID${kljucAnalitike}' onclick='prikazKliknuteAnalitike(event)'>${kljucAnalitike} </li><em id="izbrisiAnalitiku${kljucAnalitike}" onclick="izbrisiAnalitiku(event)">izbriši</em>`
    }
    analitikaStavkeHTML += `</ul>`;
    sacuvanaAnalitika.innerHTML = analitikaStavkeHTML;
}
prikazSacuvaneAnalitike();

function prikazKliknuteAnalitike(event) {
    prikazanDatum = document.getElementById('prikazanDatum'),
        prikazanaStranka = document.getElementById('prikazanaStranka'),
        prikazanaDugovanja = document.getElementById('prikazanaDugovanja'),
        prikazanaPotraznja = document.getElementById('prikazanaPotraznja'),
        graficikiDugovanje = document.getElementById('graficikiDugovanje'),
        grafickiPotraznja = document.getElementById('grafickiPotraznja');
    event.preventDefault();
    analitikaIzLocalStorage = getFromLocalStorage("analitikaRacuna");
    kljucAnalitike = event.target.id.substring(11);
    izvucenoIzAnalitike = analitikaIzLocalStorage[kljucAnalitike];
    prikazanDatum.innerHTML = izvucenoIzAnalitike.datumAnalitikaN,
        prikazanaStranka.innerHTML = izvucenoIzAnalitike.strankaN,
        prikazanaDugovanja.innerHTML = izvucenoIzAnalitike.dugujeN,
        prikazanaPotraznja.innerHTML = izvucenoIzAnalitike.potrazujeN;
    if (izvucenoIzAnalitike.dugujeN <= 450 && izvucenoIzAnalitike.potrazujeN <= 450) {
        graficikiDugovanje.style = `background-color:aqua;height:${izvucenoIzAnalitike.dugujeN}px`;
        grafickiPotraznja.style = `background-color:red;height:${izvucenoIzAnalitike.potrazujeN}px`;
    } else if (izvucenoIzAnalitike.dugujeN <= 900 && izvucenoIzAnalitike.potrazujeN <= 900) {
        graficikiDugovanje.style = `background-color:aqua;height:${izvucenoIzAnalitike.dugujeN / 2}px`;
        grafickiPotraznja.style = `background-color:red;height:${izvucenoIzAnalitike.potrazujeN / 2}px`;
    } else if (izvucenoIzAnalitike.dugujeN <= 1800 && izvucenoIzAnalitike.potrazujeN <= 1800) {
        graficikiDugovanje.style = `background-color:aqua;height:${izvucenoIzAnalitike.dugujeN / 4}px`;
        grafickiPotraznja.style = `background-color:red;height:${izvucenoIzAnalitike.potrazujeN / 4}px`;
    } else if (izvucenoIzAnalitike.dugujeN <= 3600 && izvucenoIzAnalitike.potrazujeN <= 3600) {
        graficikiDugovanje.style = `background-color:aqua;height:${izvucenoIzAnalitike.dugujeN / 8}px`;
        grafickiPotraznja.style = `background-color:red;height:${izvucenoIzAnalitike.potrazujeN / 8}px`;
    } else if (izvucenoIzAnalitike.dugujeN <= 7200 && izvucenoIzAnalitike.potrazujeN <= 7200) {
        graficikiDugovanje.style = `background-color:aqua;height:${izvucenoIzAnalitike.dugujeN / 16}px`;
        grafickiPotraznja.style = `background-color:red;height:${izvucenoIzAnalitike.potrazujeN / 16}px`;
    } else if (izvucenoIzAnalitike.dugujeN <= 14400 && izvucenoIzAnalitike.potrazujeN <= 14400) {
        graficikiDugovanje.style = `background-color:aqua;height:${izvucenoIzAnalitike.dugujeN / 32}px`;
        grafickiPotraznja.style = `background-color:red;height:${izvucenoIzAnalitike.potrazujeN / 32}px`;
    } else if (izvucenoIzAnalitike.dugujeN <= 28800 && izvucenoIzAnalitike.potrazujeN <= 28800) {
        graficikiDugovanje.style = `background-color:aqua;height:${izvucenoIzAnalitike.dugujeN / 64}px`;
        grafickiPotraznja.style = `background-color:red;height:${izvucenoIzAnalitike.potrazujeN / 64}px`;
    } else if (izvucenoIzAnalitike.dugujeN <= 57600 && izvucenoIzAnalitike.potrazujeN <= 57600) {
        graficikiDugovanje.style = `background-color:aqua;height:${izvucenoIzAnalitike.dugujeN / 128}px`;
        grafickiPotraznja.style = `background-color:red;height:${izvucenoIzAnalitike.potrazujeN / 128}px`;
    } else if (izvucenoIzAnalitike.dugujeN <= 115200 && izvucenoIzAnalitike.potrazujeN <= 115200) {
        graficikiDugovanje.style = `background-color:aqua;height:${izvucenoIzAnalitike.dugujeN / 256}px`;
        grafickiPotraznja.style = `background-color:red;height:${izvucenoIzAnalitike.potrazujeN / 256}px`;
    } else if (izvucenoIzAnalitike.dugujeN <= 230400 && izvucenoIzAnalitike.potrazujeN <= 230400) {
        graficikiDugovanje.style = `background-color:aqua;height:${izvucenoIzAnalitike.dugujeN / 512}px`;
        grafickiPotraznja.style = `background-color:red;height:${izvucenoIzAnalitike.potrazujeN / 512}px`;
    } else if (izvucenoIzAnalitike.dugujeN <= 460800 && izvucenoIzAnalitike.potrazujeN <= 460800) {
        graficikiDugovanje.style = `background-color:aqua;height:${izvucenoIzAnalitike.dugujeN / 1024}px`;
        grafickiPotraznja.style = `background-color:red;height:${izvucenoIzAnalitike.potrazujeN / 1024}px`;
    } else if (izvucenoIzAnalitike.dugujeN <= 921600 && izvucenoIzAnalitike.potrazujeN <= 921600) {
        graficikiDugovanje.style = `background-color:aqua;height:${izvucenoIzAnalitike.dugujeN / 2028}px`;
        grafickiPotraznja.style = `background-color:red;height:${izvucenoIzAnalitike.potrazujeN / 2028}px`;
    } else if (izvucenoIzAnalitike.dugujeN <= 3686400 && izvucenoIzAnalitike.potrazujeN <= 3686400) {
        graficikiDugovanje.style = `background-color:aqua;height:${izvucenoIzAnalitike.dugujeN / 8112}px`;
        grafickiPotraznja.style = `background-color:red;height:${izvucenoIzAnalitike.potrazujeN / 8112}px`;
    } else if (izvucenoIzAnalitike.dugujeN <= 7372800 && izvucenoIzAnalitike.potrazujeN <= 7372800) {
        graficikiDugovanje.style = `background-color:aqua;height:${izvucenoIzAnalitike.dugujeN / 16224}px`;
        grafickiPotraznja.style = `background-color:red;height:${izvucenoIzAnalitike.potrazujeN / 16224}px`;
    } else if (izvucenoIzAnalitike.dugujeN <= 14745600 && izvucenoIzAnalitike.potrazujeN <= 14745600) {
        graficikiDugovanje.style = `background-color:aqua;height:${izvucenoIzAnalitike.dugujeN / 32448}px`;
        grafickiPotraznja.style = `background-color:red;height:${izvucenoIzAnalitike.potrazujeN / 32448}px`;
    }
}
function izbrisiAnalitiku(event) {
    event.preventDefault();
    potvrda = confirm('Da li ste sigurni da želite da obrišete ?');
    if (potvrda == true) {
        analitikaIzLocalStorage = getFromLocalStorage("analitikaRacuna");
        delete analitikaIzLocalStorage[event.target.id.substring(16)];
        localStorage.setItem('analitikaRacuna', JSON.stringify(analitikaIzLocalStorage));
        alert('Uspešno obrisano !')
        prikazSacuvaneAnalitike();
        location.reload();

    }

}
