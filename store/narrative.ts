import { defineStore } from 'pinia';
import { useAuthStore } from '@/store/auth';

const authStore = useAuthStore();
const token = authStore.token;

export const useNarrativeStore = defineStore('narrative', {
  state: () => ({
    narratives: [],
    narrative: {},
    narrativeId: null,
    isEditing: false,
  }),
  actions: {
    // obtener las narrativas
    async getNarratives(){
      // Realiza la solicitud GET a la API para obtener las narrativas
      const runtimeConfig = useRuntimeConfig();
      const API_BASE_URL = runtimeConfig.public.API_BASE_URL;
      try {
        const response = await fetch(`${API_BASE_URL}/narratives`, {
          method: 'GET',          
        });

        if (response.ok) {
          // Actualiza el estado de las narrativas
          this.narratives = await response.json();
        } else {
          console.error('Error al obtener las narrativas');
        }
      } catch (error) {
        console.error('Error de red', error);
      }
    },
    async createNarrative(narrativeData:{}) {
      // Realiza la solicitud POST a la API para crear una narrativa
      const runtimeConfig = useRuntimeConfig();
      const API_BASE_URL = runtimeConfig.public.API_BASE_URL;
      
      try {
        const response = await fetch(`${API_BASE_URL}/narratives`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(narrativeData),
        });

        if (response.ok) {
          // Actualiza el estado de la narrativa
          this.narrative = await response.json();

          await this.getNarratives();
        } else {
          console.error('Error al crear la narrativa');
        }
      } catch (error) {
        console.error('Error de red', error);
      }
    },
    async updateNarrative(narrativeData:{}) {
      // Realiza la solicitud PUT a la API para actualizar una narrativa
      const runtimeConfig = useRuntimeConfig();
      const API_BASE_URL = runtimeConfig.public.API_BASE_URL;
      try {
        const response = await fetch(`${API_BASE_URL}/narratives/${this.narrativeId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(narrativeData),
        });

        if (response.ok) {
          // Actualiza el estado de la narrativa
          this.narrative = await response.json();
        } else {
          console.error('Error al actualizar la narrativa');
        }
      } catch (error) {
        console.error('Error de red', error);
      }
    },
    async deleteNarrative() {
      // Realiza la solicitud DELETE a la API para eliminar una narrativa
      const runtimeConfig = useRuntimeConfig();
      const API_BASE_URL = runtimeConfig.public.API_BASE_URL;
      try {
        const response = await fetch(`${API_BASE_URL}/narratives/${this.narrativeId}`, {
          method: 'DELETE',
          headers: {            
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          // Restablece el estado de la narrativa
          this.narrative = {};
          this.narrativeId = null;
        } else {
          console.error('Error al eliminar la narrativa');
        }
      } catch (error) {
        console.error('Error de red', error);
      }
    },
  },
});
