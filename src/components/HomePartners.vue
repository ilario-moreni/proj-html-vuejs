<script>
import PartnersCarousel from './PartnersCarousel.vue';
 
export default {
    name: 'HomePartners',
    components: {
        PartnersCarousel
    }

}
</script>

<template lang="">
    <div class="section_partners_container text-center">
        <div class="container">
            <h2>Trusted Partners</h2>
            <hr class="my_hr mt-4 mb-5">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        </div>
        
        <PartnersCarousel class="py-5" />
    </div>
</template>

<style lang="scss">
@use '../styles/partials/variables.scss' as *;


    .section_partners_container{
        padding: 70px 0 100px;
        
        p{
            color: $secondary_grey_font;
        }
    }





    
</style>