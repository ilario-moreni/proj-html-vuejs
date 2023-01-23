<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import { store } from './store';
export default {
  components:{
    AppHeader,
    AppMain,
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
    <AppMain />
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