const { app, BrowserWindow } = require('electron')

function createWindow() {

  win = new BrowserWindow({})
  win.maximize();
  win.loadFile('OSPbyUM-PrijaviSe.html');
}

app.on('ready', createWindow)