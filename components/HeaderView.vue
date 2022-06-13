<template>
  <div class="flex justify-between items-center">
    <h1 class="text-lg md:text-2xl font-extrabold text-gray-600">
      Private Gallery
    </h1>
    <nav class="hidden md:inline-block">
      <ul class="flex justify-end items-center">
        <li class="gnav--item"><a href="/">ホーム</a></li>
        <li class="gnav--item"><a href="../AboutPage">概要</a></li>
        <li class="gnav--item"><a href="../NewsPage">お知らせ</a></li>
        <li class="gnav--item"><a href="../GalleryPage">ギャラリー</a></li>
        <li class="gnav--item"><a href="../ShopPage">ショップ</a></li>
        <li class="gnav--item" @click="logout"><a>ログアウト</a></li>
        
      </ul>
      
    </nav>
    <div>
          <v-avatar color="indigo">
            <!-- <v-icon dark v-if="!photoUrl" @click="toMypage"> -->
            <v-icon dark v-if="!photoUrl" @click="openDrawerMenu">
              mdi-account-circle
            </v-icon>
            <!-- <img
              :src="photoUrl"
              alt="photoImage"
              v-if="photoUrl"
              @click="toMypage"
            /> -->
            <img
              :src="photoUrl"
              alt="photoImage"
              v-if="photoUrl"
              @click="openDrawerMenu"
            />
          </v-avatar>
        </div>
      <transition name="right">
        <div v-if="drawerFlg" class="drawer-menu-wrapper">
          <div class="drawer-menu">
            <ul>
              <li class="gnav--item"><a href="/">ホーム</a></li>
              <li class="gnav--item"><a href="../AboutPage">概要</a></li>
              <li class="gnav--item"><a href="../NewsPage">お知らせ</a></li>
              <li class="gnav--item">
                <a href="../GalleryPage">ギャラリー</a>
              </li>
              <li class="gnav--item"><a href="../ShopPage">ショップ</a></li>
              <li class="gnav--item" @click="logout"><a>ログアウト</a></li>
              <li></li>
            </ul>
          </div>
        </div>
      </transition>
  </div>
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
      drawerFlg: false,
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
    openDrawerMenu() {
      console.log("openDrawerMenu call");
      this.drawerFlg = !this.drawerFlg;
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
.gnav--item:not(:last-child) {
  margin-right: 30px;
}

.right-enter-active,
.right-leave-active {
  transform: translate(0px, 0px);
  transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
}
.right-enter,
.right-leave-to {
  transform: translateX(100vw) translateX(0px);
}

.drawer-menu-wrapper {
  position: absolute;
  z-index: 10;
  top: 60px;
  right: 0;
  /* left: 0 //左に出す場合 */
  width: 50%;
  /* height: 100%; */
  height: 300px;
  background-color: white;
}
.drawer-menu {
  padding: 24px;
}
</style>
