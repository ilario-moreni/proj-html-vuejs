<script>
export default {
    
}
</script>

<template lang="">
    <div class="container text-center">
        <div class="row">
            <div class="col me-3 my_specialist_card rounded-3">
                <div class="front_card">
                    <div class="specialist_icon my-2"><i class="fa-regular fa-building"></i></div>
                    <h3>Buildings</h3>
                    <p>Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
                </div>
                <div class="back_card">
                    <h4>titolo</h4>
                    <p>Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum.</p>
                    <button type="button" class="rounded-0 my_button_back_card" id="get_quote_button">GET QUOTE</button>
                </div>
            </div>
            <div class="col mx-3 my_specialist_card rounded-3">
                <div class="specialist_icon my-2"><i class="fa-solid fa-rotate"></i></div>
                <h3>Renovate</h3>
                <p>Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
            </div>
            <div class="col mx-3 my_specialist_card rounded-3">
                <div class="specialist_icon my-2"><i class="fa-solid fa-house-chimney"></i></div>
                <h3>Construct</h3>
                <p>Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
            </div>
            <div class="col ms-3 my_specialist_card rounded-3">
                <div class="specialist_icon my-2"><i class="fa-solid fa-truck"></i></div>
                <h3>Exclusive</h3>
                <p>Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use '../styles/partials/variables.scss' as *;

    .my_specialist_card{
        background-color: #f5f5f5;
        width: 23.5%;
        padding: 2rem;
        position: relative;
        p{
            color: $secondary_grey_font;
        }

        .specialist_icon{
            position: relative;
            margin: 0 auto;
            border: 1px solid $soft_black;
            border-radius: 100%;
            width: 60px;
            height: 60px;
            i{
                color: $soft_black;
                font-size: 24px;
                position: absolute;
                left: 50%;
                top:50%;
                transform: translate(-50%, -50%);
            }
        }


        .back_card{
            position: absolute;
            width: 100%;
            height: 100%;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            background-color: $avada_yellow;
        }

        &:hover{

        }
    }

    .my_button_back_card{
        background-color: white;
        &:hover{
            background-color: black;
            color:white;
        }
    }
</style>