<template>
    <v-container>
      <v-row v-for="post in posts" :key="post.id">
            <v-col cols="12" class="px-6 mx-0-lg-auto">
                <v-card  variant="flat">
                    <div class="flex-no-wrap">
                        <div>
                            <v-card-actions>
                                <v-list :items="transformResources(post.resources)" item-props lines="three"  class="w-100">
                                    <template v-slot:subtitle="{ subtitle }">
                                        <div v-html="subtitle"></div>
                                    </template>
                                </v-list>
                            </v-card-actions>
                        </div>                        
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script setup>
    const { posts } = defineProps(['posts']);

    const typeToIcon = {
        infografías: 'mdi-presentation',
        videos: 'mdi-video',
        podcasts: 'mdi-podcast',
    };

    function transformResources(resources) {
            
            const transformedResources = [];

            const typeToIconPng = {
                infographics: 'icon/presentation.png',
                videos: 'icon/video.png',
                podcasts: 'icon/podcast.png',
            };   

            for (const resource of resources) {
                if (typeToIcon.hasOwnProperty(resource.type)) {
                    transformedResources.push({ type: 'divider', inset: true });
                }

                const icon = typeToIconPng[resource.type] || 'check-circle.png'; // Usar 'mdi-file' como icono predeterminado si el tipo no coincide

                const transformedResource = {
                prependAvatar: icon,
                title: resource.name,
                subtitle: `<span class="text-primary">${resource.created_at}</span> &mdash; ${resource.description}`,
                };

                transformedResources.push(transformedResource);
            }

            return transformedResources;
        }
</script>