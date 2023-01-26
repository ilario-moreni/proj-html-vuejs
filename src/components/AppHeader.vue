<script>
import { store } from '../store';
export default {
    name: 'AppHeader',
    data(){
        return{
            store,
        }
    }
}
</script>

<template lang="">
    <div class="bg-white header_shadow fixed-top py-2">
        <div class="AppHeader container py-4">
            <!-- left-side header -->
            <div class="header_logo_container">
                <img src="/src/assets/img/construction_logo_retina.png" alt="">
            </div>
            <!-- right-side header -->
            <div class="rightside_header">
                <!-- sections -->
                <div class="mx-4">
                    <ul class="header_sections_ul">
                        <li v-for="(item, index) in store.header_sections" @click="$emit('makeActive', index)" :class="item.active ? 'activeSection' : ''" class="p-4" :key="index">
                            <div >
                                <a :href="item.url">
                                    {{ item.label }}
                                </a>
                            </div>
                            <div class="white_hover_div">

                            </div>
                        </li>
                    </ul>
                </div>
                <!-- get quote button -->
                <div>
                    <button type="button" class="rounded-0 my_button" id="get_quote_button">GET QUOTE</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @use '../styles/partials/mixin.scss';
    @use '../styles/partials/variables.scss' as *;

    .AppHeader{
        color: black;
        background-color: white;
        display: flex;
        justify-content: space-between;
    }
    
    .header_shadow{
        box-shadow: 0 0 5px 5px rgb(0 0 0 / 10%);
    }

    .header_logo_container{
        img{
            width: 190px;
            cursor: pointer;
        }
    }


    .rightside_header{
        display: flex;
        align-items: center;

    }

    .header_sections_ul{
        @include mixin.ul_flex_unstyled;
        text-transform: uppercase;
        font-weight: 500;

        li:hover{
            color: $avada_yellow;


            .white_hover_div{
                display: block;
            }
        }
    }

    .white_hover_div{
        position: absolute;
        display: none;
        height: 30px;
        width: 30px;
        background-color: white;
        bottom:-30px;
        transform: translateX(-50%) rotate(45deg);
        left:50%;
    }

    .activeSection{
        a{
            color: $avada_yellow!important ;
        }
        .white_hover_div{
            display: block;
        }
    }

    .my_button{
        @include mixin.my_button;
        transition: background-color 0.2s, color 0.2s;
        &:hover{
            color:white;
            background-color: $soft_black_2;
        }
    }
</style>