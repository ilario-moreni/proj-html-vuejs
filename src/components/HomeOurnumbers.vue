<script>
export default {
    
}
</script>

<template lang="">
    <div class="ournumbers_bg">
       <!--  <div class="rounded_top_div_white-left">

        </div>
        <div class="rounded_top_div_white-right">

        </div> -->
        <div  class="container my_number_row text-center">
            <div>
                <div><i class="my_icon rotate-180 fa-solid fa-tablet"></i></div>
                <div class="numbers">3534</div>
                <div class="ournumbers_type">PLANNING APPLICATIONS</div>
            </div>
            <div>
                <div><i class="my_icon  fa-regular fa-building"></i></div>
                <div class="numbers">896</div>
                <div class="ournumbers_type">COMPLETED PROJECTS</div>
            </div>
            <div>
                <div><i class="my_icon  fa-solid fa-users"></i></div>
                <div class="numbers">172</div>
                <div class="ournumbers_type">TRAINED PROFESSIONALS</div>
            </div>
            <div>
                <div><i class="my_icon  fa-solid fa-globe"></i></div>
                <div class="numbers">19</div>
                <div class="ournumbers_type">INTERNATIONAL OFFICES</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use '../styles/partials/variables.scss' as *;

.my_number_row{
    display: flex;
    justify-content: space-between;
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%, -50%);
}

.ournumbers_bg{
    z-index: -1;
    position: relative;
    background-image: url(../assets/img/home-244125289.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    aspect-ratio: 2000 / 1231;
    /* .rounded_top_div_white-left{
        z-index: 0;
        top: 0;
        left: 0%;
        transform: scale(1.2,0.8) translateY(-50%);

        position: absolute;
        width: 50%;
        aspect-ratio: 100 / 15;
        background-color: white;
        border-bottom-left-radius: 100%;
    }
    .rounded_top_div_white-right{
        z-index: 0;
        top: 0;
        right: 0;
        transform: scale(1.2,1) translateY(-50%);

        position: absolute;
        width: 50%;
        aspect-ratio: 100 / 15;
        background-color: white;
        border-end-end-radius: 100%;
    } */
    .my_icon{
        font-size: 120px;
        color: $avada_yellow;
    }
    .rotate-180{
        transform: rotate(0.5turn);
    }

    .numbers{
        color: $avada_yellow;
        font-size: 64px;
    }

    .ournumbers_type{
        color:white;
        font-size: 18px;
    }
}
</style>