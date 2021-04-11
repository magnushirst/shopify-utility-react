const Store = require('electron-store');
const { contextBridge } = require('electron');

const store = new Store();

contextBridge.exposeInMainWorld(
  'config',
  {
    get: () => store.get('app'),
    save: (config) => { store.set('app', config); },
  },
);
