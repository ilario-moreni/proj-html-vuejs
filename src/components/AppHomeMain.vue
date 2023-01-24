<script>
import AppHomeJumbo from './AppHomeJumbo.vue';
import HomeSectionSpecialist from './HomeSectionSpecialist.vue';
import HomeOurnumbers from './HomeOurnumbers.vue';
export default {
    name: 'AppHomeMain',
    components:{
        AppHomeJumbo,
        HomeSectionSpecialist,
        HomeOurnumbers
    }
}
</script>

<template lang="">
    <div>
        <AppHomeJumbo />
        <HomeSectionSpecialist />
        <HomeOurnumbers />
    </div>
</template>

<style lang="">
    
</style>