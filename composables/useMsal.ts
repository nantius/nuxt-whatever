import { ref, inject, provide } from 'vue'
import { PublicClientApplication } from '@azure/msal-browser'

const msalSymbol = Symbol('msal')

export async function provideMsal() {
  const msalInstance = new PublicClientApplication({
    auth: {
      clientId: process.env.AZURE_CLIENT_ID || '',
      authority: `https://login.microsoftonline.com/${process.env.AZURE_TENANT_ID}`,
      redirectUri: process.env.REDIRECT_URI,
    },
    cache: {
      cacheLocation: 'localStorage',
      storeAuthStateInCookie: false,
    },
  })

  await msalInstance.initialize()
  const msal = ref(msalInstance)
  provide(msalSymbol, msal)
}

export function useMsal() {
  const msal = inject(msalSymbol)
  if (!msal) throw new Error('No msal provided!!!')

  return msal
}
