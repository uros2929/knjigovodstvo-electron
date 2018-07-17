let satDiv = document.getElementById("sat");
let datumDiv = document.getElementById("datumDiv");
function sat() {
    let time = new Date(),
        hours = time.getHours(),
        minutes = time.getMinutes(),
        seconds = time.getSeconds();
    satDiv.innerHTML = proveriVreme(hours) + ":" + proveriVreme(minutes) + ":" + proveriVreme(seconds)
}
setInterval(sat, 1000);
function proveriVreme(vreme) {
    if (vreme < 10) {
        vreme = "0" + vreme;
    }
    return vreme;
}
function ispisivanjeDatuma() {
    let datumIspis = new Date();
    return datumDiv.innerHTML = datumIspis.toDateString();
}
ispisivanjeDatuma();
