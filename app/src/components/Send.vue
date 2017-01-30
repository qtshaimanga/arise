<template>
  <div class="send-container">
    <div class="send-text-container">
      <div class="send-content-container send-text-landing">
        <div class="send-separator send-text-separator"></div>
        <div class="send-title">
          send text to jantana
        </div>
        <div class="send-quote">
          What about a lyric,</br>
          a quote or a</br>
          motivation quote ?
        </div>
        <div class="send-illu-container">
          <div class="send-illu">
          </div>
        </div>
      </div>
    </div>
    <div class="send-image-container">
      <div class="send-content-container send-image-landing">
        <div class="send-separator send-image-separator"></div>
        <div class="send-title">
          send image to jantana
        </div>
        <div class="send-quote">
          Your worst selfie,</br>
          a meme screenshot</br>
          or a drawing
        </div>
        <div class="send-illu-container">
          <div class="send-illu">
          </div>
        </div>
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
  name: 'send',
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
  created: function() {
  },
	mounted: function() {
  },
  methods:{
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/mixins.scss";
@import "../styles/variables.scss";
@import "../styles/fonts.scss";

.send-text-container {
  position: absolute;
  width: 50%;
  height: 100%;
  left: 0;
  background-color: $pale-yellow;

  .send-text-separator {
    background-color: $dark-pale-yellow;
  }
  .send-illu-container {
    margin: -30px auto 20px auto;
    width: 434px;
    height: 320px;
    .send-illu {
      background-image: url("../assets/images/illu-send-txt.png");
    }
  }

}
.send-image-container {
  position: absolute;
  width: 50%;
  height: 100%;
  right: 0;
  background-color: $pale-blue;

  .send-image-separator {
    background-color: $dark-pale-blue;
  }
  .send-illu-container {
    margin: -150px auto 20px auto;
    width: 434px;
    height: 420px;
    .send-illu {
      background-image: url("../assets/images/illu-send-img.png");
    }
  }

}
.send-content-container {
  margin: 75px 0 0 100px;
  width: 150px;

  .send-separator {
    width: 30px;
    height: 5px;
  }
  .send-title {
    font-family: "mongoose-regular";
    font-size: 52px;
    color: black;
    text-transform: uppercase;
    margin-top: 50px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  .send-quote {
    font-family: "cinetype-regular";
    font-size: 14px;
    color: $grey;
    margin-top: 50px;
    line-height: 23px;
  }
  .send-illu-container {
    .send-illu {
      min-width: 100%;
      min-height: 100%;
      background-position: center;
      background-size: cover;
    }
  }
}

</style>
