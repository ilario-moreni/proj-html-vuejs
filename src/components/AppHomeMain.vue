<script>
import AppHomeJumbo from './AppHomeJumbo.vue';
import HomeSectionSpecialist from './HomeSectionSpecialist.vue';
import HomeOurnumbers from './HomeOurnumbers.vue';
import HomeExplorework from './HomeExplorework.vue'
export default {
    name: 'AppHomeMain',
    components:{
        AppHomeJumbo,
        HomeSectionSpecialist,
        HomeOurnumbers,
        HomeExplorework
    }
}
</script>

<template lang="">
    <div>
        <AppHomeJumbo />
        <HomeSectionSpecialist />
        <HomeOurnumbers />
        <HomeExplorework />
    </div>
</template>

<style lang="">
    
</style>