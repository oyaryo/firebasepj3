<template>
  <div>
    <!-- <v-card class="mx-auto" max-width="344"> -->
    <v-card class="mx-auto" max-width="250">
      <v-img
        src="https://firebasestorage.googleapis.com/v0/b/fir-pj3-26803.appspot.com/o/material%2F13941689_MotionElements_driving-through-tunnel_converted_503344-640x360-3s-q1.gif?alt=media&token=5c19e5e6-8314-4052-b87a-7c6a95d11483"
        ></v-img>

      <v-card-title> Top western road trips </v-card-title>

      <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>

      <v-card-actions>
        <v-btn color="orange lighten-2" text> Explore </v-btn>

        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            I'm a thing. But, like most politicians, he promised more than he
            could deliver. You won't have time for sleeping, soldier, not with
            all the bed making you'll be doing. Then we'll go with that data
            file! Hey, you add a one and two zeros to that or we walk! You're
            going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
export default {
  data(){
    return {
      show: false,
    }
  }
}
</script>