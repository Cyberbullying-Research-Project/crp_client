<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="font-bold">Inicio</NuxtLink>
                <ul class="flex gap-4">                    
                    <li><NuxtLink to="/ciberbullying" >Ciberbullying </NuxtLink></li>
                    <li><NuxtLink to="/sexting" >Sexting</NuxtLink></li>
                    <li><NuxtLink to="/grooming" >Grooming</NuxtLink></li>
                    <li><NuxtLink to="/about" >Acerca de</NuxtLink></li>
                </ul>
            </nav>
        </header>        
        <div class="container mx-auto p-4">
            <h1>Layout</h1>
            <slot />
        </div>
        <footer class="container mx-auto p-4 flex justify-between border-t-2">
            <p>© 2021 - Todos los derechos reservados</p>
            <p>Desarrollado por <a href="https://www.linkedin.com/in/kikret/" target="_blank">Alexander Toscano Ricardo</a></p>
        </footer>
    </div>
</template>
<script setup></script>
<style scoped>
    .router-link-exact-active {
        color: #fff;
         @apply bg-[#12b488] text-white py-2 px-3 rounded-md text-sm text-white;
    }
</style>