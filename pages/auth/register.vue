<template>
  <v-app>
    <v-app-bar app></v-app-bar>
    <v-main>
      <h2>ユーザー登録</h2>
      <v-container fluid>
        <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="displayName"
              label="表示名"
              :rules="nameRules"
            />
            <v-text-field v-model="email" label="メールアドレス" :rules="emailRules"/>
            <v-text-field v-model="password" label="パスワード" />
          </v-col>
          <v-alert
      dense
      outlined
      type="error"
      v-if="this.errorMessage"
    >{{ errorMessage }}
      </v-alert>
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
    </v-main>
    <v-footer><FooterView /></v-footer>
  </v-app>
</template>

<script>
// import firebaseApp from '@/plugins/firebase';

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { getFirestore, doc, setDoc, serverTimestamp } from "firebase/firestore";

export default {
  data() {
    return {
      displayName: "",
      nameRules: [
        (v) => !!v || "表示名の入力は必須です。",
        (v) => (v && v.length <= 10) || "10文字以内で入力してください。",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "メールアドレスは必須です。",
        (v) => /.+@.+\..+/.test(v) || "メールアドレスが不正です。",
      ],
      password: "",
      createdAt: "",
      updateAt: "",
      errorMessage: ""
    };
  },
  methods: {
    async signUp() {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, this.email, this.password)
        .then(async (userCredential) => {
          await updateProfile(userCredential.user, {
            displayName: this.displayName,
          });
          console.log(userCredential.user);
          console.log("ユーザー登録完了");

          const db = getFirestore();
          await setDoc(doc(db, "users", userCredential.user.uid), {
            // displayName: this.displayName,
            // email: this.email,
            // password: this.password,
            // createdAt: serverTimestamp(),
            updateAt: serverTimestamp(),
          });

          this.$router.push("./login");
        })
        .catch((e) => {
          // alert(e.message);
          console.log("error: ", e);
          this.errorMessage = 'ユーザー登録に失敗しました。';
        });
    },
  },
};
</script>

<style></style>
