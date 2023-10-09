<template>
  <v-card class="mx-auto" max-width="500">
    <v-toolbar flat color="indigo">
      <v-btn icon="mdi-account"></v-btn>

      <v-toolbar-title class="font-weight-light">
        Perfil del usuario
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon @click="isEditing = !isEditing">
        <v-fade-transition leave-absolute>
          <v-icon v-if="isEditing">mdi-close</v-icon>
          <v-icon v-else>mdi-pencil</v-icon>
        </v-fade-transition>
      </v-btn>
    </v-toolbar>

    <v-card-text>
        <v-text-field
            :disabled="!isEditing"
            base-color="white"
            label="Nombre completo"
            v-model="user.name" 
        ></v-text-field>
        
        <v-text-field
            :disabled="!isEditing"
            base-color="white"
            label="Correo"
            v-model="user.email" 
        ></v-text-field>
      
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>        
        <v-spacer></v-spacer>
        <v-btn :disabled="!isEditing" @click="save"> Save </v-btn>
    </v-card-actions>

    <v-snackbar v-model="hasSaved" :timeout="2000" attach position="absolute" location="bottom left">
      Your profile has been updated
    </v-snackbar>    
  </v-card>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useAuthStore } from '@/store/auth';

const { user } = useAuthStore();

// const search = ref('');
const hasSaved = ref(false);
const isEditing = ref(null);

// const authStore = useAuthStore();
const router = useRouter();


const headers = [
  { text: 'Nombre', value: 'name' },
  { text: 'Correo', value: 'email' },
  { text: 'Role', value: 'role' },
];

const save = (item) => {
  isEditing.value = null;
  hasSaved.value = true;
};
</script>

<style>

</style>
