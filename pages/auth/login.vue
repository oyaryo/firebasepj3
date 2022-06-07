<template>
  <v-app>
    <v-app-bar app>
      <!-- <HeaderView /> -->
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <div class="login--box">
          <v-card class="login--card">
            <v-card-title class="login--title">ログイン</v-card-title>
            <v-card-subtitle>ログイン情報を入力してください。</v-card-subtitle>
            <v-text-field v-model="email" label="メールアドレス" />
            <v-text-field
              v-model="password"
              label="パスワード"
              type="password"
            />
            <v-btn color="primary" @click="login">ログイン</v-btn>
            <v-btn text to="./register">ユーザー登録</v-btn>
          </v-card>
        </div>
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

<style>
.login--box {
  width: 50%;
  margin: 0 auto;
}

.login--card {
  padding: 20px;
}

.login--title {
  display: inline-block;
}
</style>
