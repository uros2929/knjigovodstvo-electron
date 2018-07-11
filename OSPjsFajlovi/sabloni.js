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
