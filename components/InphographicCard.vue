<template>
    <div>
        <p>Infografía</p>
        <p>Card Infografía</p>
        <div class="card text-center">
            <img :src="inphographic.image" alt="infografia tumb" class="thumb">
            <p class="font-bold text-gray-500 m-4 truncate">{{ inphographic.title }}</p>
            <NuxtLink :to="link">
                <p class="btn my-4">Ver detalles</p>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
    const {  inphographic, link } = defineProps(['inphographic', 'link'])
</script>

<style scoped>
.thumb {
    max-width: 70%;
    max-height: 120px;
    margin: 0 auto;
    object-fit: cover;
}
</style>