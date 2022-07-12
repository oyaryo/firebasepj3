<template>
  <div>
    <script src="<%= htmlWebpackPlugin.files.publicPath %>unitybuild/TemplateData/UnityProgress.js"></script>
    <script src="<%= htmlWebpackPlugin.files.publicPath %>unitybuild/Build/UnityLoader.js"></script>
    <v-container>
      <div class="flex">
        <div class="w-3/12 h-24 bg-meta-gallery-100"></div>
        <div class="w-3/12 h-24 bg-meta-gallery-200"></div>
        <div class="w-3/12 h-24 bg-meta-gallery-300"></div>
        <div class="w-3/12 h-24 bg-meta-gallery-400"></div>
      </div>
      <unity
        src="unitybuild/Build/unitybuild.json"
        v-bind="{
          width: 640,
          height: 480,
          hideFooter: true,
          externalProgress: true,
          module: { TOTAL_STACK: 6 * 1024 * 1024 },
        }"
        unityLoader="unitybuild/Build/UnityLoader.js"
      ></unity>
    </v-container>
  </div>
</template>
