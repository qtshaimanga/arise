<template>
  <div class="send-container">
    <div class="send-text-container" ref="textBgEl" @click="openTextPane" v-on:mouseover="mouseOverTxt">
      <div class="send-content-container send-text-landing">
        <div class="send-separator send-text-separator"></div>
        <div class="send-title">
          send text to {{ name }}
        </div>
        <div class="send-quote" ref="sendTextQuoteEl">
          What about a lyric,</br>
          a quote or a</br>
          motivation quote ?
        </div>
        <div class="send-illu-container">
          <video :src="getListOfRessources.send_txt_landing_video.file.src" width="600" height="600" ref="txtVideo" class="video-txt">
          </video>
        </div>
      </div>
      <div class="send-text-form-container" ref="sendTextForm">
        <div class="send-text-form-input-container">
          <textarea class="send-text-form-input" placeholder="Write your message here" ref="textInput">
          </textarea>
          <div class="form-separator"></div>
          <div class="font-style-container">
            <div class="font-style size">
              <div class="ico ico-size"></div>
              <div class="txt">Size</div>
            </div>
            <div class="font-style bold">
              <div class="ico ico-bold"></div>
              <div class="txt">Bold</div>
            </div>
            <div class="font-style underline">
              <div class="ico ico-underline"></div>
              <div class="txt">Underline</div>
            </div>
            <div class="font-style invert">
              <div class="ico ico-invert"></div>
              <div class="txt">Invert</div>
            </div>
          </div>
        </div>
        <div class="send-text-btn" @click="onSendText">
          send
        </div>
      </div>
    </div>
    <div class="send-image-container" ref="imageBgEl" v-on:mouseover="mouseOverImg">
      <div class="send-content-container send-image-landing" ref="imageContentEl">
        <div class="send-separator send-image-separator"></div>
        <div class="send-title" @click="sendImageClick">
          send image to {{ name }}
        </div>
        <div class="send-quote" ref="sendImageQuoteEl">
          Your worst selfie,</br>
          a meme screenshot</br>
          or a drawing
        </div>
        <div class="send-illu-container" ref="sendIlluContainer">
          <video :src="getListOfRessources.send_img_landing_video.file.src" width="800" height="800" ref="imgVideo" class="video-img">
          </video>
          <!-- <div class="send-illu">
          </div> -->
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
import User from '../assets/data/user.json'; //Test DATA
import TweenMax from 'gsap';

import { setLoaderDisplayerState, setProgressValueState, setListOfRessourcesState } from '../vuex/actions';
import { getLoaderDisplayerState, getProgressValueState, getListOfRessourcesState } from '../vuex/getters';

