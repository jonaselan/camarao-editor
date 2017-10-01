module.exports = () => {
  return {
    label: 'File',
    submenu: [{
      label: 'Open...',
      accelerator: 'CommandOrControl+O',
      click: () => console.log('process');
    }]
  };
};
