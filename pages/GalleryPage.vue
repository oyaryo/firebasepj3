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
<<<<<<< HEAD
      <div id="unity-container" class="unity-desktop">
        <canvas id="unity-canvas" width="960" height="600"></canvas>
        <div id="unity-loading-bar">
          <div id="unity-logo"></div>
          <div id="unity-progress-bar-empty">
            <div id="unity-progress-bar-full"></div>
          </div>
        </div>
        <div id="unity-warning"></div>
        <div id="unity-footer">
          <div id="unity-webgl-logo"></div>
          <div id="unity-fullscreen-button"></div>
          <div id="unity-build-title">SampleProject</div>
        </div>
      </div>

=======
>>>>>>> ed16e0276946f93f211b89839ac6bb1baa252689
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
<<<<<<< HEAD

export default {
  mounted() {
    var container = document.querySelector("#unity-container");
    var canvas = document.querySelector("#unity-canvas");
    var loadingBar = document.querySelector("#unity-loading-bar");
    var progressBarFull = document.querySelector("#unity-progress-bar-full");
    var fullscreenButton = document.querySelector("#unity-fullscreen-button");
    var warningBanner = document.querySelector("#unity-warning");

    // Shows a temporary message banner/ribbon for a few seconds, or
    // a permanent error message on top of the canvas if type=='error'.
    // If type=='warning', a yellow highlight color is used.
    // Modify or remove this function to customize the visually presented
    // way that non-critical warnings and error messages are presented to the
    // user.
    function unityShowBanner(msg, type) {
      function updateBannerVisibility() {
        warningBanner.style.display = warningBanner.children.length
          ? "block"
          : "none";
      }
      var div = document.createElement("div");
      div.innerHTML = msg;
      warningBanner.appendChild(div);
      if (type == "error") div.style = "background: red; padding: 10px;";
      else {
        if (type == "warning") div.style = "background: yellow; padding: 10px;";
        setTimeout(function () {
          warningBanner.removeChild(div);
          updateBannerVisibility();
        }, 5000);
      }
      updateBannerVisibility();
    }

    var buildUrl = "Build";
    var loaderUrl = buildUrl + "/Demo.loader.js";
    var config = {
      dataUrl: buildUrl + "/Demo.data",
      frameworkUrl: buildUrl + "/Demo.framework.js",
      codeUrl: buildUrl + "/Demo.wasm",
      streamingAssetsUrl: "StreamingAssets",
      companyName: "DefaultCompany",
      productName: "SampleProject",
      productVersion: "0.1",
      showBanner: unityShowBanner,
    };

    // By default Unity keeps WebGL canvas render target size matched with
    // the DOM size of the canvas element (scaled by window.devicePixelRatio)
    // Set this to false if you want to decouple this synchronization from
    // happening inside the engine, and you would instead like to size up
    // the canvas DOM size and WebGL render target sizes yourself.
    // config.matchWebGLToCanvasSize = false;
=======
import UnityWebgl from "unity-webgl";
>>>>>>> ed16e0276946f93f211b89839ac6bb1baa252689

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
<<<<<<< HEAD

<style scoped>
#unity-canvas {
  margin: 0 auto;
}
</style>
=======
>>>>>>> ed16e0276946f93f211b89839ac6bb1baa252689
