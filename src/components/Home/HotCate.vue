<template>
  <div class="hot-cate mt-2">
    <v-slide-x-transition hide-on-leave>
      <div class="skeleton-btn" v-if="isLoading">
        <v-skeleton-loader
          v-for="index in 12"
          :key="index"
          type="button"
          height="40"
        >
        </v-skeleton-loader>
      </div>

      <v-sheet class="real-data" v-else>
        <v-btn
          v-for="(item, index) in hotCate"
          :key="index"
          depressed
          tile
          height="50"
          width="100%"
        >
          {{ item.title }}
        </v-btn>
      </v-sheet>
    </v-slide-x-transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hotCate: null,
    }
  },
  computed: {
    isLoading() {
      return this.hotCate === null
    },
  },
  created() {
    this.$axios.get("/home/hotCate").then((resp) => {
      this.hotCate = resp.list
    })
  },
}
</script>

<style lang="scss">
$border-color: #ccc;
$border-width: 1px;
@mixin gridSame {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: $border-width;
  justify-items: center;
}
.hot-cate {
  .skeleton-btn {
    @include gridSame();
    background-color: transparent;
    grid-template-rows: repeat(3, 50px);
  }
  .real-data {
    @include gridSame();
    border: $border-width solid $border-color;
    border-left-width: 0;
    border-right-width: 0;
    background-color: $border-color;
  }
}
</style>
