<template>    
    <h1>Listado de infografías</h1>
    <NuxtLayout :name="layout" :narrativeType="narrativeType">
        <NuxtPage />
    </NuxtLayout>
</template>
<script setup>
    const narrativeType = 'grooming'
    const layout = 'narrative'
</script>
<!--template>
    <h1>Listado de infografías</h1>
    <NuxtLayout :name="layout">
        <NuxtPage />
    </NuxtLayout>
</template>
<script setup>
    const narrativeType = 'ciberbullying'
    const layout = 'inphographics'
</script-->