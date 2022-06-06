<template>
  <v-app>
    <v-app-bar app>
      <HeaderView />
    </v-app-bar>

    <main class="main">
      <v-container fluid>
        <h1 class="title">{{ data.title }}</h1>
        <p class="publishedAt">{{ data.publishedAt }}</p>
        <div class="post" v-html="data.content"></div>
      </v-container>
    </main>

    <v-footer>
      <FooterView />
    </v-footer>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  async asyncData({ params }) {
    const data = await axios.get(
      `https://conditionyellow.microcms.io/api/v1/news/${params.slug}`,
      {
        headers: {
          "X-MICROCMS-API-KEY": "1834e7af205d486994be3447af91fbac50b0",
        },
      }
    );
    return data;
  },
};
</script>
