<template>
    <h1>Layout {{narrativeType}} infografías</h1>
    <InphographicsList :narrativeType="narrativeType"/>
</template>
<script setup>
    const { narrativeType } = defineProps(['narrativeType']);
</script>
