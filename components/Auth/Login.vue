<template>
  <div>
    <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">

      <div class="text-h5 text-center mb-8">Iniciar sesi&oacute;n</div>
      <div class="text-subtitle-1 text-medium-emphasis">Correo electr&oacute;nico</div>
      <v-form v-model="form" @submit.prevent="login">
        <v-text-field
          v-model="loginData.email"
          density="compact"
          placeholder="Correo electr&oacute;nico"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
        ></v-text-field>

        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Contraseña

          <a
            class="text-caption text-decoration-none text-blue"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Olvidé mi contraseña</a>
        </div>

        <v-text-field
          v-model="loginData.password"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Ingresa tu contraseña"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible = !visible"
        ></v-text-field>

        <v-btn        
          :loading="loading"          
          block
          class="mb-8"
          color="blue"
          size="large"
          variant="tonal"
          type="submit"
        >
          Login
        </v-btn>

        <v-card-text class="text-center">
          <a
            class="text-blue text-decoration-none"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Crear un usuario nuevo <v-icon icon="mdi-chevron-right"></v-icon>
          </a>
        </v-card-text>
      </v-form>
    </v-card>
  </div>
</template>

<script setup >
  import { ref } from 'vue';
  import { useAuthStore } from '@/store/auth';

  const authStore = useAuthStore();
  const router = useRouter();
  
  const form = ref(false);
  const visible = ref(false);

  const loginData = ref({
    email: '',
    password: '',
  });

  const loading = ref(false);

  const login = async () => {    
    const response = await authStore.login(loginData.value);    
    
    if (response && response.token) {     
      router.push('/');
    }
  };

  const required = (v) => !!v || 'Field is required';
</script>

