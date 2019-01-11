<template>
  <div class="hello">
    <button :click="getFullName">get full name</button>
    {{name}}
    <p>
      <button :click="getFullLocation">get full location</button>
      {{city}}
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
    city(){
      return store.getters.city;
    }
  },
  methods: {
    getFullName() {
      store.commit("addLastName");
    },
    getFullLocation(){
      store.commit("addState");
    }
  }
};
</script>

<style>
</style>