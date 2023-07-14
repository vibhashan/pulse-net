/**
 * Import necessary packages
 */
const { app, BrowserWindow, screen } = require('electron');
const { spawn } = require('cross-spawn');
const path = require('path');

// To run the script in 'react' folder
const reactProcess = spawn('npm', ['run', 'dev'], { cwd: path.join(__dirname, '..', 'react') });

reactProcess.stdout.on('data', (data) => {
    console.log(`React: ${data}`);
});

reactProcess.stderr.on('data', (data) => {
    console.error(`React error: ${data}`);
});

// Enable hot-reload in electron
try {
    require('electron-reloader')(module);
} catch (err) {
    console.log(err);
};

// Function to create new window
function createWindow(height, width) {

    // Instantiate a BrowserWindow object
    const window = new BrowserWindow({
        height: height,
        width: width,
        titleBarStyle: 'hidden',
        titleBarOverlay: {
            show: true,
            color: 'white',
        },
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
        app.quit();
    }
});

// Invoke createWindow function only when there are no windows
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    };
});

