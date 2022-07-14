<template>
  <div>
    <v-layout column justify-center align-center>
      <v-row>
        <v-col>
          <h2>This is The Secret Authenticate Route</h2>
        </v-col>
      </v-row>
      <v-row style="margin-bottom: 20px">
        <v-col>
          <Unity :unity="unityContext" width="960px" height="600px" />
        </v-col>
      </v-row>
    </v-layout>
    <v-container>
      <div class="flex">
        <div class="w-3/12 h-24 bg-meta-gallery-100"></div>
        <div class="w-3/12 h-24 bg-meta-gallery-200"></div>
        <div class="w-3/12 h-24 bg-meta-gallery-300"></div>
        <div class="w-3/12 h-24 bg-meta-gallery-400"></div>
      </div>
    </v-container>
  </div>
</template>

<script>
import UnityWebgl from "unity-webgl";

const Unity = new UnityWebgl({
  loaderUrl: "/Build/Demo.loader.js",
  dataUrl: "/Build/Demo.data",
  frameworkUrl: "/Build/Demo.framework.js",
  codeUrl: "/Build/Demo.wasm",
});

export default {
  name: "GalleryPage",
  // middleware: "login",
  components: {
    Unity: UnityWebgl.vueComponent,
    // Unity,
  },
  data() {
    return {
      unityContext: Unity,
      loading: true,
    };
  },
};
</script>
