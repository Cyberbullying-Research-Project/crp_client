<template>
    <v-container>
      <v-row>
        <v-col v-for="card in cards" :key="card.title" cols="3" lg="4" sm="6" md="12">
          <v-card><!--min-height="70vh"-->
            <v-img :src="card.src" class="align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="350px" cover>
              <v-card-title class="text-white" v-text="card.title"></v-card-title>
            </v-img>
            <v-card-text>
              <p class="text-justify"> {{ typeof item }}
                {{ card.text }}
              </p>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>             
              <v-btn :prepend-icon="card.icon" variant="outlined"  @click="goItemsCard(`${item}${card.urlButton}`)">
                <template v-slot:prepend>
                  <v-icon color="success"></v-icon>
                </template>
                Ver mas...
                <!--NuxtLink :to="`${item}${card.urlButton}`">Ver mas...</NuxtLink-->
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row> 
    </v-container>   
</template>
<script setup>

const router = useRouter();
const { tabsCards, item } = defineProps(['tabsCards', 'item']);

const { inphographic, podcast, video } = tabsCards;

const cards = [
  { 
    title: 'Inphographic', 
    src: inphographic.image, 
    text: inphographic.text, icon: 'mdi-presentation',
    urlButton: '/inphographic'
  },
  { 
    title: 'Podcast', 
    src: podcast.image, 
    text: inphographic.text, icon: 'mdi-podcast',
    urlButton: '/podcast'
  },
  { 
    title: 'Video', 
    src: video.image, 
    text: inphographic.text, icon: 'mdi-video',
    urlButton: '/video'
  },
];

function goItemsCard(path){  
  router.replace({ path });
}
</script>
