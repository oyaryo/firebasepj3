<template>
  <div>
    <Tutorial />
    <div v-show="isLoggedIn">
      <button @click="logout">ログアウト</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",

  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
    },
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters["auth/getLoggedIn"];
    },
  },
};
</script>
