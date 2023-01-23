<script>
import { store } from '../store';
export default {
    name: 'AppMain',
    data(){
        return{
            store,
        }
    }
}
</script>

<template lang="">
    <div class="AppHeader container py-4 px-0">
        <!-- left-side header -->
        <div class="header_logo_container">
            <img src="/src/assets/img/construction_logo_retina.png" alt="">
        </div>
        <!-- right-side header -->
        <div class="rightside_header">
            <!-- sections -->
            <div class="mx-4">
                <ul class="header_sections_ul">
                    <li v-for="item in store.header_sections" class="p-4">
                        <div>
                            <a :href="item.url" :class="item.active ? 'activeSection' : ''">
                                {{ item.label }}
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- get quote button -->
            <div>
                <button type="button" class="btn rounded-0 py-2 px-4" id="get_quote_button">GET QUOTE</button>
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

    .header_logo_container{
        img{
            width: 190px;
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
    }

    .activeSection{
        color: $avada_yellow!important ;
    }

    #get_quote_button{
        font-weight: 500;
        background-color: $avada_yellow;
    }
</style>