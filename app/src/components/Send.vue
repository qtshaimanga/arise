<template>
  <div class="send-container">
    <div class="send-text-container" ref="textBgEl" @click="openTextPane">
      <div class="send-content-container send-text-landing">
        <div class="send-separator send-text-separator"></div>
        <div class="send-title">
          send text to jantana
        </div>
        <div class="send-quote" ref="sendTextQuoteEl">
          What about a lyric,</br>
          a quote or a</br>
          motivation quote ?
        </div>
        <div class="send-illu-container">
          <div class="send-illu">
          </div>
        </div>
      </div>
      <div class="send-text-form-container" ref="sendTextForm">
        <div class="send-text-form-input-container">
          <textarea class="send-text-form-input" placeholder="Write your message here" ref="textInput">
          </textarea>
          <div class="form-separator"></div>
        </div>
        <div class="send-text-btn" @click="onSendText">
          send
        </div>
      </div>
    </div>
    <div class="send-image-container" ref="imageBgEl">
      <div class="send-content-container send-image-landing" ref="imageContentEl">
        <div class="send-separator send-image-separator"></div>
        <div class="send-title" @click="sendImageClick">
          send image to jantana
        </div>
        <div class="send-quote" ref="sendImageQuoteEl">
          Your worst selfie,</br>
          a meme screenshot</br>
          or a drawing
        </div>
        <div class="send-illu-container">
          <div class="send-illu">
          </div>
        </div>
      </div>
      <div class="close-pane image" ref="closePaneImage" @click="closeTextPane">
        <div class="cross">
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
	mounted() {
    this.sendTextQuoteEl = this.$refs.sendTextQuoteEl;
    this.sendImageQuoteEl = this.$refs.sendImageQuoteEl;
    this.textBgEl = this.$refs.textBgEl;
    this.imageBgEl = this.$refs.imageBgEl;
    this.sendTextForm = this.$refs.sendTextForm;
    this.imageContentEl = this.$refs.imageContentEl;
    this.closePaneImage = this.$refs.closePaneImage;
    this.openSendTextPane = new TweenMax.TimelineMax({
      paused: true
    });
    this.setPanesHeight();
    this.generateTimelines();
  },
  methods:{
    setPanesHeight() {
      this.textBgEl.style.height = window.innerHeight+"px";
      this.imageBgEl.style.height = window.innerHeight+"px";
    },
    generateTimelines(){
      this.textBgElCloseTween = TweenMax.to(this.textBgEl, 0.9, {
        width: "90%",
        ease: Expo.easeOut
      })
      this.imageBgElCloseTween = TweenMax.to(this.imageBgEl, 0.9, {
        width: "10%",
        ease: Expo.easeOut
      })
      this.openSendTextPane
        .add(this.textBgElCloseTween)
        .add(this.imageBgElCloseTween ,"-=0.9")
        .add(TweenMax.to(this.imageContentEl, 0.4, {
          opacity: 0
        }),"-=0.9")
        .add(TweenMax.to(this.sendTextQuoteEl, 0.5, {
          opacity: 0
        }),"-=0.5")
        .add(TweenMax.to(this.closePaneImage, 0.3, {
          opacity: 0.3
        }),"-=0.6")
        .add(TweenMax.to(this.sendTextForm, 0.3, {
          opacity: 1
        }),"-=0.6")
    },
    openTextPane() {
      this.textBgEl.className = "send-text-container open";
      this.textBgElCloseTween.updateTo({ease:Expo.easeOut});
      this.imageBgElCloseTween.updateTo({ease:Expo.easeOut});
      this.openSendTextPane.play();
    },
    sendImageClick() {

    },
    closeTextPane() {
      this.textBgEl.className = "send-text-container";
      this.textBgElCloseTween.updateTo({ease:Expo.easeInOut});
      this.imageBgElCloseTween.updateTo({ease:Expo.easeInOut});
      this.openSendTextPane.reverse();
    },
    onSendText() {
      this.message = this.$refs.textInput;
      this.$http.post('http://localhost:3000/message', {message: this.message.value}).then(response => {
        console.log("response : ",response);
        this.$router.push('/text-sent')
      }, response => {
        // error callback
      });
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/mixins.scss";
@import "../styles/variables.scss";
@import "../styles/fonts.scss";
@import "../styles/mixins.scss";

.send-text-container {
  float: left;
  width: 50%;
  height: 100%;
  left: 0;
  background-color: $pale-yellow;
  cursor: pointer;

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
  .send-text-form-container {
    opacity: 0;
    width: 350px;
    left: 50%;
    top: 245px;
    position: absolute;
    font-family: "cinetype-regular";
    color: $grey;

    .send-text-form-input-container {
      background-color: white;
      width: 100%;
      height: 375px;
      .send-text-form-input {
        font-size: 14px;
        border: none;
        width: 325px;
        height: 300px;
        padding: 25px 0 0 25px;
        resize: none;
        outline: none;
      }
      .send-text-form-input::-webkit-input-placeholder {
        color: $grey;
        font-size: 14px;
        text-shadow: none;
        -webkit-text-fill-color: initial;
      }
      .form-separator {
        width: 300px;
        background-color: $grey;
        opacity: 0.2;
        height: 1px;
        margin: 0 auto;
      }
    }
    .send-text-btn {
      font-family: "mongoose-regular";
      font-size: 25px;
      background-color: $dark-pale-yellow;
      color: white;
      width: 150px;
      height: 60px;
      text-transform: uppercase;
      line-height: 65px;
      margin-top: 60px;
      padding-left: 15px;
      cursor: pointer;
    }
  }
}
.send-image-container {
  float: right;
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
  margin: 175px 0 0 100px;
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
.send-text-container.open {
  cursor: default;
}

.close-pane.image {
  @include center-y;
  margin-left: 50px;
  border: 1px solid #69a5a4;
  opacity: 0;
  border-radius: 20px;
  height: 40px;
  width: 40px;
  cursor: pointer;
  &:hover {
    .cross {
      transform: rotate(90deg);
    }
  }
  .cross {
    position: absolute;
    top: 14px;
    left: 14px;
    background-image: url('../assets/icons/cross-blue.svg');
    background-size: cover;
    background-repeat: no-repeat;
    width: 13px;
    height: 13px;
    @include transition( all .1s ease-in);
  }
}

</style>
