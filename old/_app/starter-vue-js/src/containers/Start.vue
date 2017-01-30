<template>
  <div class="start">

    <transition name="fade" appear>
      <loader v-show="getLoaderDisplayer"></loader>
	  </transition>

    <transition name="fade" appear>
      <started v-if="!getLoaderDisplayer"></started>
    </transition>

  </div>
</template>

<script>
import Started from '../components/Started';
import Loader from '../components/Loader';

// import {  } from '../vuex/actions';
import { getLoaderDisplayerState } from '../vuex/getters';

export default {
  name: 'start',
  components: {
    Loader,
    Started,
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

  .start{
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
  }

</style>
