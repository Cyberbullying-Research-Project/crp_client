<template>
    <div>
        <h1>{{ formatReport }} - {{ id }}</h1>
        <nav>
            <ul>                    
                <li><NuxtLink to="/grooming/inphographic">Infografía </NuxtLink></li>
                <li><NuxtLink to="/grooming/podcast">Podcast</NuxtLink></li>
                <li><NuxtLink to="/grooming/video">Video</NuxtLink></li>   
            </ul>
        </nav>
    </div>
</template>

<script setup>
    /**
     *  Dynamic route for Gooming formatReport [inphographic | podcast | video]
     *  Dynamic route for Gooming id
     */
    const route = useRoute();    
    const { id, formatReport} = route.params;    
</script>

<style scoped>

</style>