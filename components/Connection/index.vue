<template>
  <div>
    <v-icon color="grey-lighten-1" class="ma-3">
      {{ socketState.isConnected ? "mdi-wifi" : "mdi-wifi-off" }}
    </v-icon>
    <v-tooltip activator="parent" location="bottom">
      {{ message }}
    </v-tooltip>
  </div>
</template>
<script setup>
import { useSocketStore } from "@/store/socket";

const socketState = useSocketStore();
const message = ref("");

onMounted(() => {
  const socket = useNuxtApp().$nuxtSocket({ channel: "/index" });

  socket.on("connection", function () {
    socketState.connect();
  });

  socket.on("disconnect", function () {
    socketState.disconnect();
  });

  socket.on("onConnect", (payload) => {
    if (payload.isConnect) socketState.connect();
    message.value = "Conectado al servidor";
  });

  socket.on("onDisconnect", (payload) => {
    if (!payload.isConnect) socketState.disconnect();
    message.value = "Desconectado del servidor";
  });
});
</script>
