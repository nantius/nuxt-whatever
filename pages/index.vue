<script setup>
import { onMounted } from 'vue'
import { provideMsal } from '../composables/useMsal'

onMounted(async () => {
    await provideMsal()
})
</script>


<template>
    <div >
        <img src="/pokeapi.png" />
        <Header>
            (Yet another pokemon test app)
        </Header>
        <Pokemon />
    </div>

    <SignIn />

    
</template>