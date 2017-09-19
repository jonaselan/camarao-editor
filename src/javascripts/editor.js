const {remote, Menu, dialog} = require('electron');
var fs = require('fs');

var currentWindow  = remote.getCurrentWindow();
var JavaScriptMode = ace.require('ace/mode/javascript').Mode;
var editorInstance = ace.edit('editor');

// const template = [
//   {
//     label: 'Open',
//     submenu: [
//       {
//         label: 'sim',
//         click: openHandler
//       }
//     ]
//   },
//   {
//     label: 'View',
//     submenu: [
//       {
//         label: 'Save As',
//         click: saveHandler
//       }
//     ]
//   }
// ]
//
// var magit inMenu = Menu.buildFromTemplate(template);
// Menu.setApplicationMenu(mainMenu);

function openHandler () {
    var fileNames = dialog.showOpenDialog(currentWindow);

    if (fileNames !== undefined) {
        var fileName = fileNames[0];
        fs.readFile(fileName, 'utf8', function (err, data) {
            editorInstance.setValue(data);
        });
    }
}

function saveHandler () {
    var fileName = dialog.showSaveDialog(currentWindow);

    if (fileName !== undefined) {
        fs.writeFile(fileName, editorInstance.getValue());
    }
}

editorInstance.setTheme('ace/theme/twilight');
editorInstance.session.setMode(new JavaScriptMode());
