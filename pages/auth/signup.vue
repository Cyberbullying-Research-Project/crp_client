<template>
    <div>
        <AuthSignup v-if="!isAuthenticated" />
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useAuthStore } from '@/store/auth';

const authStore = useAuthStore();
const isAuthenticated = computed(() => authStore.isAuthenticated);

</script>

<style scoped>

</style>