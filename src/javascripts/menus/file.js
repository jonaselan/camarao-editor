module.exports = (mainWindow) => {
  return {
    label: 'File',
    submenu: [{
      label: 'Save',
      accelerator: 'CommandOrControl+S',
      click: () => mainWindow.webContents.send('save')
    }]
  };
};
