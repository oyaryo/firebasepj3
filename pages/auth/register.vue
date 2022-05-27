<template>
  <v-app>
    <v-app-bar app></v-app-bar>
    <v-main>
      <h2>ユーザー登録</h2>
      <v-container fluid>
        <v-row>
          <v-col cols="6">
            <v-text-field v-model="displayName" label="表示名" />
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
    </v-main>
    <v-footer><FooterView /></v-footer>
  </v-app>
</template>

<script>
// import firebaseApp from '@/plugins/firebase';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";

export default {
  data() {
    return {
      displayName: "",
      email: "",
      password: "",
      createdAt: "",
      updateAt: "",
    };
  },
  methods: {
    signUp() {
      // const auth = getAuth(this.$firebase);
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          console.log(userCredential.user);
          console.log("ユーザー登録完了");

          // const db = getFirestore(this.$firebase);
          const db = getFirestore();
          const docRef = setDoc(doc(db, "users", userCredential.user.uid), {
            displayName: this.displayName,
            email: this.email,
            password: this.password,
            createdAt: serverTimestamp(),
            updateAt: this.updateAt,
          });
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
