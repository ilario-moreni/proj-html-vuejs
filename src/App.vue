<script>
import AppHeader from './components/AppHeader.vue';
import AppHomeMain from './components/AppHomeMain.vue';
import AppFooter from './components/AppFooter.vue';
import { store } from './store';
export default {
  components:{
    AppHeader,
    AppHomeMain,
    AppFooter
  },
  data(){
    return{
      store,
    }
  },
  methods:{
    makeActive(id){
      store.header_sections.forEach(element => {
        element.active = false
      });
      store.header_sections[id].active = true;
      store.isActiveSection = id;
    }
  }
}
</script>

<template lang="">
  <div class="App">
    <AppHeader @makeActive="makeActive" />
    <AppHomeMain />
    <AppFooter />
  </div>
</template>

<style lang="scss">
  @use './styles/general.scss';
  @use './styles/partials/variables.scss' as *;

  .App{
    min-height: 100vh;
  }
</style>