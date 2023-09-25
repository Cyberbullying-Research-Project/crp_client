<template>
    <div class="mt-7 max-w-sm mx-auto text-center card">
        <p class="mt-7 text-7x1 font-bold">{{  error.statusCode }}</p>
        <p class="mt-7 text-6x1 font-bold">Ooops.</p>
        <p class="mt-7">{{ error.message }}</p>
    </div>
</template>

<script setup>
    defineProps(['error']);
</script>

<style scoped>

</style>