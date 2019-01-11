<template>
  <div class="hello">
    <button @click="getFullName">get full name</button>
    {{name}}
    <p>
      <button @click="getFullLocation">get full location</button>
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
      console.log('get full name method called');
      store.commit("addLastName");
    },
    getFullLocation(){
      console.log('get full name method called');
      store.commit("addState");
    }
  }
};
</script>

<style>
</style>