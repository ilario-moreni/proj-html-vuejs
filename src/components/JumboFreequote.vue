<script>
export default {
    
}
</script>

<template lang="">
    <div class="bg_yellow py-5">
        <p>Do You Have A Construction Project We Can Help With?</p>
        <button type="button" class="my_button_black rounded-0">EXPLORE RECENT WORK</button>
    </div>
</template>

<style lang="scss">
@use '../styles/partials/variables.scss' as *;


    .bg_yellow{
        background-color: $avada_yellow;
        position: relative;

        p{
            text-align: center;
            font-size: 32px;
            font-weight: 400;
        }
        .my_button_black{
            border: 2px solid white;
            position: absolute;
            left: 50%;
            bottom: -3rem;
            transform: translate(-50%,-50%);
            transition: border 0.2s, color 0.2s, background-color 0.2s;
            &:hover{
                border: 2px solid black;
                background-color: white;
            }
        }
    }
</style>