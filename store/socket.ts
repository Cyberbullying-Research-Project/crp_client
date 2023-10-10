import { defineStore } from 'pinia'

export const useSocketStore = defineStore('socket', {
  state: () => ({
    connected: false,
    fooEvents: [],
    barEvents: [],    
  }),
  getters: {
    isConnected: (state) => state.connected,
    getFooEvents: (state) => state.fooEvents,
    getBarEvents: (state) => state.barEvents,
  },
  actions: {
    disconnect() {
      this.connected = false;
    },
    connect() {
      this.connected = true;
    },
  },
});
