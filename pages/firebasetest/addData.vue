<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-text-field
            label="登録したい単語をここに入力してください"
            v-model="keyword"
          ></v-text-field
          ><br />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3">
          <v-btn color="primary" @click="addData(keyword)">追加</v-btn>
        </v-col>
        <v-col cols="3">
          <v-btn color="secondary" to="/">トップページへ</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { getFirestore, collection, addDoc } from "firebase/firestore";
export default {
  data() {
    return {
      keyword: "",
      id: 0,
      title: "テスト",
    };
  },
  methods: {
    async addData(keyword) {
      try {
        const db = getFirestore(this.$firebase);
        const docRef = await addDoc(collection(db, "tasks"), {
          id: this.id + 1,
          title: this.keyword,
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
