// https://nuxt.com/docs/api/configuration/nuxt-config
// https://nuxt.com/modules
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
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
  }
})
