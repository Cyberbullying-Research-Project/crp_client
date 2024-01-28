<template>
  <v-card class="mx-auto">
    <v-card-title>
      Listado de Narrativas
    </v-card-title>

    <v-divider></v-divider>

    <v-virtual-scroll
      :items="narratives"
      height="320"
      item-height="48"
    >
      <template v-slot:default="{ item }">
        <v-list-item
          :title="item.title"
          :subtitle="item.created_by"
        >
          <template v-slot:prepend>
            <v-icon class="bg-primary">mdi-account</v-icon>
          </template>

          <template v-slot:append>
            <v-btn
              icon="mdi-pencil"
              size="x-small"
              variant="tonal"
            ></v-btn>
          </template>
        </v-list-item>
      </template>
    </v-virtual-scroll>
  </v-card>
</template>
<script setup>

import { useNarrativeStore } from '@/store/narrative';

const narrativeStore = useNarrativeStore();

onMounted(() => {
  narrativeStore.getNarratives();
});

const narratives = computed(() => narrativeStore.narratives);

</script>
