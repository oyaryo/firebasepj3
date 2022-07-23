<template>
  <div>
    <v-layout column justify-center align-center>
      <v-row style="margin: 20px">
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
// import { getAuth } from "firebase/auth";
// import { getFirestore, doc, getDoc } from "firebase/firestore";
import UnityWebgl from "unity-webgl";
import { getAuth } from "@firebase/auth";

const Unity = new UnityWebgl({
  loaderUrl: "/Build/Demo.loader.js",
  dataUrl: "/Build/Demo.data",
  frameworkUrl: "/Build/Demo.framework.js",
  codeUrl: "/Build/Demo.wasm",
});

export default {
  name: "GalleryPage",
  components: {
    Unity: UnityWebgl.vueComponent,
  },

  middleware: "checkTicket",

  mounted() {
    const auth = getAuth();
    const user = auth.currentUser;

    let openRequest = indexedDB.open("db", 1);
    openRequest.onupgradeneeded = function () {
      let db = openRequest.result;
      if (!db.objectStoreNames.contains("tokens")) {
        let tokens = db.createObjectStore("tokens", {
          keyPath: "uToken",
        });
        let index = tokens.createIndex("email_idx", "email");
      }
    };

    openRequest.onsuccess = function () {
      console.log("Token added to the store", openRequest.result);
      let db = openRequest.result;
      let transaction = db.transaction("tokens", "readwrite");
      let tokens = transaction.objectStore("tokens");
      let token = {
        uToken: user.uid,
        email: user.email,
        createdAt: new Date(),
      };
      let request = tokens.add(token);

      request.onsuccess = function () {
        console.log("Token added to the store", request.result);
      };

      request.onerror = function () {
        console.log("Error", request.error);
      };
    };

    openRequest.onerror = function () {
      console.log("Error", openRequest.error);
    };
  },

  data() {
    return {
      unityContext: Unity,
      loading: true,
    };
  },
};
</script>
