<template>    
    <NuxtLayout :name="format">
        <NuxtPage />
    </NuxtLayout>
</template>
<script setup>
    const route = useRoute();
    const { format } = route.params;    
</script>