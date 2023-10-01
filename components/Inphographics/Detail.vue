<template>
    <v-container >
        <v-row>
            <v-col cols="8" lg="8" sm="8" xs="12" md="12">
                <v-card>
                    <v-img src="/images/detail/infografia_detalle.jpg" class="bg-grey-lighten-2"></v-img>                    
                </v-card>
            </v-col>
            <v-col cols="4" lg="4" sm="4" xs="12"  md="12">
                <v-card
                    :loading="false"
                    title="Card title"
                    subtitle="Subtitle"
                    text="lorem ipsum dolor sit amet"                    
                    >
                    <v-card-actions>
                        <v-btn :to="`/${narrative}/${format}/`">Click me</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>        
    </v-container>        
</template>
<script setup>
    const route = useRoute();
    const { narrative, format, id } = route.params;
</script>