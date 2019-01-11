<template>
  <div class="hello">
    <p>
      <button @click="getFullName">get full name</button>
      {{name}}
    </p>
    <p>
      <button @click="getFullLocation">get full location</button>
      {{city}}
    </p>
    <p>
      <button @click="onButtonClick">click me</button>
    </p>
    <p>
      <button @click="getStarWars">See a random character from
        the famous 1977 blockbuster star wars</button>
        {{starchar}}
      </p>
  </div>
</template>

<script>
import { store } from "../store/store";

export default {
  name: "Hello",
  data() {
    return {
      msg: "idk"
    };
  },
  computed: {
    name() {
      return store.getters.name;
    },
    city() {
      return store.getters.city;
    },
    starchar(){
      return store.getters.charName;
    }
  },
  methods: {
    getFullName() {
      store.commit("addLastName");
    },
    getFullLocation() {
      store.commit("addState");
    },
    onButtonClick() {
      store.dispatch("changes",{ name: "Goober", city: "Robego" });
    },
    getStarWars(){
      store.dispatch("starwars",{rand: Math.random()});
    }
  }
};
</script>

<style>
.hello {
  display: grid;
  grid-template-columns: 4fr 5fr 4fr;
}
.hello p {
  grid-column: span 1;
}
</style>