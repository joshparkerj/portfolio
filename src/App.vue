<template>
  <div id="app">
    <Carousel/>
  </div>
</template>

<script>
import Carousel from './components/Carousel.vue'

export default {
  name: 'app',
  components: {
    Carousel
  }
}
</script>

<style>
#app {
  font-family: 'Noto Sans', Arial, sans-serif;
}
div {
  border: solid 1px;
  border-radius: 10px;
  margin: 2%;
  padding: 2%;
}
h1 {
  font-size: 30px;
}
</style>
