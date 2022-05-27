<template>
  <v-app>
    <v-app-bar app></v-app-bar>
    <v-main>
      <h2>ログイン</h2>
      <v-container fluid>
        <v-row>
          <v-col cols="6">
            <v-text-field v-model="email" label="メールアドレス" />
            <v-text-field
              v-model="password"
              label="パスワード"
              type="password"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <v-btn color="primary" @click="login">ログイン</v-btn>
          </v-col>
          <v-col cols="3">
            <v-btn text to="./register">ユーザー登録</v-btn>
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
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("auth/login", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style></style>
