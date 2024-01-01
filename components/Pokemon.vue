<script setup lang="ts">
const { data } = await useFetch('https://pokeapi.co/api/v2/pokemon/ditto')
</script>

<template>
    {{ data.name }}
    <img :src="data.sprites.front_default">
</template>