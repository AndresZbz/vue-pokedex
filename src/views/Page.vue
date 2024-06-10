<template>
    <div class="page">
        <div class="page-header">
            <h1 class="my-4 text-center text-white">Pokédex</h1>
            <navbar />
        </div>

        <div class="page-body mx-3">
            <form @submit.prevent="getPokemon" class="m-5 text-white d-flex gap-3 justify-content-center">
                <input type="text" v-model="name" data-bs-theme="dark" class="form-control rounded-2 col-sm-5">
                <button type="submit" class="btn btn-primary" >Search</button>
            </form>

            <PokemonInfo 
                :name="name" 
                :number="number" 
                :front_image="front_image" 
                :type1="type1" 
                :type2="type2" 
                :hp="hp"
                :attack="attack" 
                :defense="defense"
                :sp_attack="sp_attack"
                :sp_defense="sp_defense"
                :speed="speed"
                :favorite="favorite" />
        </div> 
    </div>

</template>

<script>

import PokemonInfo from '../components/Boxes/PokemonInfo.vue';
import navbar from '../components/navbar.vue';


export default {
    data() {
        return {

            //pokemon
            name: "pikachu",
            number: 0,
            front_image: "",
            type1: "",
            type2: "",
            //my favorite hehe
            favorite: false,

            //stats
            hp: 0,
            attack: 0,
            defense: 0,
            sp_attack: 0,
            sp_defense: 0,
        }
    },

    components: {
        PokemonInfo, navbar
    },

    mounted() {
        this.getPokemon();
    },

    methods: {
        getPokemon() {
            fetch(`https://pokeapi.co/api/v2/pokemon/${this.name.toLowerCase()}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    this.name = data.name;
                    this.number = data.id;
                    console.log(data.cries.legacy);
                    this.type1 = data.types[0].type.name;

                    if (data.types.length === 2) {
                        this.type2 = data.types[1].type.name;
                    } else {
                        this.type2 = "";
                    }

                    this.front_image = data.sprites.front_default;

                    if (this.number === 384 || this.number === 254) {
                        this.favorite = true;
                    } else {
                        this.favorite = false;
                    }

                    //stats
                    this.hp = data.stats[0].base_stat;
                    this.attack = data.stats[1].base_stat;
                    this.defense = data.stats[2].base_stat;
                    this.sp_attack = data.stats[3].base_stat;
                    this.sp_defense = data.stats[4].base_stat;
                    this.speed = data.stats[5].base_stat;
                })
                .catch(error => {
                    console.error('There was a problem with the fetch operation:', error);
                });
        },
    }
}

</script>