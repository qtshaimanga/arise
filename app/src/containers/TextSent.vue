<template>
  <div class="text-sent-container" v-if="!getLoaderDisplayer">
    <a-header></a-header>
    <div class="text-sent-center-container">
      <div class="text-sent-title">
        yay !
      </div>
      <div class="text-sent-quote">
        Your text is printed. {{ name }} is gonna</br>
        be very happy to see it.
      </div>
      <div class="return-send-btn" @click="goSend">
        send something else
      </div>
    </div>
  </div>
</template>

<script>
import User from '../assets/data/user.json'; //Test DATA
import aHeader from '../components/aHeader';
import TweenMax from 'gsap';

import { setLoaderDisplayerState, setProgressValueState, setListOfRessourcesState } from '../vuex/actions';
import { getLoaderDisplayerState, getProgressValueState, getListOfRessourcesState } from '../vuex/getters';

export default {
  name: 'text-sent',
  components: {
    aHeader,
  },
  data () {
    return {
      progress: Number(),
      name: "Anonyme",
      user: User,
      id: String()
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
  created: function() {
    if( this.$route.params.id != undefined){
        this.id = this.$route.params.id;
        this.name = this.user[this.id].correpondant.name
    }
  },
	mounted() {
  },
  methods:{
    goSend() {
      this.$router.push({name:'send', params:{ id:this.id}});
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
