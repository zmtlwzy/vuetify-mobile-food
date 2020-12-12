<template>
  <v-bottom-navigation
    :value="computedIndex()"
    app
    grow
    active-class="BNactive"
    class="elevation-2"
    :input-value="true"
    v-show="ifFirRen"
  >
    <v-btn
      height="100%"
      v-for="(item, index) in bottomNavData"
      :key="index"
      :to="item.link"
      exact
    >
      <span :style="{ color: bottomNavColor }">{{ item.text }}</span>
      <div class="mt-1"></div>
      <svg
        viewBox="0 0 1024 1024"
        width="22"
        height="22"
        :fill="bottomNavColor"
      >
        <path :d="item.path"></path>
      </svg>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex"
export default {
  data() {
    return {
      bottomNavColor: "#BDBDBD",
      ifFirRen: true,
      test: 0,
    }
  },
  computed: {
    ...mapState([
      "scrollTop",
      "lastScrollTop",
      "lastShowBottomNav",
      "themeColor",
    ]),
    ...mapGetters(["showBottomNav", "bottomNavData"]),
  },
  beforeMount() {
    if(document.querySelector('#style-bottomNav')) return
    const style = document.createElement("style")
    style.setAttribute("type", "text/css")
    style.setAttribute("id", "style-bottomNav")
    style.innerHTML = `.BNactive svg {
         fill:${this.themeColor}
      }
      .BNactive span {
         color:${this.themeColor} !important
      }`
    document.head.appendChild(style)
  },
  watch: {
    themeColor(val) {
      const sheet = document.querySelector("#style-bottomNav").sheet
      for (let item of sheet.cssRules) {
        switch (item.selectorText) {
          case ".BNactive svg":
            item.style.fill = val
            break
          case ".BNactive span":
            // important等关键字无法通过style.属性值设置，可以通过cssText
            item.style.cssText = `color:${val} !important`
            break
        }
      }
    },
  },
  created() {
    this.ifFirRen = false
  },

  methods: {
    ...mapMutations(["changeView"]),
    computedIndex() {
      let length = this.bottomNavData.length
      let res = null
      switch (this.$route.path) {
        case "/home":
          res = 0
          break
        case "/category":
          res = 1
          break
        case "/maps":
          res = 2
          break
        case "/more":
          if (length === 3) {
            res = 2
          } else {
            res = 3
          }
          break
      }
      // 确保路由正确后再显示
      if (res !== null) this.ifFirRen = true
      return res
    },
  },
}
</script>

