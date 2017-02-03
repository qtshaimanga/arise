<template>
  <div class="home2">
    <transition name="fade" appear>
      <div class="container">
        <p>
          <span>Arise</span> is a mini printer </br> that will brighten your day </br>
          by printing little notes or </br>
          ven images sent by members </br>
          of your family or your </br>
          closes friends
        </p>
        <div id="planer">
          <img :src="getListOfRessources.planer.file.src"/>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
// import {  } from '../vuex/actions';
import { getListOfRessourcesState } from '../vuex/getters';

export default {
  name: 'home2',
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
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/mixins.scss";
@import "../styles/variables.scss";

  .home2{
    width: 100%;
    height: 80%;
    margin: 0px;
    padding: 0px;
    background-color: #fdf6e6
  }

  .container{
    display: flex;
    justify-content: center;
    p{
      z-index: 10;
      padding-top: 100px; //deso
      text-align: center;
      margin: auto;
      color: $grey-pale;
      font-family: "mongoose-regular";
      font-size: 35pt;
      span{
        color: #d5af66;
      }
    }
    #planer{
      img{
        width: 400px;
        position: absolute;
        left: 200px;
      }
    }
  }

</style>
