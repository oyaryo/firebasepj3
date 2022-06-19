<template>
  <div>
    <v-container>
      <div>
        <p
          class="mt-4 mb-0 text-xs md:text-lg tracking-wider p-2 font-serif text-center"
        >
          Private Gallery on Metaverse
        </p>
        <p class="mt-0 text-6xl md:text-9xl font-serif text-center">
          META GALLERY
        </p>
      </div>
    </v-container>

    <v-container>
      <div class="flex justify-center">
        <div class="mt-8 w-10/12 border border-gray-400 bg-gray-200">
          <div class="text-center font-bold">What's New</div>
          <div v-for="content in contents" :key="content.id" class="m-2">
            <nuxt-link :to="`/${content.id}`">
              {{ content.title }}({{ content.publishedAt | dayFormat }})
            </nuxt-link>
          </div>
        </div>
      </div>
    </v-container>

    <v-container>
      <div>
        <v-row class="mt-16">
          <v-col cols="8">
            <p class="mb-0 md:text-6xl text-4xl font-serif">
              WHAT is META GALLERY
            </p>
            <p class="mt-0 text-xs">メタギャラリーとは</p>
          </v-col>
          <v-col cols="4"></v-col>
        </v-row>
        <v-row>
          <v-col cols="4"></v-col>
          <v-col cols="8">
            <p>
              ********** ********** ********** ********** ********** **********
              ********** ********** ********** ********** ********** **********
              ********** ********** ********** ********** ********** **********
              ********** ********** ********** ********** ********** **********
              ********** ********** ********** ********** ********** **********
              ********** ********** ********** ********** ********** **********
              ********** ********** ********** ********** ********** **********
              ********** ********** ********** **********
            </p>
          </v-col>
        </v-row>
        <v-row class="mt-16">
          <v-col cols="8"
            ><p class="mb-0 md:text-6xl text-4xl font-serif">VOICE</p>
            <p class="mt-0 text-xs">著名人からのメッセージ</p></v-col
          >
          <v-col cols="4"></v-col>
        </v-row>
        <v-row>
          <v-row>
            <v-col cols="2"></v-col>
            <v-col cols="3"></v-col>
            <v-col cols="4"
              ><p class="mb-0">著名人の氏名</p>
              <p class="mt-0 text-xs">auther name</p>
              <p>
                ********** ********** ********** ********** **********
                ********** ********** ********** **********
              </p></v-col
            >
            <v-col cols="3"></v-col>
          </v-row>
          <v-row>
            <v-col cols="2"></v-col>
            <v-col cols="4"
              ><p class="mb-0">著名人の氏名</p>
              <p class="mt-0 text-xs">auther name</p>
              <p>
                ********** ********** ********** ********** **********
                ********** ********** ********** **********
              </p></v-col
            >
            <v-col cols="2"></v-col>
            <v-col cols="4"
              ><p class="mb-0">著名人の氏名</p>
              <p class="mt-0 text-xs">auther name</p>
              <p>
                ********** ********** ********** ********** **********
                ********** ********** ********** **********
              </p></v-col
            >
          </v-row>
        </v-row>
        <v-row class="dotted-border-bottom mt-16">
          <v-col cols="8"
            ><p class="mb-0 md:text-6xl text-4xl font-serif">CONTENTS</p>
            <p class="mt-0 text-xs">コンテンツ紹介</p></v-col
          >
          <v-col cols="4"></v-col>
        </v-row>
        <v-row class="border border-dotted">
          <v-col cols="4"></v-col>
          <v-col cols="8">
            <div class="md:flex">
              <div>
                <p class="text-lg mb-0">META GALLERY</p>
                <p class="text-xs mt-0">メタギャラリー</p>
                <p>
                  ********** ********** ********** ********** **********
                  ********** ********** ********** ********** **********
                </p>
              </div>
              <div>
                <img
                  src="@/assets/13852715_MotionElements_digital-gallery-video-wall_converted_a-0060.jpg"
                  alt=""
                  style="
                     {
                      width: 150px;
                      height: 150px;
                      object-fit: cover;
                    }
                  "
                />
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import MyMixin from "@/mixins/my-mixin";

export default {
  name: "IndexPage",

  mixins: [MyMixin],

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

<style scoped>
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

.dotted-border-bottom {
  border-bottom: 1px dotted #cbd5e0;
}
</style>
