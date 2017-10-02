const TabGroup = require('electron-tabs');
const dragula = require('dragula');

let tabGroup = new TabGroup({
  newTab: {
    title: 'New Tab',
    src: '../views/new_page.html',
    icon: 'fa fa-home'
  },
  closeButtonText: '&#x2715;',
  ready: tabGroup => {
    dragula([tabGroup.tabContainer], {
      direction: 'horizontal'
    });
  }
});

let tab = tabGroup.addTab({
  title: 'Welcome',
  src: '../views/welcome.html',
  webviewAttributes: {
    'nodeintegration': true
  },
  icon: 'fa fa-home',
  visible: true,
  closable: false,
  active: true,
  ready: tab => {
    let webview = tab.webview;
    if (!!webview) {
      webview.addEventListener('dom-ready', () => {
        // webview.openDevTools();
        console.log('tab ready');
      })
    }
  }
});
