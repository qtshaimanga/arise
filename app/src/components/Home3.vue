<template>
  <div class="home3">
    <div class="container">
      <p>VIDEO</p>
      <video :src="getListOfRessources.teaser.file.src" width="900px"  height="auto "ref="videoBox" class="video-txt" @click="initVideo();"></video>
    </div>
  </div>
</template>

<script>
// import {  } from '../vuex/actions';
import { getListOfRessourcesState } from '../vuex/getters';

export default {
  name: 'home3',
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

  },
  methods:{
    initVideo: function(){
      this.$refs.videoBox.play();
      this.$refs.videoBox.loop = false;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/mixins.scss";
@import "../styles/variables.scss";

  .home3{
    width: 100%;
    height: 90%;
    margin: 0px;
    padding: 0px;
  }

  .container{
    margin-top: 100px;
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    p{
      margin-left: auto;
      margin-right: auto;
      margin-top: auto;
      color: $grey-pale;
      font-family: "mongoose-regular";
      font-size: 35pt;
    }
    video{
      width: 800px;
      height: auto;
      margin:auto;
      &:hover{
        cursor: pointer;
      }
    }
  }

</style>
