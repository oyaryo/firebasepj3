<template>
  <v-app>
    <v-container>
      <h2>データの表示</h2>
      <div v-for="(task, index) in tasks" :key="index">
        id: {{ task.id }} / title: {{ task.title }}
      </div>
      <v-spacer></v-spacer>
      <v-row>
        <v-col cols="3">
          <v-btn color="primary" to="/">トップページへ</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { getFirestore, collection, getDocs } from "firebase/firestore";
export default {
  data() {
    return {
      tasks: [],
    };
  },
  async created() {
    try {
      const db = getFirestore(this.$firebase);
      const querySnapshot = await getDocs(collection(db, "tasks"));
      querySnapshot.forEach((doc) => {
        this.tasks.push(doc.data());
        console.log(doc.id, doc.data());
        console.log(doc.data().id);
        console.log(doc.data().title);
      });
    } catch (e) {
      console.error("error: ", e);
    }
  },
};
</script>

<style>

</style>
