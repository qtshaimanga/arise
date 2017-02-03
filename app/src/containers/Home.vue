<template>
  <div class="home" v-if="!getLoaderDisplayer">
    <transition name="fade" appear>
      <a-header></a-header>
    </transition>
    <transition name="fade" appear>
      <home-1></home-1>
    </transition>
    <transition name="fade" appear>
      <home-2></home-2>
    </transition>
    <transition name="fade" appear>
      <home-3></home-3>
    </transition>
    <transition name="fade" appear>
      <home-7></home-7>
    </transition>
    <transition name="fade" appear>
      <home-8></home-8>
    </transition>
  </div>
</template>

<script>
import Home1 from '../components/Home1';
import Home2 from '../components/Home2';
import Home3 from '../components/Home3';
import Home7 from '../components/Home7';
import Home8 from '../components/Home8';

import aHeader from '../components/aHeader';

// import {  } from '../vuex/actions';
import { getLoaderDisplayerState } from '../vuex/getters';

export default {
  name: 'home',
  components: {
    Home1,
    Home2,
    Home3,
    Home7,
    Home8,
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
@import "../styles/mixins.scss";
@import "../styles/variables.scss";

  .home{
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
  }

</style>
