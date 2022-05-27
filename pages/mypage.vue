<template>
  <v-app>
    <v-app-bar app></v-app-bar>
    <v-main>
      <v-container fluid>
        <h2>マイページ</h2>
        <table>
          <tr>
            <th>画像：</th>
            <td>
              <input
                type="file"
                ref="fileInput"
                accept="image/jpeg, image/jpg, image/png"
                style="display: none"
                @change="updateIcon"
              />
              <v-avatar color="indigo">
                <v-icon dark v-if="!photoUrl" @click="changeIcon">
                  mdi-account-circle
                </v-icon>
                <img
                  :src="photoUrl"
                  alt="photoImage"
                  v-if="photoUrl"
                  @click="changeIcon"
                />
              </v-avatar>
              <br />
            </td>
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
    <v-footer><FooterView /></v-footer>
  </v-app>
</template>

<script>
// import firebaseApp from "@/plugins/firebase";

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
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

export default {
  data() {
    return {
      userUid: "",
      photoUrl: "",
      displayName: "",
      email: "",
      password: "",
      createdAt: "",
      updatedAt: "",
      thumbnail: "",
    };
  },

  async mounted() {
    try {
      const auth = getAuth();
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
          console.log("No user data.");
        }
      });
    } catch (e) {
      console.log("error: ", e);
    }
  },

  methods: {
    update() {
      // const auth = getAuth(this.$firebase);
      const auth = getAuth(firebaseApp);
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
        sendPasswordResetEmail(auth, this.email)
          .then(() => {
            console.log(`パスワードの再設定を${this.email}へ送信しました。`);
          })
          .catch((e) => {
            console.error("error: ", e);
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
      await updateDoc(docRef, {
        updatedAt: serverTimestamp(),
      });
    },

    // mountedで呼んで更新日をセットする
    async getUpdatedAt() {
      const auth = getAuth(this.$firebase);
      const db = getFirestore(this.$firebase);
      const docRef = doc(db, "users", auth.currentUser.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        let timestamp = docSnap.data().updatedAt;
        this.updatedAt = timestamp? timestamp.toDate() : null;
      } else {
        console.error("No such document!");
      }
    },

    // changeImg(e) {
    //   const storage = getStorage(this.$firebase);

    //   const metadata = {
    //     contentType: "image/jpeg",
    //   };

    //   this.thumbnail = e.target.files[0];
    //   const storageRef = ref(storage, "images/" + this.thumbnail.name);

    //   const uploadTask = uploadBytesResumable(
    //     storageRef,
    //     this.thumbnail,
    //     metadata
    //   ).then((snapshot) => {
    //     console.log("Uploaded a blob or file!");
    //   });

    //   uploadTask.on(
    //     "state_changed",
    //     (snapshot) => {
    //       const progress =
    //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //       console.log("Upload is " + progress + "% done");
    //       switch (snapshot.state) {
    //         case "paused":
    //           console.log("Upload is paused.");
    //           break;
    //         case "running":
    //           console.log("Upload is running.");
    //           break;
    //       }
    //     },
    //     (error) => {
    //       switch (error.code) {
    //         case "storage/unauthorized":
    //           break;
    //         case "storage/canceled":
    //           break;
    //         case "storage/unknown":
    //           break;
    //       }
    //     },
    //     () => {
    //       getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    //         console.log("File available at", downloadURL);
    //       });
    //     }
    //   );
    // },

    downloadImage() {
      const storage = getStorage(this.$firebase);
      const imagesRef = ref(storage, "images");
      const spaceRef = ref(storage, "images/space.jpg");
      console.log(spaceRef.fullPath);
      console.log(spaceRef.name);
      console.log(spaceRef.bucket + "/" + spaceRef.fullPath);
    },

    // アイコンをクリックすることで画像を変更できる
    changeIcon() {
      this.$refs.fileInput.click();
    },
    updateIcon() {
      const auth = getAuth(this.$firebase);
      const user = auth.currentUser;

      // アップロードする画像を用意する
      const iconFile = this.$refs.fileInput.files[0];
      const filePath = `/user/${iconFile.name}`;
      console.log(iconFile);

      // storageへ画像をアップロードする
      const storage = getStorage(this.$firebase);
      const storageRef = ref(storage, filePath);
      uploadBytes(storageRef, iconFile).then(async (snapshot) => {
        console.log("Uploaded a blob or file.");

        // storageにアップロードした画像のURLを取得する
        const photoUrl = await getDownloadURL(ref(storage, filePath));
        console.log("photoUrl: ", photoUrl);

        // 取得したURLをユーザーのプロフィール情報にあるphotoUrlへ書き込む
        updateProfile(user, {
          photoURL: photoUrl,
        });

        this.photoUrl = photoUrl;
      });
    },
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
