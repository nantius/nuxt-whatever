// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      clientId: process.env.CLIENT_ID ?? '',
      tenantId: process.env.TENANT_ID ?? '',
      redirectUri: process.env.REDIRECT_URI ?? '',
    }
  }
})