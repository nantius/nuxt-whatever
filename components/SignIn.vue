<script setup>
import { ref, onMounted } from 'vue'
import { PublicClientApplication } from '@azure/msal-browser'
const runtimeConfig = useRuntimeConfig()
const msal = ref(null)
const isMsalInitialized = ref(false)

onMounted(async () => {
    msal.value = new PublicClientApplication({
    auth: {
      clientId: runtimeConfig.public.clientId,
      authority: `https://login.microsoftonline.com/${runtimeConfig.public.tenantId}`,
      redirectUri: 'http://localhost:3001',
    },
    cache: {
      cacheLocation: 'localStorage',
      storeAuthStateInCookie: false,
    },
})

  await msal.value.initialize()
  isMsalInitialized.value = true
})


async function signIn() {
  if (!isMsalInitialized.value) {
    return 

  }
    const loginRequest = {
    scopes: ['User.Read'],
    prompt: 'consent',
  }

  try {
    const account = await msal.value.getActiveAccount()
    console.log(account)
    if (!account) {
      const response = await msal.value.loginPopup(loginRequest)
      console.log(response)
    } else {
      const response = await msal.value.acquireTokenSilent(loginRequest)
      console.log(response)
    }
  } catch (error) {
    console.error(error)
  } 
}
</script>


<template>
    <div>
        <button @click="signIn">Sign in</button>
    </div>
</template>