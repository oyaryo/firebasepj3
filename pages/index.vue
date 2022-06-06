<template>
  <v-app>
    <v-app-bar app>
      <HeaderView />
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <div class="key-visual">
          <img src="./recruit.png" alt="">
          <h1 class="title-text">Private Gallery</h1>
        </div>
        <hr>
        <h2>What's New</h2>

        <ul>
          <li v-for="content in contents" :key="content.id">
            <nuxt-link :to="`/${content.id}`">
              {{ content.title }}
            </nuxt-link>
          </li>
        </ul>

        <v-row>
          <v-col cols="3">
            <v-btn color="primary" to="/firebasetest/showData"
              >データを見る</v-btn
            >
          </v-col>
          <v-col cols="3">
            <v-btn color="secondary" to="/firebasetest/addData"
              >データを入力</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer>
      <FooterView />
    </v-footer>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  name: "IndexPage",

  computed: {
    isLoggedIn() {
      return this.$store.getters["auth/getLoggedIn"];
    },
  },

  async asyncData() {
    const { data } = await axios.get(
      "https://conditionyellow.microcms.io/api/v1/news",
      {
        headers: {
          "X-MICROCMS-API-KEY": "1834e7af205d486994be3447af91fbac50b0",
        },
      }
    );
    return data;
  },
};
</script>

<style>
.key-visual {
  position: relative;
}

.key-visual img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.title-text {
  position: absolute;
  color: white;
  top: 50%;
  left: 50%;
  letter-spacing: 1px;
  transform: translate(-50%, -50%);
}
</style>
