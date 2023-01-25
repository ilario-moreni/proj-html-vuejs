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
                <div class="col project_cards">
                    <img src="/src/assets/img/project2-featured-15013609.jpg" class="" alt="">
                    <div class="show_hover">
                        <div class="show_hover_content">
                            <div class="d-flex justify-content-center mb-3">
                                <div class="work_icon me-3"><a href="#"><i class="fa-solid fa-link"></i></a></div>
                                <div class="work_icon ms-3"><a href="#"><i class="fa-solid fa-magnifying-glass"></i></a></div>
                            </div>
                            <div>
                                <h5>
                                    Florida Heath Facility
                                </h5>
                            </div>
                            <div class="font_12 mt-2">Commercial</div>
                        </div>
                    </div>
                </div>
                <div class="col project_cards">
                    <img src="/src/assets/img/project1-featured-294276386.jpg" class="" alt="">
                    <div class="show_hover">
                        <div class="show_hover_content">
                            <div class="d-flex justify-content-center mb-3">
                                <div class="work_icon me-3"><a href="#"><i class="fa-solid fa-link"></i></a></div>
                                <div class="work_icon ms-3"><a href="#"><i class="fa-solid fa-magnifying-glass"></i></a></div>
                            </div>
                            <div>
                                <h5>
                                    Maine Modernity
                                </h5>
                            </div>
                            <div class="font_12 mt-2">Residential</div>
                        </div>
                    </div>
                </div>
                <div class="col project_cards">
                    <img src="/src/assets/img/project3-featured-189023420.jpg" class="" alt="">
                    <div class="show_hover">
                        <div class="show_hover_content">
                            <div class="d-flex justify-content-center mb-3">
                                <div class="work_icon me-3"><a href="#"><i class="fa-solid fa-link"></i></a></div>
                                <div class="work_icon ms-3"><a href="#"><i class="fa-solid fa-magnifying-glass"></i></a></div>
                            </div>
                            <div>
                                <h5>Exclusive Urban Living</h5>
                            </div>
                            <div class="font_12 mt-2">Commercial</div>
                        </div>
                    </div>
                </div>
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
            position: relative;
            img{
                width: 100%;
            }
            
            .show_hover{
                transition: opacity 0.3s, transform 0.4s;
                transform: scale(1, 0);
                z-index: 2;
                height: 100%;
                width: calc( 100% - 22.5px);
                opacity: 0;
                position: absolute;
                bottom: 0;
                left:11.25px;
                .show_hover_content{
                    color:white;
                    width: 60%;
                    height: 40%;
                    position:absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    .work_icon{
                        width: 40px;
                        height: 40px;
                        background-color: white;
                        border-radius: 100%;
                        position: relative;
                        padding: 1.6rem;
                        i{  
                            font-size: 18px;
                            color: $soft_black_2;
                            position:absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                        }
                    }
                    .font_12{
                        font-size: 12px;
                    }
                }

            }

            &:hover{
                .show_hover{
                    opacity: 1;
                    background-color: $avada_yellow;
                    transform: scale(1, 1)
                }
            }
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
            transition: background-color 0.2s;
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