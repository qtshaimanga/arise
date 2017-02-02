<template>
  <div class="app">
    <transition name="fade" appear>
      <loader v-show="getLoaderDisplayer"></loader>
    </transition>
    <router-view class="view">
    </router-view>
  </div>
</template>

<script>
import Loader from './components/Loader';
import { getLoaderDisplayerState } from './vuex/getters';

export default {
  name: 'app',
  components: {
    Loader,
  },
  data () {
    return {}
  },
  vuex: {
    actions: {
    },
    getters:{
      getLoaderDisplayer: getLoaderDisplayerState,
    }
  },
  mounted: function() {
    //this.creditsLog();
  },
  methods:{
    creditsLog() {
     /*eslint-disable */
     console.log('%c', 'background: #ffffff; font-size: 11px; color: #f0f0f0');
     console.log('%c > Portfolio: https://quentintshaimanga.fr', 'background: #2c3e50; padding:5px; font-size: 11px; color: #ffffff');
     console.log('%c > Linkedlin: https://fr.linkedin.com/in/quentin-tshaimanga-946a5a10b', 'background: #2c3e50; padding:5px; font-size: 11px; color: #ffffff');
     console.log('%c > Twitter: https://twitter.com/quentin_tshmga', 'background: #2c3e50; padding:5px; font-size: 11px; color: #ffffff');
     console.log('%c', 'background: #ffffff; font-size: 11px; color: #f0f0f0');
     /*eslint-enable */
   }
  }
}
</script>

<style lang="scss">
  html{
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
  }

  body{
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
  }

  #app {
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
  }

  .app{
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
  }
</style>
