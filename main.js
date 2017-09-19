const {app, globalShortcut, BrowserWindow } = require('electron');

// adds debug features like hotkeys for triggering dev tools and reload
require('electron-debug')();

// prevent window being garbage collected
let mainWindow;

function createMainWindow() {
	const win = new BrowserWindow({
		width: 600,
		height: 400
	});

	win.loadURL(`file://${__dirname}/views/index.html`);
	win.on('closed', onClosed);

	globalShortcut.register('CommandOrControl+1', () => {
		win.isMaximized() ? win.unmaximize() : win.maximize()
	})

	globalShortcut.register('Alt+1', () => {
		console.log('Alt key pressed');
	})

	return win;
}

function onClosed() {
	// dereference the window
	// for multiple windows store them in an array
	mainWindow = null;
}

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (!mainWindow) {
		mainWindow = createMainWindow();
	}
});

app.on('ready', () => {
	mainWindow = createMainWindow();
});
