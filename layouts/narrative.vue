<template>
    <NarrativeHeaderCard :narrativeType="narrativeType"/>
    <NarrativeReportCard/>
</template>
<script setup>
    const { narrativeType } = defineProps(['narrativeType']);
</script>
