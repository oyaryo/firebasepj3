<template>
  <div class="p5js">
    <script src="main.js"></script>
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          // src: "https://cdn.jsdelivr.net/npm/p5@1.4.2/lib/p5.js",
          src: "/p5.min.js",
        },
      ],
    };
  },
};
</script>

<style scoped>
.p5js {
  position: relative;
}
.title {
  position: absolute;
}
</style>
