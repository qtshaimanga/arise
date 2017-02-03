<template>
  <div class="home1">
    <transition name="fade" appear>
    </transition>
  </div>
</template>

<script>
// import {  } from '../vuex/actions';
//import { } from '../vuex/getters';

export default {
  name: 'home',
  components: {
  },
  data () {
    return {}
  },
  vuex: {
    actions: {
    },
    getters:{
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

  .home1{
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
  }

</style>
