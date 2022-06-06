<template>
  <!-- <div v-show="isLoggedIn" class="header-menu"> -->
  <!-- <v-btn text to="mypage">マイページ</v-btn> -->

  <ul class="gnav">
    <li>
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
      <ul>
        <li>
          <a href="#" @click="toMypage">マイページ</a>
        </li>
        <li>
          <a href="#" @click="logout">ログアウト</a>
        </li>
      </ul>
    </li>
  </ul>

  <!-- </div> -->
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
export default {
  async mounted() {
    const auth = getAuth();
    await onAuthStateChanged(auth, (user) => {
      if (user) {
        this.photoUrl = user.photoURL;
      } else {
        console.log("No such data.");
      }
    });
  },
  data() {
    return {
      photoUrl: "",
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters["auth/getLoggedIn"];
    },
  },
  methods: {
    toMypage() {
      this.$router.push("/mypage");
    },
    logout() {
      this.$store.dispatch("auth/logout");
    },
  },
};
</script>

<style>
/*親階層*/
.gnav {
  display: flex;
  height: 3rem;
  margin-left: auto;
}
.gnav li {
  list-style: none;
  position: relative;
  text-align: right;
}
.gnav li a {
  background: #001b34;
  border-right: 1px solid #eee;
  color: #fff;
  display: block;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  text-decoration: none;
  width: 100%;
  padding: 2px 5px;
}

/*子階層以降共通*/
.gnav li li {
  height: 0;
  overflow: hidden;
  transition: 0.5s;
}
.gnav li li a {
  border-top: 1px solid #eee;
}
.gnav li:hover > ul > li {
  height: 2rem;
  overflow: visible;
}
</style>
