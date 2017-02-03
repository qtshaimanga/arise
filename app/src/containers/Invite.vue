<template>
  <div class="invite"  v-if="!getLoaderDisplayer">
    <a-header :serial-number="id"></a-header>
    <div class="container">
      <div class="invitElementRight" v-show="moi">
        <div class="element">
          <p> It's time to setup your printer </br> account in order to continue ! <p>
          <div class="inviteForm">
            <form>
              <input type="text" name="name" placeholder="Your name" ref="ownerNameField"></br>
              <input type="text" name="email" placeholder="Your email"></br>
              <div class="send-invite-btn" @click="moiToToi">Next</div>
            </from>
          </div>
        </div>
        <div class="inviteElementLeft">
          <video :src="getListOfRessources.lock_landing_video.file.src" width="600" height="600" ref="lockVideo" class="video-invitation">
          </video>
        </div>
      </div>

      <div class="invitElementRight" v-show="toi">
        <div class="element">
          <p> Great {{ owner }}, now you can send </br> invites to your close ones ! <p>
          <div class="inviteForm">
            <form>
              <input type="text" name="name" placeholder="Your friend's name" ref="name"></br>
              <input type="text" name="email" placeholder="Your friend's email" ref="email"></br>
              <div class="send-invite-btn" @click="onSendEmail">Send invite</div>
            </from>
          </div>
        </div>
        <div class="inviteElementLeft">
          <video :src="getListOfRessources.invitation_landing_video.file.src" autoplay loop width="600" height="600" ref="invitationVideo" class="video-invitation">
          </video>
        </div>
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
      lockVideo: Object(),
      moi: true,
      toi: false,
      owner: String()
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
      this.ownerNameField = this.$refs.ownerNameField;
      this.lockVideo = this.$refs.lockVideo;
      this.lockVideo.play();
      this.lockVideo.onended = ()=>{
        this.owner = this.ownerNameField.value;
        this.moi = false;
        this.toi = true;
      }

    },
    onSendEmail(event) {
      //event.preventDefault();
      this.email = this.$refs.email;
      this.name = this.$refs.name;
      this.$http.post('http://localhost:3000/send-invite', {email: this.email.value, name: this.name.value, id: this.id}).then(response => {
        console.log("response : ",response);
        this.email.value = "";
        this.name.value = "";
        // this.$router.push({name:'text-sent', params:{ id:this.id}});
      }, response => {
        // error callback
      });
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
        // @include transition( all .1s ease-in);
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
              &::-webkit-input-placeholder {
                color: $grey-pale-opacity;
                font-size: 14px;
                text-shadow: none;
                -webkit-text-fill-color: initial;
              }
            }
            .send-invite-btn {
              margin-top: 50px;
              font-family: "mongoose-regular";
              font-size: 25pt;
              color: $white;
              line-height: 60px;
              padding-left: 20px;
              background-color: $salmon-hot;
              width: 150px;
              height: 60px;
              cursor: pointer;
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
