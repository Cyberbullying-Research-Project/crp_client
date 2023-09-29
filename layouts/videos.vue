<template>
    <h1>Layout {{narrativeType}} infografías</h1>
    <VideosList :narrativeType="narrativeType"/>
</template>
<script setup>
    const { narrativeType } = defineProps(['narrativeType']);
</script>
