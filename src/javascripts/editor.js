// ipcRenderer: listen for messages from the main process
// remote: access the main process in renderer process
const {remote, Menu, ipcRenderer} = require('electron');
const dialog = remote.dialog; // access native file picker dialog
var fs = require('fs');
// var JavaScriptMode = ace.require('ace/mode/potigol').Mode;

// keep track of the open file and editor
// let editor = ace.edit('editor');
// const editor = CodeMirror(document.getElementById("editor"), {
//   value: "# Olá :)",
//   lineNumbers: true,
//   mode: "text/x-potigol",
// });

let file;

// bind functions to native menus
ipcRenderer.on('save', save);
ipcRenderer.on('open', (event, file) => open(file));

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

function open(fileToOpen) {
  const doOpen = (file) => {
    fs.readFile(file, 'utf8', (error, contents) => {
      console.log('contents', contents);
      console.log(editor);

      if (error) {
        new Notification('Camarão Editor', { body: `Could not open ${file} : ${error}` });
      } else {
        document.title = `Camarão Editor | ${file}`
        // app.addRecentDocument(file); // add to the native OS recent documents list in the dock
        editor.setValue(contents);
      }
    });
  };

  if (fileToOpen) {
    doOpen(fileToOpen);
  } else {
    getFile().then(doOpen)
  }
}

function getFile() {
  return new Promise((resolve, reject) => {
    dialog.showOpenDialog({ properties: [ 'openFile' ] }, selectedFile => {
      if (selectedFile && selectedFile[0]) {
        resolve(selectedFile[0]);
      }
    });
  });
}

// editor.setTheme('ace/theme/twilight');
// editor.session.setMode(new JavaScriptMode());
