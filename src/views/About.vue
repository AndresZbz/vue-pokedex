<template>
  <div class="page">
    <div class="page-header">
      <h1 class="my-4 text-center text-white">
        <span class="mx-3"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="iconify iconify--logos"
            width="37.07"
            height="36"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 256 198"
          >
            <path
              fill="#41B883"
              d="M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0h47.36Z"
            ></path>
            <path
              fill="#41B883"
              d="m0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0H0Z"
            ></path>
            <path
              fill="#35495E"
              d="M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0H50.56Z"
            ></path></svg></span
        >Pokédex
      </h1>
      <navbar />
    </div>

    <div class="page-body text-white m-5">
      <h2>About</h2>
      <p>
        This is a Simple Pokédex made using Vue and bootstrap with the Vite
        tool.
      </p>
      <p>
        All the API request were made using PokeAPI, you can check them in this
        <a class="text-info" href="https://pokeapi.co/">link</a> or their
        <a class="text-info" href="https://github.com/PokeAPI/pokeapi"
          >Github</a
        >
      </p>
      <br />
      <h2>How to use</h2>
      <p>
        <strong>Search: </strong>Go to
        <router-link to="/search" class="text-info">Search</router-link> or just
        click on the search navigation button and write the Pokémon name. (By
        default it searchs Pikachu info)
      </p>
      <p>
        <strong>Shiny hunt: </strong>Go to
        <router-link to="/shiny" class="text-info">Shiny hunt</router-link> or
        click the Shiny hunt button at the navigation bar to start your odyssey
        of shiny hunting.
      </p>
    </div>
  </div>
</template>

<script setup>
import navbar from "../components/navbar.vue";
</script>
