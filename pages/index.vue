<template>
  <v-app>
    <v-app-bar app></v-app-bar>
    <!-- <Tutorial /> -->
    <v-main>
      <v-container fluid>
        <h1>トップページ</h1>
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
          <v-col cols="3">
            <div v-show="isLoggedIn">
              <v-btn text @click="logout">ログアウト</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer><small>© 2022 ConditionYellow Co,.Ltd. All Rights Reserved.</small></v-footer>
  </v-app>
</template>

<script>
export default {
  name: "IndexPage",

  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
    },
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters["auth/getLoggedIn"];
    },
  },
};
</script>
