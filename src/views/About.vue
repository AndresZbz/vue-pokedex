<template>
    <div class="page">
        <div class="page-header">
            <h1 class="my-4 text-center text-white">Pokédex</h1>
            <navbar />
        </div>

        <div class="page-body text-white m-5">
            <h2>About</h2>
            <p>This is a Simple Pokédex made using Vue and bootstrap with the Vite tool.</p>
            <p>All the API request were made using PokeAPI, you can check them in this <a class="text-info" href="https://pokeapi.co/">link</a> or their <a class="text-info" href="https://github.com/PokeAPI/pokeapi">Github</a></p>
            <br>
            <h2>How to use</h2>
            <p><strong>Search: </strong>Go to <router-link to="/search" class="text-info">Search</router-link> or just click on the search navigation button and write the Pokémon name. (By default it searchs Pikachu info)</p>
            <p><strong>Shiny hunt: </strong>Go to <router-link to="/shiny" class="text-info">Shiny hunt</router-link> or click the Shiny hunt button at the navigation bar to start your odyssey of shiny hunting.</p>
        </div>
    </div>
</template>

<script setup>

import navbar from '../components/navbar.vue';

</script>