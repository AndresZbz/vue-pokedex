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

    <div class="page-body mx-3">
      <form
        @submit.prevent="getPokemon"
        class="m-5 text-white d-flex gap-3 justify-content-center"
      >
        <input
          type="text"
          v-model="name"
          class="form-control rounded-2 col-sm-5 w-50"
        />
        <button type="submit" class="btn btn-primary">Search</button>
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
        :favorite="favorite"
      />
    </div>
  </div>
</template>

<script>
import PokemonInfo from "../components/Boxes/PokemonInfo.vue";
import navbar from "../components/navbar.vue";
import vueLogo from "../assets/vue.svg";

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
    };
  },

  components: {
    PokemonInfo,
    navbar,
  },

  mounted() {
    this.getPokemon();
  },

  methods: {
    getPokemon() {
      fetch(`https://pokeapi.co/api/v2/pokemon/${this.name.toLowerCase()}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
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
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
        });
    },
  },
};
</script>
