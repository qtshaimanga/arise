<template>
  <div class="invite"  v-if="!getLoaderDisplayer">
    <a-header serial-number="126487"></a-header>
    <div class="container">
      <div class="invitElementRight">
        <div class="element">
          <p> it's time to setup your printer </br> account so you can invite </br>  people to send you amazing stuff ! <p>
          <div class="inviteForm">
            <form>
              <input type="text" name="name" placeholder="name"></br>
              <input type="text" name="email" placeholder="email"></br>
              <input type="submit" value="Next">
            </from>
          </div>
        </div>
      </div>
      <div class="inviteElementLeft">
        <video/>
      </div>
    </div>
  </div>
</template>

<script>
import aHeader from '../components/aHeader';

// import { } from '../vuex/actions';
import { getListOfRessourcesState, getLoaderDisplayerState } from '../vuex/getters';

export default {
  name: 'invite',
  components: {
    aHeader,
  },
  data () {
    return {}
  },
  vuex: {
    actions: {
    },
    getters: {
      getLoaderDisplayer: getLoaderDisplayerState,
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

  .invite{
    //position: absolute;
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
  }

  .container{
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    background-color: $pink-pale;
    display: flex;
    .invitElementRight{
      width: 50%;
      height: 100%;
      margin: 0px;
      padding: 0px;
      display: flex;
      flex-direction: column;
      .element{
        width: 70%;
        height: auto;
        margin-top: auto;
        margin-bottom: auto;
        margin-left: $borderLeft;
        p{
          color: $grey-pale;
          font-family: "mongoose-regular";
          font-size: 35pt;
          margin-bottom: 50px;
        }
        .inviteForm{
          display: flex;
          form{
            flex-direction: column;
            input{
              background-color: $pink-pale;
              font-family: "cinetype-regular";
              font-size: 14pt;
              color: $grey-pale-opacity;
              width: 250px;
              border-style: solid;
              border-width: 0px 0px 1px 0px;
              &:last-of-type{
                margin-top: 50px;
                font-family: "mongoose-regular";
                font-size: 25pt;
                color: $white;
                border: none;
                background-color: $salmon-hot;
                width: 150px;
                height: 60px;
              }
            }
          }
        }
      }
    }
    .inviteElementLeft{
      width: 50%;
      height: 100%;
      margin: 0px;
      padding: 0px;
    }
  }

</style>
