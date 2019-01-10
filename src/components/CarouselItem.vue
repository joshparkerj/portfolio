<template>
  <div class="carousel-item">
    <div class="item__media">
      <!--an image would go here i think-->
      <img :src="img_src">
    </div>
    <div class="item__details">
      <div class="item__title">{{title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarouselItem",
  props: {
    title: String,
    img_src: String
  }
};
</script>

<style>
/* all code to make the carousel work is borrowed from:
    https://codepen.io/joshhunt/pen/LVQZRa */
.carousel-item {
  background-color: springgreen;
  position: relative;
  display: inline-block;
  width: 250px;
  height: 140px;
  margin-right: 10px;
  font-size: 20px;
  cursor: pointer;
  transition: 450ms all;
  transform-origin: center left;
}
.item__media img {
  width: 250px;
  height: 140px;
  object-fit: cover;
}
.item__details {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  font-size: 10px;
  opacity: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  transition: 450ms opacity;
}
.item__details:after,
.item__details:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  display: #000;
}
.item__details:after {
  margin-top: -25px;
  margin-left: -25px;
  width: 50px;
  height: 50px;
  border: 3px solid white;
  line-height: 50px;
  text-align: center;
  border-radius: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
.item__details:before {
  content: "▶"; /* i'll want to change this to something more useful */
  left: 0;
  width: 100%;
  font-size: 30px;
  margin-left: 7px;
  margin-top: -18px;
  text-align: center;
  z-index: 2;
}
.carousel-item:hover .item__details {
  opacity: 1;
}
.item__title {
  color: white;
  position: absolute;
  top: 0;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
}
.carousel-item:hover ~ .carousel-item {
  transform: translate3d(125px, 0, 0);
}
</style>
