<template>
  <div class="started">
    <div class="container">
      <p>{{ getListOfRessources.json_data.file.INTRO.text }}</p>
      <img :src="getListOfRessources.vue_logo.file.src" />
    </div>
  </div>
</template>

<script>
// import { } from '../vuex/actions';
import { getListOfRessourcesState } from '../vuex/getters';

export default {
  name: 'started',
  components: {},
  data () {
    return {}
  },
  vuex: {
    actions: {
    },
    getters: {
      getListOfRessources: getListOfRessourcesState
    }
  },
  watch: {},
  created: function() {},
	mounted: function() {
  },
  methods:{}
}
</script>

<style lang="scss" scoped>
@import "../styles/mixins.scss";
@import "../styles/variables.scss";

  .started{
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    background-color: gray;
    display: flex;
    justify-content: center;
  }

  .container{
    flex-wrap: wrap;
    flex-direction: column;
    margin: auto;
    p{
      text-align: center;
    }
    img{
    }
  }

</style>
