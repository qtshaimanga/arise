<template>
  <div class="started">
  </div>
</template>

<script>
// import { } from '../vuex/actions';
// import { } from '../vuex/getters';

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
    }
  },
  watch: {},
  created: function() {},
	mounted: function() {},
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
  }

</style>
