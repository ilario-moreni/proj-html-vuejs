  <script>
import 'vue3-carousel/dist/carousel.css'
  import { Carousel, Navigation, Slide } from 'vue3-carousel';
  import { store } from '../store';
  export default ({
    name: 'PartnersCarousel',
    components: {
      Carousel,
      Slide,
      Navigation,
    },
    data(){
        return{
            store
        }
    }
  })
  </script>

<template>
    <div class="container">
        <Carousel :items-to-show="5" :wrap-around="true">
          <Slide v-for="(slide, index) in store.partners" :key="index">
            <div class="carousel__item">
                <img :src="`/src/assets/img/${slide.logo}.png`" class='carousel_img' alt="">
            </div>
          </Slide>
      
          
        </Carousel>
    </div>
</template>

<style lang="scss">
    .carousel_img{
        max-width: 200px;
       
    }
</style>

  