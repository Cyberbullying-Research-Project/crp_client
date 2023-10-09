<template>
  <div>
    <h2>Registro de Usuario</h2>
    <form @submit.prevent="signup">
      <div>
        <label for="name">Nombre</label>
        <input type="text" id="name" v-model="signupData.name" />
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" v-model="signupData.email" />
      </div>
      <div>
        <label for="password">Contraseña</label>
        <input type="password" id="password" v-model="signupData.password" />
      </div>
      <!--div>
        <label for="role">Rol</label>
        <input type="text" id="role" v-model="signupData.role" />
      </div-->
      <button type="submit">Registrarse</button>
    </form>
  </div>
</template>

<script setup>

import { useAuthStore } from '@/store/auth';

const authStore = useAuthStore();

const signupData = ref({
  name: '',
  email: '',
  password: '',
});

const signup = async () => {
  // Llamar a la acción de registro del store
  await authStore.signup(signupData.value);
  // Hacer algo después de registrarse (por ejemplo, redirigir)
};
</script>
