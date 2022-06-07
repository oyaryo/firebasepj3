<template>
  <v-app>
    <v-app-bar app>
      <HeaderView />
    </v-app-bar>

    <v-main>
      <v-content>
        <h2>Aboutページ</h2>
        <v-row>
          <v-col cols="3">
            <v-btn color="secondary" to="/">トップページへ</v-btn>
          </v-col>
        </v-row>
      </v-content>
    </v-main>

    <v-footer>
      <FooterView />
    </v-footer>
  </v-app>
</template>
