/**
 * Import necessary packages
 */
const { app, BrowserWindow, screen, ipcMain } = require('electron');
const path = require('path');
const { spawn } = require('cross-spawn');
const { portKill } = require('port-process-killer');

// To run the vite dev server
// const reactProcess = spawn('npm', ['run', 'dev'], { cwd: path.join(__dirname, '..', 'react') });

// reactProcess.stdout.on('data', (data) => {
//     console.log(`React: ${data}`);
// });

// reactProcess.stderr.on('data', (data) => {
//     console.error(`React error: ${data}`);
// });

// Enable hot-reload in electron
try {
    require('electron-reloader')(module);
} catch (err) {
    console.log(err);
};

// Create a global variable for main window object
let window;

// Function to create main window
function createWindow(height, width) {

    // Instantiate a BrowserWindow object
    window = new BrowserWindow({
        height: height,
        width: width,
        titleBarStyle: 'hidden',
        titleBarOverlay: {
            show: true,
            color: 'white',
        },
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        }

    });

    // Load the particular URL
    window.loadURL('http://localhost:3000');
}


app.whenReady().then(() => {

    // Get full height and width of current screen
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;

    // Invoke createWindow function by passing height, width as args
    createWindow(height, width);

}).catch(err => console.log(err));


// Close app window when all windows are closed (Windows OS behaviour)
app.on('window-all-closed', () => {
    // Check whether platform is macOS (darwin) or Windows
    if (process.platform !== 'darwin') {
        // Kill process on port 3000 (our Vite dev server in this case)
        portKill(3000);

        app.quit();
    }
});


// Invoke createWindow function only when there are no windows
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    };
});


ipcMain.on('open-new-window', (event, data) => {
    const newWindow = new BrowserWindow({
        width: 800, height: 600,
        titleBarOverlay: {
            show: true,
            color: 'white',
        },
        icon: '../react/public/images/logo.ico'
    });

    // Load the href in the new window
    newWindow.loadURL(data.href);

    // Hide the menu options
    newWindow.setMenuBarVisibility(false);

});