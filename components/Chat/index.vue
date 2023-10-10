<template>
  <div>
    <h1>Socket</h1>
    <h2>Chat</h2>         
  </div>
</template>
<script setup>
import { useSocketStore } from '@/store/socket';

const socketState = useSocketStore();

onMounted(() => {
  
  const socket = useNuxtApp().$nuxtSocket({channel: '/index'});

  socket.on('connection', function(){
    console.log('Conectado al servidor WebSocket');
    socket.emit('events', { test: 'test' });
    socketState.connect();
  });

  socket.on('disconnect', function(){
    console.log('Desconectado del servidor WebSocket');
    socketState.disconnect();
  });
  
  socket.emit('chatMessage', 'Mensaje de prueba');
  
  socket.on('chatMessage', (message) => { // Asegúrate de que el nombre sea correcto
    console.log(`Mensaje recibido del servidor: ${message}`);
  });
  socket.on('events', (...args) => {
    console.log('events', args);
    //socketState.fooEvents.push(args);
  });
});
</script>
