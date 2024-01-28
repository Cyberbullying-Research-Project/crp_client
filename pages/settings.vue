<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <v-card class="mx-auto" elevation="0">
          <v-card-text>        
            <v-btn     
                block           
                class="text-none mb-4"
                color="indigo-darken-3"              
                variant="flat"
                @click="currentComponent = 'Users'"             
                >
                Usuarios
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col>        
        <component :is="switchComponent(currentComponent)" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, resolveComponent } from 'vue';

const currentComponent = ref(null);

// Resuelve los componentes de forma directa
const Users = resolveComponent('Users');

const switchComponent  = (component) => {    
  switch (component) {
    case 'Users':
      return Users;
    default:
      return null;
  }
}
</script>
