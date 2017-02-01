<template>
  <div class="main">
    <div class="header-container">
      <div class="header-logo-container">
        <div class="header-logo">
        </div>
      </div>
    </div>
    <transition name="fade" appear>
      <send v-if="!getLoaderDisplayer"></send>
    </transition>
  </div>
</template>

<script>
import Started from '../components/Started';
import Loader from '../components/Loader';
import Send from '../components/Send';

// import {  } from '../vuex/actions';
import { getLoaderDisplayerState } from '../vuex/getters';

export default {
  name: 'main-send',
  components: {
    Send
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

    .header-logo-container {
      margin: 20px auto 20px auto;
      width: 90px;
      height: 51px;
      .header-logo {
        min-width: 100%;
        min-height: 100%;
        background-image: url("../assets/images/logo_header.png");
        background-position: center;
        background-size: cover;
      }
    }
  }

</style>
