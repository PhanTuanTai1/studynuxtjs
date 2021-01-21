export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: "Nuxt JS Course",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fa923f', height:'4px',duration:5000 },
  loadingIndicator:{
    name:'circle',
    color:'#fa923f'
  },
  /*
   ** Global CSS
   */
  css: [
    '~assets/styles/main.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios'
  ],
  env:{
    firebaseApiKey : 'AIzaSyAFpYynhsGbPJWM5DXTJAGdu05sTsNn100'
  },
  axios:{
    baseURL: ''
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
  transition:{
    name: 'fade',
    mode: 'out-in'
  }
};
