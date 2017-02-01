<template>
  <div class="main" v-if="!getLoaderDisplayer">
    <a-header></a-header>
    <send></send>
  </div>
</template>

<script>
import Started from '../components/Started';
import Loader from '../components/Loader';
import Send from '../components/Send';
import aHeader from '../components/aHeader';

// import {  } from '../vuex/actions';
import { getLoaderDisplayerState } from '../vuex/getters';

export default {
  name: 'main-send',
  components: {
    Send,
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
  methods:{},
  events: {
    'event-resize': function (event){
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/fonts.scss";
@import "../styles/transition.scss";
@import "../styles/variables.scss";

  .header-container {
    width: 100%;
    height: 90px;
    position: absolute;
    top: 0;
    z-index: 2;
    border-bottom: 1px solid $dark-pale-pink;
    background-color: white;
    margin: 0px;
    padding: 0px;
  }

</style>
