<template>
  <v-app>
    <div>
      <h2>ユーザー登録</h2>
      <v-container>
        <v-row>
          <v-col cols="6">
            <v-text-field v-model="email" label="メールアドレス" />
            <v-text-field v-model="password" label="パスワード" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <v-btn color="primary" @click="signUp">ユーザー登録</v-btn>
          </v-col>
          <v-col cols="3">
            <v-btn text to="./login">ログインページ</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-app>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    signUp() {
      const auth = getAuth(this.$firebase);
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          console.log(userCredential.user);
          console.log("ユーザー登録完了");
        })
        .catch((e) => {
          alert(e.message);
          console.log("error: ", e);
        });
    },
  },
};
</script>

<style></style>
