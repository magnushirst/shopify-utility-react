const Store = require('electron-store');
// eslint-disable-next-line import/no-extraneous-dependencies
const { contextBridge } = require('electron');

const store = new Store();

contextBridge.exposeInMainWorld(
  'config',
  {
    get: () => { console.log(store.get('app')); return store.get('app'); },
    save: (config) => { store.set('app', { ...store.get('app'), ...config }); },
  },
);
