<template>
    <v-app-bar elevation="0">
      <v-app-bar-nav-icon @click.stop="appStore.toggleDrawer" v-if="isAuthenticated"></v-app-bar-nav-icon>
      <v-btn to="/" variant="plain">
        <v-icon color="blue-lighten-1"  size="x-large"> mdi-home </v-icon>
        <v-tooltip activator="parent" location="bottom" >Ciberbullying</v-tooltip>
      </v-btn>
      <v-app-bar-title>
        <v-app-bar-title>Ciberbullying</v-app-bar-title>        
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn to="/ciberbullying" icon>
        <v-icon color="grey-lighten-1"> mdi-human-greeting-proximity </v-icon>
        <v-tooltip activator="parent" location="bottom" >Ciberbullying</v-tooltip>
      </v-btn>
      <v-btn to="/sexting" icon>
        <v-icon color="grey-lighten-1"> mdi-cellphone-message </v-icon>
        <v-tooltip activator="parent" location="bottom" >Sexting</v-tooltip>
      </v-btn>
      <v-btn to="/grooming" icon>
        <v-icon color="grey-lighten-1"> mdi-laptop-account </v-icon>
        <v-tooltip activator="parent" location="bottom" >Grooming</v-tooltip>
      </v-btn>
      <v-btn to="/about" icon>
        <v-icon color="grey-lighten-1"> mdi-information </v-icon>
        <v-tooltip activator="parent" location="bottom" >About</v-tooltip>
      </v-btn>
      <v-btn to="/auth" icon>
        <v-icon color="grey-lighten-1"> mdi-account </v-icon>
        <v-tooltip activator="parent" location="bottom" >Perfil</v-tooltip>
      </v-btn>
    </v-app-bar>
</template>

<script setup>
  import { useAuthStore } from '~/store/auth';
  import { useAppStore } from '~/store/app';

  const authStore = useAuthStore();
  const appStore = useAppStore();

  const isAuthenticated = computed(() => authStore.isAuthenticated);
  
</script>