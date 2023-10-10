<template>    
    <v-navigation-drawer 
      v-model="drawer" 
      temporary
      :width="300"
    >
      <v-list-item      
        :prepend-avatar="user.picture?user.picture: '/icon/profile.png'"
        :title="user.name"
      >
      <template v-slot:append>
        <v-btn
          variant="text"
          icon="mdi-chevron-left"
          @click.stop="appStore.hideDrawer"
        ></v-btn>
      </template>            
      </v-list-item>      
      <v-divider></v-divider>
      <v-list density="compact" nav>
        <v-list-item v-for="(item, i) in items" :key="i" 
          :prepend-icon="item.icon" 
          :title="item.title" 
          :value="item.value"
          :to="item.value"          
          @click="appStore.hideDrawer"
        >
        </v-list-item>
        <v-list-item title="Cerrar sesion" @click="logout" prepend-icon="mdi-logout"></v-list-item>
      </v-list>
      <!--v-list :prepend-icon="" :items="items"></v-list-->
    </v-navigation-drawer>
</template>
<script setup>
  import { useRouter } from 'vue-router';
  import { computed } from 'vue';
  import { useAppStore } from '~/store/app';    
  import { useAuthStore } from '~/store/auth';

  const appStore = useAppStore();   
  const authStore = useAuthStore();
  const drawer = computed(() => appStore.getDrawer);  
  const user = computed(() => authStore.user);
  const router = useRouter();  
  const items = [
      { 
        title: 'Perfil', 
        value: '/profile', 
        icon: 'mdi-account'
      },
      { 
        title: 'Contenido', 
        value: '/content', 
        icon : 'mdi-book-open-page-variant'
      },
      { 
        title: 'Configuración', 
        value: '/config', 
        icon: 'mdi-cog'
      },
      {
        title: 'Chat',
        value: '/chat',
        icon: 'mdi-chat'
      }

  ];
  
  // on Logout
  const logout = () => {
    appStore.hideDrawer();
    authStore.logout();    
    router.push('/');
  }
</script> 




