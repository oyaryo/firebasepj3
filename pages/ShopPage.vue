<template>
  <div>
    <v-container>
      <v-row>
        <v-col v-for="product in products" :key="product.id">
          {{ product.name}}
          <ProductBox />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { getFirestore, collection, getDocs } from "firebase/firestore";

export default {
  data() {
    return {
      products: [],
    };
  },

  async mounted() {
    try {
      const db = getFirestore(this.$firebase);
      const querySnapshot = await getDocs(collection(db, "products"));
      querySnapshot.forEach((doc) => {
        this.products.push(doc.data());
        console.log(doc.data());
      });
    } catch (e) {
      console.error("error: ", e);
    }
  },
};
</script>
