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
    async (options, nuxt) => {
      // @ts-ignore
      nuxt.hooks.hook('vite:extendConfig', config => config.plugins.push(
        vuetify()
      ))
    },
  ],
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
  
})
