// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    ssr:{
      noExternal: ['vuetify']
    }
  },
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    async (options, nuxt) => {
      // @ts-ignore
      nuxt.hooks.hook('vite:extendConfig', config => config.plugins.push(
        vuetify()
      ))
    },
    'nuxt-socket-io',
  ], io: {      
      sockets: [
        {
          name: 'main',
          url: 'http://localhost:4000',
          default: true,
        }
      ],
  },  
  app:{
    head:{
      title: 'Cyberbullying',
      meta: [
        { name:'description', content:'Cyberbullying' },
      ],
      link: [
        { rel:'stylesheet', href:'https://fonts.googleapis.com/icon?family=Material+Icons' },
      ],
    }
  },
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL,
    },
  }
})
