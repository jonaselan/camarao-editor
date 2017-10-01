module.exports = (mainWindow) => {
  return {
    label: 'File',
    submenu: [{
      label: 'Open',
      accelerator: 'CommandOrControl+O',
      click: () => mainWindow.webContents.send('open')
    },{
      label: 'Save',
      accelerator: 'CommandOrControl+S',
      click: () => mainWindow.webContents.send('save')
    }]
  };
};
