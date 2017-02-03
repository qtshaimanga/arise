<template>
  <div class="set-up" v-if="!getLoaderDisplayer">
    <div class="container">
      <transition name="test" appear>
        <img ref="logo" v-show="true" :src="getListOfRessources.logo_header.file.src"/>
      </transition>
      <div>
        <input type="text" name="code" @keyup.enter="gotToInvite" maxlength="4">
      </div>
      <p>Please enter the code </br> written on the paper</p>
    </div>
    <div class="elementBottom"></div>
  </div>
</template>

<script>
import {TweenMax}  from 'gsap';
// import { } from '../vuex/actions';
import { getListOfRessourcesState, getLoaderDisplayerState } from '../vuex/getters';

export default {
  name: 'setUp',
  components: {},
  data () {
    return {
      logo: Object()
    }
  },
  vuex: {
    actions: {
    },
    getters: {
      getLoaderDisplayer: getLoaderDisplayerState,
      getListOfRessources: getListOfRessourcesState
    }
  },
  watch: {
    getLoaderDisplayer: function(){
      //console.log(this.getListOfRessources);
    }
  },
  created: function() {},
	mounted: function() {
  },
  updated: function(){
    TweenMax.from(this.$refs.logo, 0.5, { y:-10 , opacity:0 , ease:Power1.easeInOut });
  },
  methods:{
    gotToInvite: function (event){
      event.preventDefault();
      if( event.target.value != ""){
        this.$router.push({name:'invite',  params: {id:event.target.value}});
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/mixins.scss";
@import "../styles/variables.scss";

  .set-up{
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    display: flex;
    justify-content: center;
  }

  .container{
    flex-wrap: wrap;
    flex-direction: column;
    margin: auto;
    align-content: center;
    img{
      width: 50%;
      margin-left: 50%;
      transform: translate3d(-50%, 0%, 0);
      align-self: center;
      margin-bottom: 25%;
    }
    input{
      width: 270px;
      height: 100px;
      border: solid 2px $grey-pale;
      font-family: "mongoose-regular";
      font-size: 35pt;
      letter-spacing: 40px;
      text-align: center;
      padding-left: 30px;
    }

    p{
      text-align: center;
      margin-top: 25%;
    }
  }

  .elementBottom{
    position: absolute;
    width: 100%;
    height: 50%;
    margin-bottom: auto;
    padding: 0px;
    background-color: $pink-pale;
    bottom: 0px;
    z-index: -100;
  }

</style>
