<template>
  <div id="home">
    <TopBar>
      <span class="title white--text">美食大全</span>
    </TopBar>
    <Carousel></Carousel>
    <Search :plhd="searchText" class="mt-5"></Search>
    <v-sheet
      class="mt-5"
      tile
      color="transparent"
      v-for="(value, key, index) in cateContent"
      :key="index"
    >
      <!-- <v-card-subtitle class="subtitle-1 pb-2">
        {{ value }}
      </v-card-subtitle> -->
      <v-subheader>{{ value }}</v-subheader>
      <component :is="key"></component>
    </v-sheet>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar.vue"
import Search from "@/components/Search.vue"
import Carousel from "@/components/Home/Carousel.vue"
import HotCate from "@/components/Home/HotCate.vue"
import GreatCate from "@/components/Home/GreatCate.vue"

export default {
  components: {
    TopBar,
    Search,
    Carousel,
    HotCate,
    GreatCate,
  },

  data() {
    return {
      searchText: "想吃什么搜索这里，如潮菜",
      loading: false,
      cateContent: {
        HotCate: "热门分类",
        GreatCate: "精品好菜",
      },
    }
  },
}
</script>

<style></style>
