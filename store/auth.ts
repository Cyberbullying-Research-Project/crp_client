// store/auth.ts
import { defineStore } from 'pinia';
import jwt_decode from "jwt-decode";
import User from '~/types/user'; 

export const useAuthStore = defineStore('auth', {
    state: ()=>{
        return {
            token: null,
            user: null as User | null,            
        }
    },
    persist: true,
    getters:{
        isAuthenticated: (state) => !!state.token,
        getToken: (state) => state.token,
        getUser: (state) => state.user,
    },
    actions: {
        login(credentials: any) {
            const runtimeConfig = useRuntimeConfig();
            const API_BASE_URL = runtimeConfig.public.API_BASE_URL        
            console.log(API_BASE_URL)
            // Realiza la solicitud de inicio de sesión aquí usando fetch        
            return fetch(`${API_BASE_URL}/auth/login`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            })
                .then((response) => response.json())
                .then((data) => {                       
                    // Almacenar el token en el estado
                    this.token = data.token;
                    
                    // Decodificar el token para obtener los datos del usuario
                    const userToken = jwt_decode(data.token);
                    
                    // Verifica si userToken es un objeto válido antes de asignarlo a this.user
                    if (typeof userToken === 'object' && userToken !== null) {
                    this.user = userToken as User; // Asigna los datos del usuario
                    } else {
                    this.user = null; // Asigna null si el token no es un objeto válido
                    }

                    // Almacenar el token en el estado
                    this.token = data.token;
                    
                    return data;
                });
        },

        signup(newUser:any) {
            const runtimeConfig = useRuntimeConfig();
            const API_BASE_URL = runtimeConfig.public.API_BASE_URL
            
            return fetch(`${API_BASE_URL}/auth/signup`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            }).then((response) => {
                console.log('response', response)
                return response.json()
            })
            .then((data) => {                
                // Almacenar el token en el estado
                this.token = data.token;
                return data;
            });
        },
        logout() {
            // Eliminar el token del estado
            this.token = null;
        },
    },
})
