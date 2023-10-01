<template>    
    <NuxtLayout :name="layout">    
        <NuxtPage />
    </NuxtLayout>
</template>
<script setup>    
    const route = useRoute();    
    const { format, id } = route.params;    
    const layout = `${format}id`;

</script>