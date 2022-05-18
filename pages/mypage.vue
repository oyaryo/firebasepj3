<template>
  <v-app>
    <v-app-bar app></v-app-bar>
    <v-main>
      <v-container fluid>
        <h2>マイページ</h2>
        <table>
          <tr>
            <th>お名前：</th>
            <td>{{ displayName }}</td>
          </tr>
          <tr>
            <th>メールアドレス：</th>
            <td>{{ email }}</td>
          </tr>
          <tr>
            <th>パスワード：</th>
            <td>{{ password }}</td>
          </tr>
          <tr>
            <th>登録日：</th>
            <td>{{ createdAt }}</td>
          </tr>
          <tr>
            <th>更新日：</th>
            <td>{{ createdAt }}}</td>
          </tr>
        </table>
        <v-row>
          <v-col cols="3">
            <v-btn color="primary" @click="update">更新</v-btn>
          </v-col>
          <v-col cols="3">
            <v-btn color="secondary" to="/">トップページへ</v-btn>
          </v-col>
          <!-- <v-col cols="3">
            <div v-show="isLoggedIn">
              <v-btn text @click="logout">ログアウト</v-btn>
            </div>
          </v-col> -->
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
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

export default {
  data() {
    return {
      userUid: "",
      displayName: "",
      email: "",
      password: "",
      createdAt: "",
      updatedAt: "",
    };
  },
  async created() {
    try {
      const auth = getAuth(this.$firebase);
      await onAuthStateChanged(auth, (user) => {
        if (user) {
          this.userUid = user.uid;
        }
        this.showInfo();
      });
    } catch (e) {
      console.log("error: ", e);
    }
  },
  methods: {
    async showInfo() {
      const db = getFirestore(this.$firebase);
      const docRef = doc(db, "users", this.userUid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data: ", docSnap.data());
        this.displayName = docSnap.get("displayName");
        this.email = docSnap.get("email");
        this.password = docSnap.get("password");
        this.createdAt = docSnap.get("createdAt");
        this.updatedAt = docSnap.get("updatedAt");
      } else {
        console.log("No such document.");
      }
    },
    update() {
      console.log("update");
    },
  },
};
</script>

<style>
table {
  margin-top: 20px;
  margin-bottom: 20px;
}
th {
  text-align: right;
}
</style>