export default {
  name: 'send',
  components: {},
  data () {
    return {
      progress: Number(),
      name: "Anonyme",
      id: String(),
      user: User
    }
  },
  vuex: {
    actions: {
      setLoaderDisplayer: setLoaderDisplayerState,
      setProgressValue: setProgressValueState,
      setListOfRessources: setListOfRessourcesState
    },
    getters: {
      getLoaderDisplayer: getLoaderDisplayerState,
      getProgressValue: getProgressValueState,
      getListOfRessources: getListOfRessourcesState
    }
  },
  watch: {
	},
  created(){
    if( this.$route.params.id != undefined){
      this.id = this.$route.params.id;
      this.name = this.user[this.id].correpondant.name
      this.sender = this.user[this.id].expediteur.name
    }
  },
	mounted() {
    this.sendTextQuoteEl = this.$refs.sendTextQuoteEl;
    this.sendImageQuoteEl = this.$refs.sendImageQuoteEl;
    this.sendIlluContainer = this.$refs.sendIlluContainer;
    this.textBgEl = this.$refs.textBgEl;
    this.imageBgEl = this.$refs.imageBgEl;
    this.sendTextForm = this.$refs.sendTextForm;
    this.imageContentEl = this.$refs.imageContentEl;
    this.closePaneImage = this.$refs.closePaneImage;
    this.imgVideo = this.$refs.imgVideo;
    this.txtVideo = this.$refs.txtVideo;
    this.innerHeight = window.innerHeight;
    this.innerWidth = window.innerWidth;
    this.setPanesHeight();
    this.generateTimelines();
  },
  methods:{
    setPanesHeight() {
      this.textBgEl.style.height = this.innerHeight+"px";
      this.imageBgEl.style.height = this.innerHeight+"px";
    },
    mouseOverImg() {
      if (this.imgVideo.paused){
        this.imgVideo.play();
        this.imgVideo.loop = true;
      }
      if (!this.txtVideo.paused){
        this.txtVideo.pause();
      }
    },
    mouseOverTxt() {
      if (!this.imgVideo.paused){
        this.imgVideo.pause();
      }
      if (this.txtVideo.paused){
        this.txtVideo.play();
        this.txtVideo.loop = true;
      }
    },
    generateTimelines(){
      this.openSendTextPane = new TweenMax.TimelineMax({
        paused: true
      });
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
          onStart:()=>{
            this.closePaneImage.style.display = "block";
          },
          onReverseComplete:()=>{
            this.closePaneImage.style.display = "none";
          },
          opacity: 0.3
        }),"-=0.6")
        .add(TweenMax.to(this.sendTextForm, 0.3, {
          onStart:()=> {
            this.sendTextForm.style.display = "block";
          },
          onReverseComplete:()=> {
            this.sendTextForm.style.display = "none";
          },
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
      this.$http.post('http://192.168.43.190:3000/message', {message: this.message.value, name: this.sender}).then(response => {
        console.log("response : ",response);
        this.$router.push({name:'text-sent', params:{ id:this.id}});
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
  overflow: hidden;

  .send-text-separator {
    background-color: $dark-pale-yellow;
  }
  .send-illu-container {
    margin: -160px auto 20px auto;
    width: 434px;
    height: 320px;
    .send-illu {
      background-image: url("../assets/images/illu-send-txt.png");
    }
  }
  .send-text-form-container {
    opacity: 0;
    display: none;
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
      .font-style-container {
        font-family: "cinetype-regular";
        font-size: 12px;
        display: inline-block;
        padding: 15px;
        .font-style {
          display: inline-block;
          margin-left: 20px;
          cursor: pointer;
          .ico {
            width: 15px;
            height: 15px;
            float: left;
            background-repeat: no-repeat;
            background-position: center;
          }
          .txt {
            color: $grey-pale-opacity;
            margin-left: 20px;
          }
          .ico.ico-size {
            background-image: url("../assets/icons/txt-size.svg");
          }
          .ico.ico-bold {
            background-image: url("../assets/icons/txt-bold.svg");
          }
          .ico.ico-underline {
            background-image: url("../assets/icons/txt-underline.svg");
          }
          .ico.ico-invert {
            background-image: url("../assets/icons/txt-inverse.svg");
          }
        }
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
  overflow: hidden;
  cursor: pointer;

  .send-image-separator {
    background-color: $dark-pale-blue;
  }
  .send-illu-container {
    margin: -340px auto 0 auto;
    display: inline-block;
    overflow: hidden;
    .video-img {
      position: relative;
      z-index: 1;
    }
  }
}

.send-content-container {
  margin: 175px 0 0 100px;
  width: 150px;

  .send-separator {
    position: relative;
    width: 30px;
    height: 5px;
    z-index: 2;
  }
  .send-title {
    position: relative;
    font-family: "mongoose-regular";
    font-size: 52px;
    color: black;
    text-transform: uppercase;
    margin-top: 50px;
    z-index: 2;
  }
  .send-quote {
    position: relative;
    font-family: "cinetype-regular";
    font-size: 14px;
    color: $grey;
    margin-top: 50px;
    line-height: 23px;
    z-index: 2;
  }
  .send-illu-container {
    .send-illu {
      min-width: 100%;
      min-height: 100%;
      background-position: center;
      background-size: cover;
    }
    .video-img {
      overflow: hidden;
    }
  }
}
.send-text-container.open {
  cursor: default;
}

.close-pane.image {
  display: none;
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
      transform: rotate(-90deg);
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
