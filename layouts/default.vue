<template>
  <v-app>
    <HeaderView />
    <v-main class="bg bg-fixed bg-cover">
      <nuxt />
    </v-main>
    <v-footer>
      <FooterView />
    </v-footer>
  </v-app>
</template>

<style>
.bg {
  background-image: url(@/assets/bg_image.jpg);
}
</style>
