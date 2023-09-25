<template>
    <div>
        <header>
            <nav>
                <ul>                    
                    <li><NuxtLink to="/sexting/">Sexting</NuxtLink></li>                    
                </ul>
            </nav>
        </header>
        <h1>Sexting {{ formatReport }}</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet fugiat commodi fugit voluptatum quos error. Explicabo suscipit maxime amet voluptatum possimus vero ad libero voluptates culpa. Quo quaerat quidem consequuntur.</p>
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
     *  Dynamic route for ciberbullying formatReport [inphographic | podcast | video]
     */    
    const route = useRoute();
    const {formatReport} = route.params;
    
    setPageLayout(formatReport);
</script>

<style scoped>

</style>