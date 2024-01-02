// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  $env: {
    AZURE_CLIENT_ID: process.env.AZURE_CLIENT_ID || '',
    AZURE_TENANT_ID: process.env.AZURE_TENANT_ID || '',
    REDIRECT_URI: process.env.REDIRECT_URI || '',
  }
})
