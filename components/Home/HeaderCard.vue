<template>
  <v-container>
    <v-card color="#000" variant="outlined">
      <v-card-title class="text-center justify-center py-6">
        <HomeParalaxCard/>
      </v-card-title>

      <v-tabs v-model="tab" bg-color="#AA3939" color="#FFF"  grow>
        <v-tab v-for="item in items" :key="item" :value="item">
          {{ item }}
        </v-tab>
      </v-tabs>

      <v-window v-model="tab">
        <v-window-item v-for="item in items" :key="item" :value="item">
          <v-card color="#AA3939" flat>
            <v-container fluid>                      
              <v-card-text>
                <HomeItemsCard :tabsCards="textTab[item]" :item="item"/>
              </v-card-text>            
            </v-container>          
          </v-card>
        </v-window-item>
      </v-window>
    </v-card>
  </v-container>
</template>

<script setup>
  import { ref } from 'vue'

  const tab = ref('ciberbullying')

  const items = [
    'ciberbullying',
    'sexting',
    'grooming',    
  ]
  const textTab = {
    ciberbullying: {
        inphographic:{
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            image: '/images/portada/ciberbullying-infografia-portada.png'
        },
        podcast:{
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: '/images/portada/ciberbullying-podcast-portada.png'
        },
        video:{
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: '/images/portada/ciberbullying-video-portada.png'
        },
    },
    sexting: {
        inphographic:{
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            image: '/images/portada/sexting-infografia-portada.png'
        },
        podcast:{
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            image: '/images/portada/sexting-podcast-portada.png'
        },
        video:{
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            image: '/images/portada/sexting-video-portada.png'
        }
    },
    grooming: {
        inphographic:{
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: '/images/portada/grooming-infografia-portada.png'
        },
        podcast:{
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: '/images/portada/grooming-podcast-portada.png'
        },
        video:{
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: '/images/portada/grooming-video-portada.png'
        }
    },
}
</script>

<style scope>
/* Helper classes */
.bg-basil {
  background-color: #FFF !important;
}
.text-basil {
  color: #356859 !important;
}
.custom-tab {
  color: #AA3939; /* Color de las pestañas inactivas */  
}
.custom-tab-active {
  color: #801515; /* Color de la pestaña activa */
}
</style>