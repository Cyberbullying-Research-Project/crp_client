<template>
    <v-container >
        <v-row>
            <v-col cols="12">
                <v-card color="#952175" theme="dark">
                    <div class="d-flex flex-no-wrap justify-space-between">
                        <div>
                            <v-card-title class="text-h5">
                                Halcyon Days
                            </v-card-title>

                            <v-card-subtitle>Ellie Goulding</v-card-subtitle>

                            <v-card-actions>
                                <v-btn color="#2D0550" variant="tonal" icon="mdi-play" class="ms-2" size="x-large"></v-btn>
                                <v-btn color="#C168A8" variant="tonal" class="ms-2" icon="mdi-pause"></v-btn>
                                <v-btn color="#C168A8" variant="tonal" class="ms-2" icon="mdi-skip-next"></v-btn>
                                <v-btn color="#C168A8" variant="tonal" class="ms-2" icon="mdi-skip-previous"></v-btn>
                                <v-btn color="#C168A8" variant="tonal" class="ms-2" icon="mdi-volume-high"></v-btn>
                                <v-btn color="#C168A8" variant="tonal" class="ms-2" icon="mdi-stop"></v-btn>
                            </v-card-actions>
                        </div>

                        <v-avatar class="ma-3" size="125" rounded="0">
                            <v-img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"></v-img>
                        </v-avatar>
                    </div>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-card class="mx-auto" color="#590040" variant="outlined">
                    <v-card-text class="text-h5">
                        <v-icon color="#C168A8" class="me-2">mdi-information</v-icon>
                        About this podcast
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam error hic similique beatae suscipit vitae iste eius qui architecto non ducimus magni quidem deserunt quibusdam, molestias provident cupiditate at in.
                    </v-card-text>                    
                </v-card>
            </v-col>
        </v-row>        
    </v-container>        
</template>
<script setup>
    const route = useRoute();
    const { narrative, format, id } = route.params;
</script>