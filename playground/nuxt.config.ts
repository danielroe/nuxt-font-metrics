export default defineNuxtConfig({
  modules: ['@nuxtjs/fontaine'],
  css: ['~/assets/css/fonts/font.css'],
  fontMetrics: {
    fonts: [
      {
        family: 'Roboto',
        fallbacks: ['Zapfino'],
        overrideName: 'fallback-a',
      },
      {
        family: 'Roboto',
        fallbacks: ['Impact'],
        overrideName: 'fallback-b',
      },
      {
        family: 'Roboto',
        fallbacks: ['Georgia'],
        overrideName: 'fallback-c',
      },
    ]
  }
})
