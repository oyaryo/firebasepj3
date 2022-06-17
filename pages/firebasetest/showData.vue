<template>
  <div class="flex justify-center">
    <v-card class="w-8/12 m-8 p-8">
      <div class="flex justify-center">
        <v-card-title>商品一覧</v-card-title>
      </div>
      <div v-for="product in products" :key="product.id">
        商品名: {{ product.name }} / 概要： {{ product.description }} / 価格：{{
          product.price
        }}<hr />
      </div>
    </v-card>
  </div>
</template>

<script>
import { getFirestore, collection, getDocs } from "firebase/firestore";
// import { getDownloadURL, getStorage, ref } from "firebase/storage";

export default {
  data() {
    return {
      products: [],
    };
  },
  async created() {
    try {
      const db = getFirestore(this.$firebase);
      const querySnapshot = await getDocs(collection(db, "products"));
      querySnapshot.forEach((doc) => {
        this.products.push(doc.data());
      });
    } catch (e) {
      console.error("error: ", e);
    }
  },
};
</script>
