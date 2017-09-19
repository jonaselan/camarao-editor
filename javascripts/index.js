// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

// access the main process in renderer process
const {remote} = require('electron')

document.getElementById('minimize').addEventListener('click', minimizeWin);

function minimizeWin (){
  remote.getCurrentWindow().minimize();
}

var aa = 'We are using Node.js' + process.versions.node;
aa += ' Chromium' + process.versions.chrome;
aa += ' and Electron' + process.versions.electron;
document.getElementById('version').innerHTML = aa;

// READ A FILE
// const fs = require('fs')
// var contents = fs.readFileSync('./package.json', 'utf8')
// alert(contents)

// WRITE SOMETHING
// document.write('SIM')
