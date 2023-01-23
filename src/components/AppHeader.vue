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
    <div class="AppHeader container py-5">
        <!-- left-side header -->
        <div>
            <img src="/src/assets/img/construction_logo.png" alt="">
        </div>
        <!-- right-side header -->
        <div class="rightside_header">
            <!-- sections -->
            <div>
                <ul class="header_sections_ul">
                    <li v-for="item in store.header_sections" class="p-3">
                        <div>
                            <a :href="item.url">
                                {{ item.label }}
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- get quote button -->
            <div>
                <button type="button" class="btn bg-warning rounded-0">GET QUOTE</button>
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


    .rightside_header{
        display: flex;
    }

    .header_sections_ul{
        @include mixin.ul_flex_unstyled;
        text-transform: uppercase;
    }

    
</style>