<template>
  <div class="aheader">
    <div class="header-logo-container">
      <div class="header-logo">
      </div>
    </div>
    <p> printer n° {{ serialNumber }} </p>
  </div>
</template>

<script>
// import { } from '../vuex/actions';
import { getListOfRessourcesState } from '../vuex/getters';

export default {
  name: 'aheader',
  components: {},
  props: ["serialNumber"],
  data () {
    return {}
  },
  vuex: {
    actions: {
    },
    getters: {
      getListOfRessources: getListOfRessourcesState
    }
  },
  watch: {},
  created: function() {},
	mounted: function() {

  },
  methods:{}
}
</script>

<style lang="scss" scoped>
@import "../styles/mixins.scss";
@import "../styles/variables.scss";

  .aheader{
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
      width: 100%;
      height: 51px;
      display: flex;
      flex-direction: row;
      .header-logo {
        margin: auto;
        width: 100%;
        height: 100%;
        background-image: url("../assets/images/logo_header.png");
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
      }
    }
    p {
      font-family: "cinetype-regular";
      right: 40px;
      color: $grey-pale-opacity;
      font-size: 0.8rem;
      opacity: 50%;
      margin: 0px;
      padding: 0px;
      @include center-y;
    }
  }


</style>
