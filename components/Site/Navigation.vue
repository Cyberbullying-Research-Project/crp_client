<template>    
    <v-navigation-drawer v-model="drawer" temporary>
      <v-list-item
        prepend-avatar="https://lh3.googleusercontent.com/ogw/AKPQZvwQbdk9-OsTc8LR3cl5sERywFVmsVLFO-AQWsCAew=s32-c-mo"          
        title="Alexander Toscano R."
      ></v-list-item>
        <v-divider></v-divider>
      <v-list :items="items"></v-list>
    </v-navigation-drawer>
</template>
<script setup>
    import { ref } from 'vue'

    const drawer = ref(null) 

    const items = [
        { title: 'Perfil',value: '/profile' },
        { title: 'Contenido',value: '/content' },
        { title: 'Configuración',value: '/config' },
        { title: 'Cerrar sesión',value: '/logout' },
    ];
</script>