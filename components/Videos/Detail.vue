<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-sheet elevation="12" rounded="lg" width="100%" class="pa-4 text-center mx-auto">                    
                    <h2 class="text-h5 mb-6"> Titulo del vídeo </h2>

                    <div class="video-container">
                        <iframe
                            ref="videoFrame"
                            width="760"
                            height="415"
                            :src="`${url}start=1`"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        ></iframe>
                    </div>
                    
                    <v-divider class="mb-4"></v-divider>
                    <!-- Botones de control de video -->
                    <div class="video-controls">                                                
                        <v-btn @click="fullscreenVideo" class="mx-2" color="primary" rounded variant="outlined">
                            <v-icon>mdi-fit-to-screen</v-icon>
                        </v-btn>
                    </div>
                </v-sheet>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-card class="mx-auto" color="#3F52B5" variant="outlined">
                    <v-card-text class="text-h5">
                        <v-icon color="#132584" class="me-2">mdi-information</v-icon>
                        About this podcast:
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam error hic similique beatae suscipit vitae iste eius qui architecto non ducimus magni quidem deserunt quibusdam, molestias provident cupiditate at in.
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
    const url = 'https://www.youtube.com/embed/HnrRZL5OY2k?si=iKeUc2-q0wqZO7bk&amp;autoplay=0&mute=0&';
    const route = useRoute();
    const { narrative, format, id } = route.params;

    // Declaración de referencia para el elemento iframe
    const videoFrame = ref(null);

    // Funciones para controlar el video
    const expandVideo = () => {
        if (videoFrame.value) {
            // Ampliar el tamaño del video al ancho de la pantalla (ajustar el ancho)
            videoFrame.value.style.width = '100%';
            videoFrame.value.style.height = 'auto';
        }
    };

    const fullscreenVideo = () => {
        if (videoFrame.value) {
            // Poner el video en pantalla completa
            if (videoFrame.value.requestFullscreen) {
                videoFrame.value.requestFullscreen();
            } else if (videoFrame.value.mozRequestFullScreen) {
                videoFrame.value.mozRequestFullScreen();
            } else if (videoFrame.value.webkitRequestFullscreen) {
                videoFrame.value.webkitRequestFullscreen();
            }
        }
    };
</script>

<style scoped>
    .video-container {
        position: relative;
        padding-bottom: 56.25%; /* 16:9 aspect ratio */
        overflow: hidden;
    }

    .video-container iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .video-controls {
        margin-top: 10px;
    }
</style>
