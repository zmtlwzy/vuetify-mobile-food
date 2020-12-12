<template>
  <v-app>
    <v-main v-scroll:body="setOffsetTop" class="grey lighten-5">
      <!-- <v-window v-model="viewIndex" touchless>
        <v-window-item
          v-for="n in bottomNavData.length"
          :key="n"
          transition="fade-transition"
          reverse-transition="fade-transition"
        >
          <component :is="getCurrentCom(n-1)"></component>
        </v-window-item>
       
        </v-window-item>
      </v-window> -->

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
// import Home from "@/views/Home"
// import Category from "@/views/Category"
// import Maps from "@/views/Maps"
// import More from "@/views/More"

export default {
  name: "App",
  components: {
    BottomNav,
    // Home,
    // Category,
    // Maps,
    // More,
  },

  computed: {
    ...mapState(["snackbar", "snackbarText","themeColor"]),
    ...mapGetters(["bottomNavData"]),
  },

  methods: {
    // getCurrentCom(index) {
    //   switch (index) {
    //     case 0:
    //       return "Home"
    //     case 1:
    //       return "Category"
    //     case 2:
    //       if (this.bottomNavData.length === 3) return "More"
    //       return "Maps"
    //     case 3:
    //       return "More"
    //   }
    // },
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
