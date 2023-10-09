import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
    state: ()=>{
        return {
            drawer: false,
        }
    },
    getters:{
        getDrawer: (state) => state.drawer,
    },
    actions: {
        toggleDrawer() {
            this.drawer = !this.drawer;
        },
        hideDrawer() {
            this.drawer = false;
        }
    }
})