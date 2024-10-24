<template>
  <div class="container-xl">
    <div class="row row-cards gap-5">
      <div class="box border text-white pb-5 rounded col-sm-7">
        <div class="pkmn_box d-flex gap-2">
          <div class="d-flex align-items-center justify-content-center">
            <img
              :src="front_image"
              width="256px"
              height="256px"
              class="m-3"
              alt="Pokémon Image"
            />
          </div>
          <div class="mx-3">
            <h2 class="mt-3">Name:</h2>
            <p>
              <span
                v-if="favorite"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="favorite Pokémon"
                alt="my favorite Pokémon"
                >❤️</span
              >
              {{ name }}
            </p>
            <h2>Number:</h2>
            <p>{{ number }}</p>
            <h2>Type</h2>
            <p>{{ type1 }} - {{ type2 }}</p>
          </div>
        </div>
      </div>

      <div class="box border text-white pb-5 rounded col-sm-4 px-4">
        <h2 class="m-3">Base stats</h2>
        <p><strong>HP: </strong>{{ hp }}</p>
        <p><strong>Attack: </strong>{{ attack }}</p>
        <p><strong>Defense: </strong>{{ defense }}</p>
        <p><strong>Special attack: </strong>{{ sp_attack }}</p>
        <p><strong>Special Defense: </strong>{{ sp_defense }}</p>

        <p><strong>Speed: </strong>{{ speed }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PokemonInfo",
  props: {
    //Pokemon
    name: String,
    number: Number,
    front_image: String,
    type1: String,
    type2: String,
    favorite: Boolean,

    //stats
    hp: Number,
    attack: Number,
    defense: Number,
    sp_attack: Number,
    sp_defense: Number,
    speed: Number,
  },
};
</script>

<style>
.box {
  background: #292e33;
}

@media (min-width: 320px) and (max-width: 1280px) {
  .pkmn_box {
    flex-wrap: wrap;
    flex-basis: 50%;
  }
}
</style>
