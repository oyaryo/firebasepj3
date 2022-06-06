<template>
  <v-app>
    <v-app-bar app><HeaderView /></v-app-bar>
    <v-main>
      <v-container>
        <h2>データの表示</h2>
        <img :src="keyVisualUrl" alt="" class="keyVisual">
        <div v-for="(user, index) in users" :key="index">
          名前: {{ user.displayName }}　/　メールアドレス: {{ user.email }}
        </div>
        <v-spacer></v-spacer>
        <v-row>
          <v-col cols="3">
            <v-btn color="primary" to="/">トップページへ</v-btn>
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
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

export default {
  data() {
    return {
      users: [],
      userUid: "",
      keyVisualUrl: "",
    };
  },
  async created() {
    try {
      const storage = getStorage();
      const pathReference = ref(
        storage,
        "gs://fir-pj3-26803.appspot.com/material/13941689_MotionElements_driving-through-tunnel_converted_503344-640x360-3s-q1.gif"
      );
      getDownloadURL(pathReference).then((url) => {
        this.keyVisualUrl = url;
      });

      const db = getFirestore(this.$firebase);
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        this.users.push(doc.data());
        console.log(doc.id, doc.data());
        console.log(doc.data().displayName);
        console.log(doc.data().email);
        console.log(doc.data().password);
      });

      const auth = getAuth(this.$firebase);
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.userUid = user.uid;
        }
      });
    } catch (e) {
      console.error("error: ", e);
    }
  },
};
</script>

<style>
.keyVisual {
  display: block;
  margin: 0 auto;
}
</style>
