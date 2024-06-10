<template>
    <div class="page">
        <div class="page-header">
            <h1 class="my-4 text-center text-white">Pokédex</h1>
            <navbar />
        </div>

        <div class="page-body text-white m-5">
            <h2>Shiny hunt</h2>
            <ShinyHunting />
        </div>
    </div>
</template>

<script setup>

import navbar from '../components/navbar.vue';
import ShinyHunting from '../components/Boxes/ShinyHunting.vue';

</script>