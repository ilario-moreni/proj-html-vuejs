<script>
import SpecialistCards from './SpecialistCards.vue';
import { store } from '../store';
export default {
    components:{
        SpecialistCards,
    },
    data(){
        return{
            store
        }
    }
}
</script>

<template lang="">
    <div class="section_specialist_container">
        <div class="container pb-5 ">
            <div class="row justify-content-center">
                <div class="col text-center">
                    <h2>Specialists In Modern Construction</h2>
                    <hr class="my_hr mt-4 mb-5">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.</p>
                </div>
            </div>
        </div>
        <div>
            <SpecialistCards />
        </div>
    </div>
</template>

<style lang="scss">
@use '../styles/partials/variables.scss' as *;


    .section_specialist_container{
        padding: 150px 0;
        
        p{
            color: $secondary_grey_font;
        }
    }
    .my_hr{
        width: 15%;
        min-width: 150px;
        margin-left: auto;
        margin-right: auto;
        height: 2px;
        color: transparent;
        background-color: $avada_yellow;
        opacity: 1;
    }
</style>