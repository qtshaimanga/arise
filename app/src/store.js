import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  loaderDisplayer: Boolean(true),
  resources: Object(),
  progressValue: Number(),
}

const mutations = {
  LOADERDISPLAYER (state, display) {
    if(display === undefined){
      state.loaderDisplayer = state.loaderDisplayer ? false : state.loaderDisplayer ? false : true;
    }else if(typeof display === "boolean"){
      state.loaderDisplayer = display;
    }else{
      throw new Error("variable for LoaderDisplayer state invalid");
    }
  },
  RESOURCES (state, resource) {
    state.resources[resource.id] = resource;
  },
  PROGRESSVALUE (state, progress) {
    state.progressValue = progress;
  }
}

export default new Vuex.Store({
  state,
  mutations
})
