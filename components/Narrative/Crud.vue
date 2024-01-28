<template>
  <v-container>
    <v-row>
      <v-col>
        <form @submit.prevent="isEditing ? updateNarrative() : createNarrative()">
          <v-text-field
            v-model="title"
            :error-messages="titleErrorMessage"
            label="Título de la narrativa"
            variant="solo-filled"
            required            
          ></v-text-field>

          <v-textarea
            v-model="body"
            :error-messages="bodyErrorMessage"
            label="Descripción"
            variant="solo-filled"
            required
          ></v-textarea>

          <v-file-input
            v-model="resourceFile"
            :error-messages="resourcesErrorMessage"
            clearable
            label="Recurso multimedia"
            variant="solo-filled"
            required      
            @change="handleFileChange"      
          ></v-file-input>
        </form>
      </v-col>
      <v-col cols="2">
        <v-card
          class="mx-auto"
          elevation="0"
          max-width="500"
        >        
          <v-card-text>
            <v-btn
              icon
              class="text-none mb-4"
              @click="isEditing ? updateNarrative() : createNarrative()"
            >
              <v-icon>
                {{ isEditing ? 'mdi-content-save' : 'mdi-plus' }}
              </v-icon>
            </v-btn>

            <v-btn
              icon
              class="text-none mb-4"
              @click="deleteNarrative"
            >
              <v-icon>mdi-delete</v-icon>
            </v-btn>

            <v-btn
              icon
              class="text-none mb-4"
              @click="isEditing = !isEditing"
            >
              <v-fade-transition leave-absolute>
                <v-icon v-if="isEditing">mdi-close</v-icon>
                <v-icon v-else>mdi-pencil</v-icon>
              </v-fade-transition>
            </v-btn>
            <v-btn
              icon
              class="text-none mb-4"
              @click="handleReset"
            >
              <v-icon> mdi-eraser </v-icon>
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <NarrativeList />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useNarrativeStore } from '@/store/narrative';
import { useAuthStore } from '@/store/auth';

const authStore = useAuthStore();
const token = authStore.token;
const runtimeConfig = useRuntimeConfig();
const API_BASE_URL = runtimeConfig.public.API_BASE_URL;


var narrativeStore = useNarrativeStore();
var narrativeData = ref({});
var title = ref('');
var body = ref('');
var resources = ref(null);
var titleErrorMessage = ref('');
var bodyErrorMessage = ref('');
var resourcesErrorMessage = ref('');
var isEditing = ref(narrativeStore.isEditing);
var resourceFile = ref(null);

var createNarrative = async () => {
    uploadResource().then(async (newResource) => {
      narrativeData = {
        title: title.value,
        body: body.value,
        resources: newResource._id,
      };
      
      const resutl = await narrativeStore.createNarrative(narrativeData);
      if (result.error) {
        // Set error messages based on the result if needed
        titleErrorMessage.value = 'Error message for title';
        bodyErrorMessage.value = 'Error message for body';
        resourcesErrorMessage.value = 'Error message for resources';
      } else {
        // Clear error messages
        titleErrorMessage.value = '';
        bodyErrorMessage.value = '';
        resourcesErrorMessage.value = '';
      }
    }).catch((error) => {
      console.error('Error al cargar el recurso', error);
    });
};


const updateNarrative = async () => {
  narrativeData = {
    title: title.value,
    body: body.value,
    resources: resources.value,
  };
  
  await narrativeStore.updateNarrative(narrativeData);
};

const deleteNarrative = async () => {
  await narrativeStore.deleteNarrative();
  // Limpiar los campos del formulario
  title.value = '';
  body.value = '';
  resources.value = null;
};

const handleReset = () => {
  // Limpiar los campos del formulario
  title.value = '';
  body.value = '';
  resources.value = null;
};

const uploadResource = async () => {
  if (resourceFile.value) {    
    var formData = new FormData();    
    formData.append('file', resourceFile.value);

    try {
      // Realiza una solicitud POST para cargar el recurso multimedia
      console.log('formData', formData);
      const response = await fetch(`${API_BASE_URL}/resources`, {
        method: 'POST',
        body: formData,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
      });

      if (response.ok) {
        // Parsea la respuesta para obtener información sobre el recurso
        const resourceInfo = await response.json();
        // Agrega la ID del recurso al campo de recursos en el formulario
        resources.value = [resourceInfo._id];
        // Llama a la función para crear la narrativa
        createNarrative();
      } else {
        console.error('Error al cargar el recurso multimedia');
      }
    } catch (error) {
      console.error('Error de red al cargar el recurso', error);
    }
  } else {
    // Si no se selecciona ningún archivo, mostrar un mensaje de error
    resourcesErrorMessage.value = 'Por favor, selecciona un archivo de recurso.';
  }
};

// cargar archivo en memoria
const handleFileChange = (event) =>  {  
  resourceFile.value = event.target.files[0];
}

</script>
