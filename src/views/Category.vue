<template>
  <div class="category" v-resize="onResize">
    <div id="computed-height" ref="scroll-target">
      <TopBar>
        <Toggle v-model="isToggle" :toggleText="['分类', '食材']"></Toggle>
      </TopBar>
      <Search plhd="想吃什么搜这里，如排骨" class="mt-3 pb-3"></Search>
    </div>

    <v-card flat>
      <v-tabs
        vertical
        background-color="grey lighten-4"
        active-class="active-tab"
        :color="themeColor"
        id="vtab-scroll"
        @change="getCategoryData"
        v-model="tab"
        slider-size="2"
      >
        <v-tab
          v-for="(item, index) in tabsData"
          :key="index"
          :style="{ flex: '0 0 60px' }"
        >
          {{ item }}
        </v-tab>

        <v-tab-item v-for="(item, index) in tabsData" :key="index">
          <v-container id="cate-grid-container">
            <div
              v-for="(item, index) in axiosData"
              :key="index"
              class="item"
              v-ripple
            >
              {{ item.value }}
            </div>
          </v-container>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex"
import { CancelToken } from "axios"

import Toggle from "@/components/Toggle"
import TopBar from "@/components/TopBar.vue"
import Search from "@/components/Search.vue"

const category = [
  "菜式",
  "菜系",
  "烘焙",
  "主食",
  "器具",
  "烹饪方式",
  "场合",
  "人群",
  "节日",
  "烹饪技巧",
  "造型",
  "仿作",
  "自制食物",
  "创意",
  "甜品",
  "小吃",
]

const material = [
  "肉类",
  "蛋/奶",
  "鱼类",
  "水产",
  "蔬菜",
  "豆类",
  "果品类",
  "五谷杂粮",
  "药食",
  "调味品",
  "其他",
]

const goToOptions = {
  duration: 300,
  offset: 0,
  easing: "easeInOutCubic",
}

// console.log(Vue.prototype.$vuetify)

export default {
  components: {
    Toggle,
    TopBar,
    Search,
  },
  data() {
    return {
      tab: null,
      isToggle: false,
      height: 0,
      tabsData: category,
      axiosData: [],
      source: null,
    }
  },
  computed: {
    ...mapState(["windowSize", "themeColor"]),
  },
  watch: {
    windowSize(val) {
      this.height =
        val.y -
        document.querySelector("#computed-height").offsetHeight -
        document.querySelector(".v-bottom-navigation").offsetHeight

      this.handleAllHeight()
    },
    isToggle(val) {
      this.tab = null
      if (val) {
        this.tabsData = material
      } else {
        this.tabsData = category
      }

      const sideMenu = document.querySelector(
        "#vtab-scroll .v-tabs-bar__content"
      )
      setTimeout(() => {
        this.scrolltoTop(sideMenu)
      }, 200);

    },
  },
  created() {
    // this.getCategoryData()
  },
  methods: {
    ...mapMutations(["onResize"]),
    handleTabsHeight() {
      const element = document.querySelector(
        "#vtab-scroll .v-tabs-bar__content"
      )
      if (!element) return
      element.style.height = `${this.height}px`
    },
    handleTabsContentHeight() {
      // 因为会重新渲染元素，把高度赋给父容器，css再给到100%
      const element = document.querySelector("#vtab-scroll .v-tabs-items")
      if (!element) return
      element.style.height = `${this.height}px`
    },
    handleAllHeight() {
      this.handleTabsHeight()
      this.handleTabsContentHeight()
    },
    scrolltoTop(element) {
      this.$vuetify.goTo(
        0,
        Object.assign(goToOptions, {
          container: element,
        })
      )
    },
    cancel() {
      this.source && this.source.cancel("中断请求")
    },
    getCategoryData() {
      this.cancel()
      this.source = CancelToken.source() // 这里初始化source对象
      this.$axios
        .get("/category/main", {
          cancelToken: this.source.token,
        })
        .then((resp) => {
          this.axiosData = resp.list
          this.source = null
          const content = document.querySelector(
            "#vtab-scroll .v-window__container"
          )
          content.scrollTop = 0
        })
        .catch((res) => {
          // 如果调用了cancel方法，那么这里的res就是cancel传入的信息
          // 你的逻辑
          console.log(res)
        })
    },
  },
}
</script>

<style lang="scss">
.category {
  .active-tab {
    background-color: #fff;
    &::before {
      opacity: 0 !important;
    }
  }

  #vtab-scroll {
    .v-tabs-bar__content {
      overflow-y: auto;
    }
    .v-window__container {
      height: 100%;
      overflow-y: auto;
    }
  }

  #cate-grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 9vh;
    gap: 5px;
    > .item {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
      color: grey;
    }
  }

  // 取消各个标签页的切换动画
  .v-window-x-transition-enter-active,
  .v-window-x-transition-leave-active,
  .v-window-x-reverse-transition-enter-active,
  .v-window-x-reverse-transition-leave-active,
  .v-window-y-transition-enter-active,
  .v-window-y-transition-leave-active,
  .v-window-y-reverse-transition-enter-active,
  .v-window-y-reverse-transition-leave-active {
    transition-duration: 0s;
  }
}
</style>
