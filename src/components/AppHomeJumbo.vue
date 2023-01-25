<script>
import JumboFreequote from './JumboFreequote.vue';
import { store } from '../store';
export default {
    name: 'AppHomeJumbo',
    components:{
        JumboFreequote,
    },
    data(){
        return{
            store,
        }
    }
}
</script>

<template lang="">
    <div>
        <div class="bg_home_jumbo">
            <div class="container my_jumbo_container">
                <div class="row justify-content-center">
                    <div class="col-auto">
                        <h1>BUILDING INSPIRING SPACES</h1>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-auto">
                        <h3>We Build Inspiring Residential & Commercial Spaces</h3>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-auto">
                        <button type="button" class="my_button_black rounded-0" @mousedown="store.header_sections[store.isActiveSection].active = false" @click="store.header_sections[3].active = true">EXPLORE RECENT WORK</button>
                    </div>
                    <div class="col-auto">
                        <button type="button" class="my_button rounded-0">GET A QUOTE TODAY</button>
                    </div>
                </div>
            </div>
        </div>
        <JumboFreequote />
    </div>
</template>

<style lang="scss">
@use '../styles/partials/mixin.scss';
@use '../styles/partials/variables.scss' as *;

    .bg_home_jumbo{
        position: relative;
        margin-top: 127.5px;
        background-image: url(../assets/img/home-slider-62528242.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        aspect-ratio: 2400 / 985;
        

        .my_jumbo_container{
            position: absolute;
            top: 50%;
            left: 50%;
            transform:translate(-50%, -50%);
        }

        h1{
            color:white;
            font-size: 58px;
            font-weight: 800;   
        }

        h3{
            color: $avada_yellow;
            font-size: 24px;
            margin-bottom: 2rem;
        }

        button{
            font-size: 18px;
        }
    }

    .my_button_black{
        @include mixin.my_button;
        background-color: $button_black;
        color: white;
    }
</style>