<script setup>
import {ref, watch } from 'vue'
import {useMsal} from '../composables/useMsal'

const msal = useMsal()
const isMsalInitialized = ref(false)

watch(msal, (newValue) => {
    if(newValue) {
        isMsalInitialized.value = true
    }
})

async function signIn() {
 if (!isMsalInitialized.value) {
        console.log('MSAL is not initialized yet.')
        return
  }

  const loginRequest = {
    scopes: ['User.Read'],
  }

  try {
    const response = await msal.value.loginPopup(loginRequest)
    console.log(response)
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