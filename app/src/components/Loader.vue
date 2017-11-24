<template>
  <div class="loader">
    <div class="container">
      <div id="progress-counter">{{ progress }}%</div>
      <div id="progress-bar"></div>
    </div>
  </div>
</template>

<script>
import TweenMax from 'gsap';
import AssetsLoader from 'assets-loader';
import Resources from '../services/resources';

import { setLoaderDisplayerState, setProgressValueState, setListOfRessourcesState } from '../vuex/actions';
import { getLoaderDisplayerState, getProgressValueState, getListOfRessourcesState } from '../vuex/getters';

export default {
  name: 'loader',
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
      setListOfRessources: setListOfRessourcesState
    },
    getters: {
      getLoaderDisplayer: getLoaderDisplayerState,
      getProgressValue: getProgressValueState,
      getListOfRessources: getListOfRessourcesState
    }
  },
  watch: {
		getProgressValue: function(){
      //TODO TIME
			TweenMax.to(this, 1, {
				progress: this.getProgressValue,
				onUpdate: () => {
					this.progress = Math.ceil( this.progress );
					TweenMax.set('#progress-bar', { width: this.progress+"%" });
				},
        onComplete: () =>{
        var that = this;
        setTimeout(function(){
          that.setLoaderDisplayer(false);
         }, 1000);
        }
			});
		}
	},
  created: function() {
    this.initResourcesWithLoader();
  },
	mounted: function() {
  },
  methods:{
    initResourcesWithLoader: function(){
      var that = this;
      var audioContext = new AudioContext();
      var loader = new AssetsLoader({
        webAudioContext: audioContext,
      })
      .add(Resources)
      .on('error', function(error) {
        console.log("loading error", error);
      })
      .on('progress', function(progress) {
        that.setProgressValue((progress * 100).toFixed());
      })
      .on('complete', function(map) {
        loader.get().forEach(function(resource) {
          that.setListOfRessources(resource);
        });
      })
      .start();
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/mixins.scss";
@import "../styles/variables.scss";

  .loader{
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    display: flex;
    justify-content: center;
  }

  .container{
    width: 10%;
    height: 10%;
    margin: auto;
    #progress-bar{
      width: 0px;
      height: 3px;
      background-color: #000000;
    }
    #progress-counter{
      text-align: center;
    }
  }

</style>
