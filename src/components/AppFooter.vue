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
    <div>
        <div class="bg_contacts">
            <div class="container">
                <div class="row">
                    <!-- learn-more col -->
                    <div class="col">
                        <div>
                            <img src="/src/assets/img/footer-logo.png" alt="">
                        </div>
                        <div>
                            <p class="footer_construction_p">
                                We are specialists in the construction of unique and exclusive properties. Our work inspires. We pride ourselves on delivering outstanding quality and design for leading clients across the world.
                            </p>
                        </div>
                        <div>
                            <button type="button" class="btn rounded-0" id="learn_more_button">LEARN MORE</button>
                        </div>
                    </div>
                    <div class="col"></div>
                    <div class="col"></div>
                    <div class="col"></div>
                </div>
            </div>
        </div>
        <div>
            <div class="container">
                <div class="row">
                    <div class="col">

                    </div>
                    <div class="col">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use '../styles/partials/variables.scss' as *;
    .bg_contacts{
        background-color: $soft_black;
        padding: 40px 0 80px;
        .footer_construction_p{
            padding: 20px 0;
            font-size: 14px;
            line-height: 32px;
            letter-spacing: 0.4px;
            color: $grey_font_color;
        }
    }

    #learn_more_button{
        padding: 10px 32px;
        font-weight: 500;
        background-color: $avada_yellow;
    }
</style>