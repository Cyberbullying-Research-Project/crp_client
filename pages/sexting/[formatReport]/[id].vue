<template>
    <div>
        <h1>{{ formatReport }} - {{ id }}</h1>
        <nav>
            <ul>                    
                <li><NuxtLink to="/sexting/inphographic">Infografía </NuxtLink></li>
                <li><NuxtLink to="/sexting/podcast">Podcast</NuxtLink></li>
                <li><NuxtLink to="/sexting/video">Video</NuxtLink></li>   
            </ul>
        </nav>
    </div>
</template>

<script setup>
    /**
     *  Dynamic route for sexting formatReport [inphographic | podcast | video]
     *  Dynamic route for sexting id
     */
    const route = useRoute();    
    const { id, formatReport} = route.params;    
</script>

<style scoped>

</style>