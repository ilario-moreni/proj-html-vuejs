<script>
import { store } from '../store';
export default {
    name: 'AppFooter',
    data(){
        return{
            store,
        }
    }
}
</script>

<template lang="">
    <div>
        <!-- contacts -->
        <div class="bg_contacts">
            <div class="container">
                <div class="row row-cols-4 gx-5">
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
                            <button type="button" class="rounded-0 my_button" id="learn_more_button">LEARN MORE</button>
                        </div>
                    </div>
                    <!-- latest-tweets col -->
                    <div class="col">
                        <h3>Latest tweets</h3>
                        <iframe id="twitter-widget-0" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" class="" style="position: static; visibility: visible; width: 300px; height: 400px; display: block; flex-grow: 1;" title="Twitter Timeline" src="https://syndication.twitter.com/srv/timeline-profile/screen-name/Theme_Fusion?dnt=true&amp;embedId=twitter-widget-0&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfaG9yaXpvbl90aW1lbGluZV8xMjAzNCI6eyJidWNrZXQiOiJ0cmVhdG1lbnQiLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3R3ZWV0X2VkaXRfYmFja2VuZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfcmVmc3JjX3Nlc3Npb24iOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3Nob3dfYnVzaW5lc3NfdmVyaWZpZWRfYmFkZ2UiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2NoaW5fcGlsbHNfMTQ3NDEiOnsiYnVja2V0IjoiY29sb3JfaWNvbnMiLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3R3ZWV0X3Jlc3VsdF9taWdyYXRpb25fMTM5NzkiOnsiYnVja2V0IjoidHdlZXRfcmVzdWx0IiwidmVyc2lvbiI6bnVsbH0sInRmd19taXhlZF9tZWRpYV8xNTg5NyI6eyJidWNrZXQiOiJ0cmVhdG1lbnQiLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3NlbnNpdGl2ZV9tZWRpYV9pbnRlcnN0aXRpYWxfMTM5NjMiOnsiYnVja2V0IjoiaW50ZXJzdGl0aWFsIiwidmVyc2lvbiI6bnVsbH0sInRmd19leHBlcmltZW50c19jb29raWVfZXhwaXJhdGlvbiI6eyJidWNrZXQiOjEyMDk2MDAsInZlcnNpb24iOm51bGx9LCJ0ZndfZHVwbGljYXRlX3NjcmliZXNfdG9fc2V0dGluZ3MiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3ZpZGVvX2hsc19keW5hbWljX21hbmlmZXN0c18xNTA4MiI6eyJidWNrZXQiOiJ0cnVlX2JpdHJhdGUiLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3Nob3dfYmx1ZV92ZXJpZmllZF9iYWRnZSI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfbGVnYWN5X3RpbWVsaW5lX3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0Zndfc2hvd19nb3ZfdmVyaWZpZWRfYmFkZ2UiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3Nob3dfYnVzaW5lc3NfYWZmaWxpYXRlX2JhZGdlIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd190d2VldF9lZGl0X2Zyb250ZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH19&amp;frame=false&amp;hideBorder=true&amp;hideFooter=true&amp;hideHeader=true&amp;hideScrollBar=false&amp;lang=en&amp;limit=1&amp;maxHeight=400px&amp;origin=https%3A%2F%2Favada.theme-fusion.com%2Fconstruction%2F&amp;sessionId=ccb5c9535fc0d59472bf5f724488bdc80addaec9&amp;showHeader=false&amp;showReplies=false&amp;theme=dark&amp;transparent=true&amp;widgetsVersion=2b959255e8896%3A1673658205745"></iframe>
                    </div>
                    <div class="col">
                        <h3>Contact us today</h3>
                        <ul class="footer_contacts_ul">
                            <li v-for="item in store.contacts">
                                <div><i :class="item.icon"></i></div>
                                <div class="font_14">{{item.contact_info}}</div>
                            </li>
                        </ul>
                    </div>
                    <div class="col">
                        <h3>Our location</h3>
                        <div>
                            <img class='maps_image' src="/src/assets/img/maps_image.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- socials -->
        <div class="bg_socials py-4">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-auto">
                        <span>
                            ©COPYRIGHT 2012 - 2023 | AVADA THEME BY <a href="">THEMEFUSION</a>  | ALL RIGHTS RESERVED | POWERED BY <a href="">WORDPRESS</a> 
                        </span>
                    </div>
                    <div class="col-auto">
                        <div>
                            <i v-for="item in store.social" :class="item.icon" class="social_icon" :href="item.url"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixin.scss';

    .bg_contacts{
        background-color: $soft_black;
        padding: 40px 0 80px;

        h3{
            font-size:16px;
            font-weight: 700;
            text-transform: uppercase;
            color: $avada_yellow;
            margin-bottom: 2rem;
        }

        .footer_construction_p{
            padding: 20px 0;
            font-size: 14px;
            line-height: 32px;
            letter-spacing: 0.4px;
            color: $grey_font_color;
        }
    }

    

    .footer_contacts_ul{
        @include mixin.ul_flex_unstyled;
        flex-direction: column;
        color: $grey_font_color;
        

        li{
            display: flex;
            margin-bottom: 1rem;
            gap: 1rem;

        }

        .font_14{
            font-size: 14px;
        }
    }

    .maps_image{
        width: 100%;
        height: 100%;
    }

    .bg_socials{
        background-color: black;
        color: $grey_font_color;
        

        span{
            font-size: 12px;
            letter-spacing: 0;
        }
        a{
            font-size: 12px;
            color:darkgray;
            text-decoration: none;
        }

        .social_icon{
            font-size:18px;
            margin-left: 1.5rem;
        }
    }
</style>