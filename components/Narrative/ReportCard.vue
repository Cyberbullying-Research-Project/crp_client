<template>
    <v-row><v-col cols="12" class="pa-0 mx-lg-auto"><NarrativeCounter/></v-col></v-row>
    <v-row><v-col cols="12" class="pa-0 mx-lg-auto">
        <NarrativeItemsReport :posts="posts"/>
    </v-col></v-row>
    <v-row><v-col cols="12" class="pa-0 mx-lg-auto"><NarrativeCounter/></v-col></v-row>
</template>
<script setup>
    
    const { narrativeType } = defineProps(['narrativeType']);
    
    const narrative = {
        id: 1,
        title: narrativeType,
        body: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        user_id: 1,
        status: 'published',
        created_at: '2021-09-01',
        category: 1,
        posts: [
            {
                id: 1,
                title: `Titulo del contenido de recursos ${narrativeType}`,
                body: 'Loren ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
                user_id: 1,
                status: 'published',
                created_at: '2021-09-01',
                category: 1,
                // resources can be infographics, podcasts or videos, get 10 by sample
                resources:[
                    {
                        id: 1,
                        name: 'Infografía 1',
                        description: 'Infografía 1',
                        created_at: '2021-09-01',
                        created_by: 1,
                        path: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
                        type: 'infographics',
                        size: 100
                    },
                    {
                        id: 2,
                        name: 'Infografía 2',
                        description: 'Infografía 2',
                        created_at: '2021-09-01',
                        created_by: 1,
                        path: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
                        type: 'podcasts',
                        size: 100
                    },
                    {
                        id: 3,
                        name: 'Infografía 3',
                        description: 'Infografía 3',
                        created_at: '2021-09-01',
                        created_by: 1,
                        path: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
                        type: 'infographics',
                        size: 100
                    },
                    {
                        id: 4,
                        name: 'Infografía 4',
                        description: 'Infografía 4',
                        created_at: '2021-09-01',
                        created_by: 1,
                        path: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
                        type: 'videos',
                        size: 100
                    },
                    {
                        id: 5,
                        name: 'Infografía 5',
                        description: 'Infografía 5',
                        created_at: '2021-09-01',
                        created_by: 1,
                        path: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
                        type: 'podcasts',
                        size: 100
                    },
                    {
                        id: 6,
                        name: 'Infografía 6',
                        description: 'Infografía 6',
                        created_at: '2021-09-01',
                        created_by: 1,
                        path: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
                        type: 'videos',
                        size: 100
                    },
                    {
                        id: 7,
                        name: 'Infografía 7',
                        description: 'Infografía 7',
                        created_at: '2021-09-01',
                        created_by: 1,
                        path: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
                        type: 'infographics',
                        size: 100
                    },
                ] 
            },
            {
                id: 2,
                title: `Titulo del contenido de recursos ${narrativeType}`,
                body: 'Loren ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
                user_id: 1,
                status: 'published',
                created_at: '2021-09-01',
                category: 1,
                resources:[
                    {
                        id: 1,
                        name: 'Infografía 1',
                        description: 'Infografía 1',
                        created_at: '2021-09-01',
                        created_by: 1,
                        path: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
                        type: 'podcasts',
                        size: 100
                    },
                    {
                        id: 2,
                        name: 'Infografía 2',
                        description: 'Infografía 2',
                        created_at: '2021-09-01',
                        created_by: 1,
                        path: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
                        type: 'infographics',
                        size: 100
                    },
                    {
                        id: 3,
                        name: 'Infografía 3',
                        description: 'Infografía 3',
                        created_at: '2021-09-01',
                        created_by: 1,
                        path: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
                        type: 'videos',
                        size: 100
                    },
                    {
                        id: 4,
                        name: 'Infografía 4',
                        description: 'Infografía 4',
                        created_at: '2021-09-01',
                        created_by: 1,
                        path: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
                        type: 'infographics',
                        size: 100
                    },
                    {
                        id: 5,
                        name: 'Infografía 5',
                        description: 'Infografía 5',
                        created_at: '2021-09-01',
                        created_by: 1,
                        path: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
                        type: 'podcasts',
                        size: 100
                    },
                    {
                        id: 6,
                        name: 'Infografía 6',
                        description: 'Infografía 6',
                        created_at: '2021-09-01',
                        created_by: 1,
                        path: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
                        type: 'infographics',
                        size: 100
                    },
                    {
                        id: 7,
                        name: 'Infografía 7',
                        description: 'Infografía 7',
                        created_at: '2021-09-01',
                        created_by: 1,
                        path: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
                        type: 'videos',
                        size: 100
                    },
                ]            
            },
            {
                id: 3,
                title: `Titulo del contenido de recursos ${narrativeType}`,
                body: 'Loren ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
                user_id: 1,
                status: 'published',
                created_at: '2021-09-01',
                category: 1,
                resources:[
                    {
                        id: 1,
                        name: 'Infografía 1',
                        description: 'Infografía 1',
                        created_at: '2021-09-01',
                        created_by: 1,
                        path: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
                        type: 'videos',
                        size: 100
                    },
                    {
                        id: 2,
                        name: 'Infografía 2',
                        description: 'Infografía 2',
                        created_at: '2021-09-01',
                        created_by: 1,
                        path: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
                        type: 'infographics',
                        size: 100
                    },
                    {
                        id: 3,
                        name: 'Infografía 3',
                        description: 'Infografía 3',
                        created_at: '2021-09-01',
                        created_by: 1,
                        path: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
                        type: 'podcasts',
                        size: 100
                    },
                    {
                        id: 4,
                        name: 'Infografía 4',
                        description: 'Infografía 4',
                        created_at: '2021-09-01',
                        created_by: 1,
                        path: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
                        type: 'videos',
                        size: 100
                    },
                    {
                        id: 5,
                        name: 'Infografía 5',
                        description: 'Infografía 5',
                        created_at: '2021-09-01',
                        created_by: 1,
                        path: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
                        type: 'infographics',
                        size: 100
                    },
                    {
                        id: 6,
                        name: 'Infografía 6',
                        description: 'Infografía 6',
                        created_at: '2021-09-01',
                        created_by: 1,
                        path: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
                        type: 'podcasts',
                        size: 100
                    },
                    {
                        id: 7,
                        name: 'Infografía 7',
                        description: 'Infografía 7',
                        created_at: '2021-09-01',
                        created_by: 1,
                        path: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
                        type: 'infographics',
                        size: 100
                    },
                ]
            }
        ],            
    };

    const posts = narrative.posts;

</script>