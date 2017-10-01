module.exports = (app) => {
  return {
    label: 'Camarão Editor',
    submenu: [{
      label: 'Quit',
      accelerator: 'CommandOrControl+Q',
      click: () => app.quit()
    }]
  };
};
