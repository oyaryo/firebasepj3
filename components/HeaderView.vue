<template>
  <div v-show="isLoggedIn" class="header-menu">
    <!-- <v-btn text to="mypage">マイページ</v-btn> -->
    <v-avatar color="indigo">
                <v-icon dark v-if="!photoUrl" @click="toMypage">
                  mdi-account-circle
                </v-icon>
                <img
                  :src="photoUrl"
                  alt="photoImage"
                  v-if="photoUrl"
                  @click="toMypage"
                />
              </v-avatar>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from 'firebase/auth'
export default {
  async mounted(){
    const auth = getAuth();
    await onAuthStateChanged(auth, (user) => {
      if(user){
        this.photoUrl = user.photoURL;
      } else {
        console.log('No such data.');
      }
    })
  },
  data(){
    return{
      photoUrl: ''
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters["auth/getLoggedIn"];
    },
  },
  methods:{
    toMypage(){
      this.$router.push('mypage');
    }
  }
}
</script>

<style>
.header-menu {
  margin-left: auto;
}
</style>