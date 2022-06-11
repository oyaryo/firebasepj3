<template>
  <v-app>
    <v-app-bar app>
      <!-- <HeaderView /> -->
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <div class="login--box">
          <v-card class="login--card">
            <v-card-title class="justify-center">ログイン</v-card-title>
            <v-card-subtitle class="text-center">ログイン情報を入力してください。</v-card-subtitle>
            <v-form ref="form" v-model="valid">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="メールアドレス"
                required
              ></v-text-field>

              <v-text-field
                v-model="password"
                type="password"
                label="パスワード"
              />
              <v-btn color="success" @click="login" :disabled="isValid"
                >ログイン</v-btn
              >
              <v-btn text to="./register">ユーザー登録</v-btn>
            </v-form>
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
      emailRules: [
        (v) => !!v || "メールアドレスを入力してください。",
        (v) => /.+@.+\..+/.test(v) || "メールアドレスが不正です。",
      ],
      password: "",
      valid: true,
    };
  },
  computed: {
    isValid() {
      return !this.valid;
    },
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
</style>
