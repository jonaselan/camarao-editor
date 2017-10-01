const {app, globalShortcut, BrowserWindow } = require('electron');

// adds debug features like hotkeys for triggering dev tools and reload
require('electron-debug')();

// prevent window being garbage collected
let win;

function createwin() {
	const win = new BrowserWindow({
		width: 600,
		height: 400,
		x: 200,
		y: 200
	});

	win.loadURL(`file://${__dirname}/views/index.html`);
	win.on('closed', onClosed);

	globalShortcut.register('CommandOrControl+1', () => {
		win.isMaximized() ? win.unmaximize() : win.maximize()
	})

	globalShortcut.register('CommandOrControl+2', () => {
		console.log('Alt key pressed');
	})

	// open chrome debugger if --dev is specified
	if (process.argv.indexOf('--dev') !== -1) {
			win.openDevTools();
	}

	return win;
}

function onClosed() {
	// dereference the window
	// for multiple windows store them in an array
	win = null;
}

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (!win) {
		win = createwin();
	}
});

app.on('ready', () => {
	win = createwin();
});
