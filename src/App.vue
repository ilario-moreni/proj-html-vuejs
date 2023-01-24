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
  }
}
</script>

<template lang="">
  <div class="App">
    <AppHeader />
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