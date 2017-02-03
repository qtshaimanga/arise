<template>
  <div class="home7">
    <transition name="fade" appear>
      <div class="container">
        <p> TEAM </p>
        <img :src="getListOfRessources.equipe.file.src"/>
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

  .home7{
    width: 100%;
    height: 90%;
    margin: 0px;
    padding: 0px;
    background-color: #fdf6e6;
  }

  .container{
    display: flex;
    justify-content: center;
    flex-direction: column;
    p{
      padding-top: 100px; //deso
      text-align: center;
      margin: auto;
      color: $grey-pale;
      font-family: "mongoose-regular";
      font-size: 35pt;
    }
    img{
      margin: auto;
      width: 70%;
    }
  }

</style>
