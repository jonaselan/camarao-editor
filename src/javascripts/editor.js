// ipcRenderer: listen for messages from the main process
// remote: access the main process in renderer process
const {remote, Menu, ipcRenderer} = require('electron');
const dialog = remote.dialog; // access native file picker dialog
var fs = require('fs');

var currentWindow  = remote.getCurrentWindow();
var JavaScriptMode = ace.require('ace/mode/potigol').Mode;

// keep track of the open file and editor
let editor = ace.edit('editor');
let file;

// bind functions to native menus
ipcRenderer.on('save', save);

function save() {
  const write = (file) => {
    fs.writeFile(file, editor.getValue(), 'utf8', (error) => {
      // Notification: access the native notifications system
      if (error) {
        new Notification('Camarão Editor', { body: `Could not write to ${file}: ${error}` });
      } else {
        new Notification('Camarão Editor', { body: `Contents written to ${file}.` });
      }
    });
  };

  if (file) {
    write(file);
  } else {
    dialog.showSaveDialog({ title: 'Select Location' }, filename => {
      file = filename;
      write(file);
    })
  }
}

editor.setTheme('ace/theme/twilight');
editor.session.setMode(new JavaScriptMode());
