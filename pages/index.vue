<template>
    <div>
      <div class="key-visual">
        <img src="@/assets/recruit.png" alt="" />
        <h1
          class="title-text font-extrabold text-3xl md:text-5xl tracking-wide"
        >
          Private Gallery
        </h1>
      </div>
      <ul class="news">
        <li class="text-center font-bold py-2 -ml-6">What's New</li>
        <li v-for="content in contents" :key="content.id">
          <nuxt-link :to="`/${content.id}`">
            {{ content.title }}({{ content.publishedAt | dayFormat }})
          </nuxt-link>
        </li>
      </ul>
    </div>
</template>

<script>
import axios from "axios";
import MyMixin from '@/mixins/my-mixin';

export default {
  name: "IndexPage",

  mixins: [MyMixin],

  // filters: {
  //   dayFormat: (value) => {
  //     if (!value) return "";
  //     return dayjs(value).format("YYYY-MM-DD");
  //   },
  // },

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
.news--item {
  list-style-type: none;
}
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
