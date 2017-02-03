<template>
  <div class="home1">
    <transition name="fade" appear>
      <video :src="getListOfRessources.box_video.file.src" ref="videoBox" class="video-txt"></video>
    </transition>
    <div class="fleche">
      <img :src="getListOfRessources.fleche.file.src"/>
    </div>
  </div>
</template>

<script>
// import {  } from '../vuex/actions';
import { getListOfRessourcesState } from '../vuex/getters';

export default {
  name: 'home1',
  components: {
  },
  data () {
    return {}
  },
  vuex: {
    actions: {
    },
    getters:{
      getListOfRessources: getListOfRessourcesState
    }
  },
  watch: {

  },
  created: function(){
  },
	mounted: function() {
    this.initVideo(this.$refs.videoBox);
  },
  methods:{
    initVideo: function(video){
      video.play();
      video.loop = false;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/mixins.scss";
@import "../styles/variables.scss";

  .home1{
    width: 100%;
    height: 110%;
    margin: 0px;
    padding: 0px;
    background-color: #fdf6e6;
  }

  video{
    width: 100%;
    height: 100%;
  }

  .fleche{
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: -120px;
    img {
      z-index: 900;
      &:hover{
        cursor: pointer;
      }
    }
  }
</style>
