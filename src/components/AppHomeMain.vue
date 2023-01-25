<script>
import AppHomeJumbo from './AppHomeJumbo.vue';
import HomeSectionSpecialist from './HomeSectionSpecialist.vue';
import HomeOurnumbers from './HomeOurnumbers.vue';
import HomeExplorework from './HomeExplorework.vue';
import HomePartners from './HomePartners.vue';
export default {
    name: 'AppHomeMain',
    components:{
        AppHomeJumbo,
        HomeSectionSpecialist,
        HomeOurnumbers,
        HomeExplorework,
        HomePartners
    }
}
</script>

<template lang="">
    <div>
        <AppHomeJumbo />
        <HomeSectionSpecialist />
        <HomeOurnumbers />
        <HomeExplorework />
        <HomePartners />
    </div>
</template>

<style lang="">
    
</style>