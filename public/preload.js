const Store = require('electron-store');
const { contextBridge } = require('electron');

let store = new Store();

contextBridge.exposeInMainWorld(
    'config',
    {
        get: () => {return store.get('app')},
        save: (config) => {store.set('app', config)}
    }
)