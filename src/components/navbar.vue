<template>
    <nav class="d-flex gap-3 justify-content-center border-bottom">
        <ul class="nav">
            <li class="nav-item">
                <router-link to="/" class="text-white text-decoration-none">About</router-link>
            </li>
        </ul>

        <ul class="nav">
            <li class="nav-item">
                <router-link to="/search" class="text-white text-decoration-none">Search</router-link>
            </li>
        </ul>

        <ul class="nav">
            <li class="nav-item">
                <router-link to="/shiny" class="text-white text-decoration-none">Shiny hunt</router-link>
            </li>
        </ul>
    </nav>
</template>

<style>

a {
    font-family: monospace;
}
</style>