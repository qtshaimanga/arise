<template>
  <div class="invite"  v-if="!getLoaderDisplayer">
    <a-header :serial-number="id"></a-header>
    <div class="container">
      <div class="invitElementRight" v-show="moi">
        <div class="element">
          <p> It's time to setup your printer </br> account so you can invite </br>  people to send you amazing stuff ! <p>
          <div class="inviteForm">
            <form>
              <input type="text" name="name" placeholder="Your name"></br>
              <input type="text" name="email" placeholder="Your email"></br>
              <input type="submit" value="Next" @click="moiToToi">
            </from>
          </div>
        </div>
      </div>

      <div class="invitElementRight" v-show="toi">
        <div class="element">
          <p> It's time to setup your printer </br> account so you can invite </br>  people to send you amazing stuff ! <p>
          <div class="inviteForm">
            <form>
              <input type="text" name="name" placeholder="Your name"></br>
              <input type="text" name="email" placeholder="Your email"></br>
              <input type="submit" value="Next">
            </from>
          </div>
        </div>
      </div>
      <div class="inviteElementLeft">
        <video :src="getListOfRessources.invitation_landing_video.file.src" autoplay loop width="600" height="600" ref="invitationVideo" class="video-invitation">
        </video>
      </div>
    </div>
  </div>
</template>

<script>
import User from '../assets/data/user.json'; //Test DATA
import aHeader from '../components/aHeader';

// import { } from '../vuex/actions';
import { getListOfRessourcesState, getLoaderDisplayerState } from '../vuex/getters';

export default {
  name: 'invite',
  components: {
    aHeader,
  },
  data () {
    return {
      id: Number(),
      invitationVideo: Object(),
      moi: true,
      toi: false
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
  watch: {},
  created: function() {
    this.id = this.$route.params.id;
  },
	mounted: function() {
    //TODO ex envoyer l'adrese suivante http://localhost:8080/text-sent/1234 avec this.id
  },
  methods:{
    moiToToi: function(event){
      event.preventDefault();
      this.moi = false;
      this.toi = true;
    }
  }
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
          letter-spacing: 3px;
        }
        .inviteForm{
          display: flex;
          form{
            flex-direction: column;
            input{
              background-color: $pink-pale;
              font-family: "cinetype-regular";
              font-size: 14pt;
              line-height: 50px;
              color: $grey-pale-opacity;
              width: 250px;
              border-bottom: solid 1px black;
              border-width: 0px 0px 1px 0px;
              outline: none;
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
              &::-webkit-input-placeholder {
                color: $grey-pale-opacity;
                font-size: 14px;
                text-shadow: none;
                -webkit-text-fill-color: initial;
              }
            }
          }
        }
      }
    }
    .inviteElementLeft{
      @include center-y;
      left: 50%;
    }
  }

</style>
