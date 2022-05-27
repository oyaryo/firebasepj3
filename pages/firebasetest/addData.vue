<template>
  <v-app>
    <v-app-bar app><HeaderView /></v-app-bar>
    <v-main>
      <v-container>
        <h2>ユーザー登録</h2>
        <v-row>
          <v-col cols="6">
            <v-text-field
              label="表示名を入力"
              v-model="displayName"
            ></v-text-field
            ><br />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-text-field
              label="メールアドレスを入力"
              v-model="email"
            ></v-text-field
            ><br />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-text-field
              label="パスワードを入力"
              v-model="password"
            ></v-text-field
            ><br />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <v-btn color="primary" @click="addData(displayName, email, password)">登録</v-btn>
          </v-col>
          <v-col cols="3">
            <v-btn color="secondary" to="/">トップページへ</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer
      ><small
        >© 2022 ConditionYellow Co,.Ltd. All Rights Reserved.</small
      ></v-footer
    >
  </v-app>
</template>

<script>
import { getFirestore, collection, addDoc, Firestore } from "firebase/firestore";
export default {
  data() {
    return {
      keyword: "",
      displayName: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async addData(displayName, email, password) {
      try {
        const db = getFirestore(this.$firebase);
        const docRef = await addDoc(collection(db, "users"), {
          email: this.email,
          password: this.password,
        });
        // console.log("追加したデータのID：　", docRef.id);
        // console.log("追加したデータ：　", this.keyword)
        this.$router.push("./showData");
      } catch (e) {
        console.error("error: ", e);
      }
    },
  },
};
</script>

<style></style>
