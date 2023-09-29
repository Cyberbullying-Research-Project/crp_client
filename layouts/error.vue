<template>
    <div class="mt-7 max-w-sm mx-auto text-center card">
        <v-sheet class="position-relative" min-height="450">
            <v-fade-transition hide-on-leave>
                <v-card append-icon="$warning" color="warning" class="mx-auto" elevation="16" max-width="500" :title="`Error ${error.statusCode}`">
                    <div class="py-12 text-center">
                        <v-icon class="mb-6" color="#FFF" icon="mdi-close-circle-outline" size="128"></v-icon>

                        <div class="text-h4 font-weight-bold">{{ error.message }}</div>
                    </div>

                    <v-divider></v-divider>

                    <div class="pa-4 text-end">
                    <v-btn class="text-none" color="medium-emphasis" min-width="92" rounded variant="outlined" @click="toHome">
                        Inicio
                    </v-btn>
                    </div>
                </v-card>
            </v-fade-transition>
        </v-sheet>
    </div>
</template>

<script setup>
    defineProps(['error']);

    import { ref } from 'vue'
    const dialog = ref(true)
    
    async function toHome() {
        console.log('toHome')
        await navigateTo('/')        
    }
    
</script>