<template>
  <div class="home" v-if="!getLoaderDisplayer">
    <transition name="fade" appear>
      <a-header></a-header>
    </transition>
    <transition name="fade" appear>
      <home-1></home-1>
    </transition>
  </div>
</template>

<script>
import Home1 from '../components/Home1';
import aHeader from '../components/aHeader';

// import {  } from '../vuex/actions';
import { getLoaderDisplayerState } from '../vuex/getters';

export default {
  name: 'home',
  components: {
    Home1,
    aHeader
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
  watch: {},
  created: function() {},
	mounted: function() {},
  methods:{}
}
</script>

<style lang="scss" scoped>
@import "../styles/fonts.scss";
@import "../styles/transition.scss";

  .home{
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
  }

</style>
