<template>
  <v-app>
    <v-app-bar app></v-app-bar>
    <v-main>
      <v-container fluid>
        <h2>マイページ</h2>
        <table>
          <tr>
            <th>画像：</th>
            <td><img :src="photoUrl" alt="photoImage"></td>
          </tr>
          <tr>
            <th>お名前：</th>
            <td>
              <input
                type="text"
                v-model="displayName"
                :placeholder="displayName"
              />
            </td>
          </tr>
          <tr>
            <th>メールアドレス：</th>
            <td>
              <input type="email" v-model="email" :placeholder="email" />
            </td>
          </tr>
          <tr>
            <th>パスワード：</th>
            <td>
              <v-btn text @click="sendResetPassword"
                >（パスワードを変更する）</v-btn
              >
            </td>
          </tr>
          <tr>
            <th>登録日：</th>
            <td>{{ createdAt }}</td>
          </tr>
          <tr>
            <th>更新日：</th>
            <td>{{ updatedAt }}</td>
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
            <v-btn color="error" @click="updatedAtServerTimestamp">テスト</v-btn>
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
import {
  getAuth,
  onAuthStateChanged,
  updateProfile,
  updateEmail,
  sendPasswordResetEmail,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

export default {
  data() {
    return {
      userUid: "",
      photoUrl: '',
      displayName: "",
      email: "",
      password: "",
      createdAt: "",
      updatedAt: "",
    };
  },

  async mounted() {
    try {
      
      const auth = getAuth(this.$firebase);
      const user = auth.currentUser;

      await onAuthStateChanged(auth, (user) => {
        if (user) {
          this.photoUrl = user.photoURL;
          this.userUid = user.uid;
          this.displayName = user.displayName;
          this.email = user.email;
          this.createdAt = user.metadata.creationTime;
          this.getUpdatedAt();
          console.log(user);
        } else {
          console.error("No user data.");
        }
      });
    } catch (e) {
      console.log("error: ", e);
    }
  },

  methods: {
    update() {
      const auth = getAuth(this.$firebase);
      updateProfile(auth.currentUser, {
        displayName: this.displayName,
      })
        .then(() => {
          console.log("displayName更新完了");
        })
        .catch((e) => {
          console.error("error: ", e);
        });

      updateEmail(auth.currentUser, this.email)
        .then(() => {
          console.log("email更新完了");
        })
        .catch((e) => {
          console.error("error: ", e);
        });

      this.updatedAtServerTimestamp();
    },

    // 「（パスワードを変更する）」テキストボタンをクリックでアラートを表示
    sendResetPassword() {
      const result = confirm("パスワードの再設定メールを送信します。");
      if (result) {
        const auth = getAuth(this.$firebase);
        sendPasswordResetEmail(auth, email).then(() => {
          console.log("パスワードの再設定メールを送信しました。");
        });
      } else {
        console.log("キャンセルされました。");
      }
    },

    // update()のタイミングでfirestoreのupdatedAtを更新
    async updatedAtServerTimestamp() {
      const auth = getAuth(this.$firebase);
      const db = getFirestore(this.$firebase);
      const docRef = doc(db, "users", auth.currentUser.uid);
      await updateDoc(docRef,{
        updatedAt: serverTimestamp(),
      })
    },

    // mountedで呼んで更新日をセットする
    async getUpdatedAt(){
      const auth = getAuth(this.$firebase);
      const db = getFirestore(this.$firebase);
      const docRef = doc(db, 'users', auth.currentUser.uid);
      const docSnap = await getDoc(docRef);
      if(docSnap.exists()){
        this.updatedAt = docSnap.data().updatedAt;
      } else {
        console.error('No such document!');
      }
    }
  },
};
</script>

<style>
table {
  margin-top: 20px;
  margin-bottom: 20px;
}
td {
  padding: 15px 0;
}
th {
  text-align: right;
}
</style>
