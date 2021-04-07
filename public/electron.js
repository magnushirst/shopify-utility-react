const Store = require('electron-store');
const {
    BrowserWindow,
    app,
} = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");

const store = new Store();
store.set('app.electron', 'works');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        icon: "",
        webPreferences: {
            nodeIntegration: false,
            enableRemoteModule: false,
            contextIsolation: true,
            nodeIntegrationInWorker: false,
            nodeIntegrationInSubFrames: false,
            preload: __dirname + '\\preload.js',
        }
    });

    mainWindow.loadURL(
        isDev
            ? "http://localhost:3000"
            : `file://${path.join(__dirname, "../build/index.html")}`
    );
    mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});