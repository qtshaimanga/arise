<template>
  <div class="aheader">
    <div class="header-logo-container">
      <div class="header-logo">
      </div>
    </div>
    <p v-if="serialNumber" id="serial-button"> printer n° {{ serialNumber }} </p>
    <div class="header-button" v-if="!serialNumber">
      <!-- <img :src="getListOfRessources.printer.file.src"/> -->
      <p id="printer-button" >
        <router-link to="/setup"> MY PRINTER </router-link>
      </p>
    </div>
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

    #serial-button{
      @include center-y;
      font-family: "cinetype-regular";
      font-size: 0.8rem;
      color: $grey-pale-opacity;
      right: 60px;  //deso
      margin: 0px;
      padding: 0px;
      @include center-y;
    }

    .header-button {
      right: 0px;
      margin: 0px;
      padding: 0px;
      background-color: #eef8f9;
      height: 100%;
      width: 200px;
      @include center-y;
      #printer-button{
        margin-top: 35px; //deso
        text-align: center;
        a{
          text-decoration: none;
          font-family: "cinetype-regular";
          font-size: 0.8rem;
          color: $grey-pale-opacity;
        }
      }
      img{
        // background-color: red;
        // width: 20px;
        // height: 20px;
      }
    }
  }


</style>
