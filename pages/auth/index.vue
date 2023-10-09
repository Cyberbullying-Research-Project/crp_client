<template>
  <div>
    <AuthLogin v-if="!isAuthenticated" />
    <AuthProfile v-else />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useAuthStore } from '@/store/auth';

const authStore = useAuthStore();
const isAuthenticated = computed(() => authStore.isAuthenticated);

// Redirigir al inicio si el usuario está autenticado

</script>
