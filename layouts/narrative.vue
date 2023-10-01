<template>    
    <NarrativeHeaderCard/>
</template>
<script setup>
    // const { narrative } = defineProps(['narrative']);
    const route = useRoute();
    const { narrative } = route.params;
    
</script>
