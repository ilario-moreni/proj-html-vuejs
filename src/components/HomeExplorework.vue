<script>
export default {
    
}
</script>

<template lang="">
    <div>
        <div class="container text-center explore_work_container">
            <div class="row">
                <div class="col">
                    <h2>Explore Recent Work</h2>
                    <hr class="my_hr mt-4 mb-5">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>
            </div>
            <div class="row justify-content-between align-items-center">
                <div class="col"><img src="/src/assets/img/project2-featured-15013609.jpg" class="project_cards" alt=""></div>
                <div class="col"><img src="/src/assets/img/project1-featured-294276386.jpg" class="project_cards" alt=""></div>
                <div class="col"><img src="/src/assets/img/project3-featured-189023420.jpg" class="project_cards" alt=""></div>
            </div>
            <div class="row">
                <div class="col view_project_button">
                    <hr>
                    <button type="button" class="rounded-0 my_button_viewproject">VIEW ALL PROJECT</button>
                    <hr>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixin.scss';


    .explore_work_container{
        padding: 80px 0;


        .project_cards{
            width: 98%;
        }
        
        p{
            color: $secondary_grey_font;
            width: 60%;
            margin: 0 auto 3.5rem;
        }
    }

    .view_project_button{
        padding: 4rem;
        display: flex;
        justify-content: space-between;

        hr{
            width: 33%;
            color: rgba(151, 151, 151, 0.5);
        }

        .my_button_viewproject{
            background-color: transparent;
            border: none;
            width: 30%;
            padding: 10px 32px;
            &:hover{
                @include mixin.my_button;
            }
        }
    }
</style>