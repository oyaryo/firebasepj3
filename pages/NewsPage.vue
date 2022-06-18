<template>
  <div>
    <v-container>
      <div>
        <p class="text-6xl relative top-4 font-serif">INFORMATION</p>
        <p class="absolute top-20 tracking-widest p-2 font-serif">最新情報</p>
      </div>
    </v-container>

    <v-container>
      <div class="my-16">
        <hr class="border border-1 border-dotted border-gray-300">
        <div class="flex" v-for="n in 3" :key="n">
          <div class="w-4/12"></div>
          <div class="w-8/12 p-4 bg-gray-100 news-border">
            <p class="font-sans text-sm">DATE</p>
            <p>News Title Header 1</p>
            <p class="font-serif">
              test test test test test test test test test test test test test
              test test test test test test test
            </p>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<style scoped>
.news-border {
  border: 1px dotted #cbd5e0;
  border-top: none;
}
</style>
