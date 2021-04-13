const Store = require('electron-store');
const { contextBridge } = require('electron');

const store = new Store();

contextBridge.exposeInMainWorld(
  'config',
  {
    get: () => { console.log(store.get('app')); return store.get('app'); },
    save: (config) => { store.set('app', { ...store.get('app'), ...config }); },
  },
);
