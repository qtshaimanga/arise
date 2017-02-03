<template>
  <div class="home8">
    <transition name="fade" appear>
      <div class="container">
        <img :src="getListOfRessources.gobelins.file.src"/>
        <p>Arise is a school project made at Gobelins, l'école de</br> l'image, during a three weeks IOT workshop</p>
      </div>
    </transition>
  </div>
</template>

<script>
// import {  } from '../vuex/actions';
import { getListOfRessourcesState } from '../vuex/getters';

export default {
  name: 'home8',
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

  .home8{
    width: 100%;
    height: 70%;
    margin: 0px;
    padding: 0px;
  }

  .container{
    display: flex;
    justify-content: center;
    flex-direction: column;
    img{
      margin: auto;
      margin-top: 180px;
    }
    p{
      text-align: center;
      margin: auto;
      margin-top: 20px;
      font-family: "cinetype-regular";
      font-size: 12pt;
      color: $grey-pale-opacity;
    }
  }

</style>
