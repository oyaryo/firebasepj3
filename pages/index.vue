<template>
  <v-app>
    <v-app-bar app>
      <HeaderView />
    </v-app-bar>

    <v-main>
      <div class="key-visual">
        <img src="@/assets/recruit.png" alt="" />
        <h1
          class="title-text font-extrabold text-3xl md:text-5xl tracking-wide"
        >
          Private Gallery
        </h1>
      </div>
      <ul class="news">
        <li class="text-center font-bold p-2">What's New</li>
        <li v-for="content in contents" :key="content.id">
          <nuxt-link :to="`/${content.id}`">
            {{ content.title }}({{ content.publishedAt | dayFormat }})
          </nuxt-link>
        </li>
      </ul>
    </v-main>

    <v-footer>
      <FooterView />
    </v-footer>
  </v-app>
</template>

<script>
import axios from "axios";
import dayjs from "dayjs";

export default {
  name: "IndexPage",

  filters: {
    dayFormat: (value) => {
      if (!value) return "";
      value = dayjs(value).format("YYYY-MM-DD");
      return value;
    },
  },

  computed: {
    isLoggedIn() {
      return this.$store.getters["auth/getLoggedIn"];
    },
  },

  async asyncData() {
    const { data } = await axios.get(
      "https://conditionyellow.microcms.io/api/v1/news",
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

<style>
.key-visual {
  position: relative;
}

.key-visual img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.title-text {
  position: absolute;
  color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.news {
  width: 80%;
  border: 1px solid gray;
  margin: 20px auto;
}
</style>
