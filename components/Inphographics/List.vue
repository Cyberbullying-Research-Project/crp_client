<template>
    <h1>Listado</h1>
    <a :href="`/${narrative}/${format}/13`">Narratives</a>
    <v-row><v-col cols="12" class="pa-0 mx-lg-auto"><CommonCounter/></v-col></v-row>
</template>
<script setup>
    const route = useRoute();
    const { narrative, format } = route.params;
</script>

    