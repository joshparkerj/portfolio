<template>
  <div id="app">
    <h1>CAROUSEL</h1>
    <Carousel/>
    <Hello/>
  </div>
</template>

<script>
import Carousel from "./components/Carousel.vue";
import Hello from "./components/Hello.vue";

export default {
  name: "app",
  components: {
    Carousel,
    Hello
  }
};
</script>

<style>
#app {
  font-family: "Noto Sans", Arial, sans-serif;
}
div {
  border-radius: 10px;
  margin: 2%;
  padding: 2%;
}
h1 {
  font-size: 30px;
}
</style>
