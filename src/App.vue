<template>
  <v-app class="max-w-650px mx-auto">
    <v-main v-scroll:body="setOffsetTop" class="grey lighten-5">
      <transition mode="out-in">
        <router-view></router-view>
      </transition>
    </v-main>
    <BottomNav />
    <v-snackbar :value="snackbar" :color="themeColor">
      {{ snackbarText }}

      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="closeSnackbar">
          关闭
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex"

import BottomNav from "@/components/BottomNav"

export default {
  name: "App",
  components: {
    BottomNav,

  },

  computed: {
    ...mapState(["snackbar", "snackbarText","themeColor"]),
    ...mapGetters(["bottomNavData"]),
  },

  methods: {
    ...mapMutations(["setOffsetTop","closeSnackbar"]),
  },
}
</script>

<style lang="scss">
html,
body {
  height: 100%;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.2s ease;
}
</style>
