<template>
  <v-app id="inspire">
    <SiteNavigation/>
    <SiteBarItems/>
    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup></script>