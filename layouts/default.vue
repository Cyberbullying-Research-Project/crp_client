<template>
  <v-app id="inspire" 
  >
    <SiteNavigation v-if="isAuthenticated"/>
    <SiteBarItems/>
    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  import { useAuthStore } from '@/store/auth';

  const { isAuthenticated } = useAuthStore();

</script>