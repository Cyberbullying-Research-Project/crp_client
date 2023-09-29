<template>
    <h1>Listado de {{ layout }}</h1>
    <NuxtLayout :name="layout" :narrativeType="narrativeType">
        <NuxtPage />
    </NuxtLayout>
</template>
<script setup>
    const route = useRoute();
    const narrativeType = 'grooming'
    const { format: layout } = route.params;
</script>