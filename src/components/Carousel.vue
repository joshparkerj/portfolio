<template>
  <div class="outer-carousel">
    <div class="carousel">
      <!-- no title here -->
      <CarouselItem
        v-for="item in items"
        :key="item.id"
        :title="item.title"
        :img_src="item.img_src"
      />
    </div>
  </div>
</template>

<script>
import CarouselItem from "./CarouselItem";

export default {
  name: "Carousel",
  components: {
    CarouselItem
  },
  data: function() {
    return {
      items: [
        {
          id: 0,
          title: "item",
          img_src: "/img/ai.svg"
        },
        {
          id: 1,
          title: "internet item",
          img_src: "/img/bai.svg"
        },
        {
          id: 2,
          title: "another item",
          img_src: "/img/ai2.png"
        },
        {
          id: 3,
          title: "fourth item",
          img_src: "/img/fff.jpg"
        },
        {
          id: 4,
          title: "labels",
          img_src: "/img/ca.jpg"
        },
        {
          id: 5,
          title: "title?",
          img_src: "/img/iii.png"
        },
        {
          id: 6,
          title: "some kinda grid for the homework",
          img_src: "/img/g.png"
        },
        {
          id: 7,
          title: "idk",
          img_src: "/img/i25.jpg"
        }
      ]
    };
  }
};
</script>

<style>
/* all code to make the carousel work is borrowed from:
    https://codepen.io/joshhunt/pen/LVQZRa */
.carousel {
  transition: 450ms transform;
  font-size: 0;
  white-space: nowrap;
  margin: 70px 0;
  padding-bottom: 10px;
}
.carousel:hover {
  transform: translate3d(-62.5px, 0, 0);
}
.carousel:hover .carousel-item {
  opacity: 0.3;
}
.carousel:hover .carousel-item:hover {
  transform: scale(1.5);
  opacity: 1;
}
.outer-carousel {
  overflow: scroll;
  width: 98%;
}
</style>
