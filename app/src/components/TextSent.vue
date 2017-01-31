<template>
  <div class="text-sent-container">
    <div class="header-container">
      <div class="header-logo-container">
        <div class="header-logo">
        </div>
      </div>
    </div>
    <div class="text-sent-center-container">
      <div class="text-sent-title">
        yay !
      </div>
      <div class="text-sent-quote">
        Your text is printed. Jantana is gonna</br>
        be very happy to see it.
      </div>
      <div class="return-send-btn" @click="goSend">
        send something else
      </div>
    </div>
  </div>
</template>

<script>
import TweenMax from 'gsap';
import AssetsLoader from 'assets-loader';
import Assets from '../services/assets';

import { setLoaderDisplayerState, setProgressValueState, setListOfAssetsState } from '../vuex/actions';
import { getLoaderDisplayerState, getProgressValueState, getListOfAssetsState } from '../vuex/getters';

export default {
  name: 'text-sent',
  components: {},
  data () {
    return {
      progress: Number(),
    }
  },
  vuex: {
    actions: {
      setLoaderDisplayer: setLoaderDisplayerState,
      setProgressValue: setProgressValueState,
      setListOfAssets: setListOfAssetsState
    },
    getters: {
      getLoaderDisplayer: getLoaderDisplayerState,
      getProgressValue: getProgressValueState,
      getListOfAssets: getListOfAssetsState
    }
  },
  watch: {
	},
	mounted() {
  },
  methods:{
    goSend() {
      this.$router.push('/send');
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/mixins.scss";
@import "../styles/variables.scss";
@import "../styles/fonts.scss";

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
.text-sent-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: $pale-pink;

  .text-sent-center-container {
    @include center-xy;
    text-align: center;
    display: inline-block;
    width: 400px;
    .text-sent-title {
      font-family: "mongoose-regular";
      font-size: 40px;
      color: black;
      text-transform: uppercase;
    }
    .text-sent-quote {
      margin-top: 60px;
      font-family: "cinetype-regular";
      font-size: 17px;
      line-height: 32px;
      color: black;
    }
    .return-send-btn {
      font-family: "mongoose-regular";
      font-size: 25px;
      background-color: $orange;
      color: white;
      width: 200px;
      height: 60px;
      text-transform: uppercase;
      line-height: 65px;
      margin: 60px auto 0 auto;
      letter-spacing: 2px;
      // padding-left: 15px;
      cursor: pointer;
    }
  }
}

</style>
