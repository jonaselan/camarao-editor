const {app, globalShortcut, BrowserWindow, Menu } = require('electron');

// adds debug features like hotkeys for triggering dev tools and reload
require('electron-debug')();

// prevent window being garbage collected
let win;

function createwin() {
	// create a browser window for the UI
	const win = new BrowserWindow({
		width: 600,
		height: 400,
		x: 10,
		y: 200
	});
	// and load the index.html of the app.
	win.loadURL(`file://${__dirname}/views/index.html`);
	win.on('closed', onClosed);

	globalShortcut.register('CommandOrControl+1', () => {
		win.isMaximized() ? win.unmaximize() : win.maximize()
	})

	globalShortcut.register('CommandOrControl+2', () => {
		console.log('Alt key pressed');
	})

	// open chrome debugger if --dev (npm test) is specified
	if (process.argv.indexOf('--dev') !== -1) {
			win.openDevTools();
	}

	// If remove this template, will work normally with the default native menus
	template = [
		require('./javascripts/menus/main')(app),
		require('./javascripts/menus/file')(win),
		require('./javascripts/menus/view'),
		require('./javascripts/menus/edit')
	];

	menu = Menu.buildFromTemplate(template);
	Menu.setApplicationMenu(menu);

	return win;
}

function onClosed() {
	// dereference the window
	// for multiple windows store them in an array
	win = null;
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	// On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
	if (!win) {
		win = createwin();
	}
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
	win = createwin();
});
