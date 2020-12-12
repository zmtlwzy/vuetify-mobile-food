<template>
  <v-lazy
    v-model="isShow"
    :options="{
      threshold: 0.5,
    }"
    min-height="200"
  >
    <v-container class="px-3 pt-2 pb-5 mb-12">
      <v-row
        v-for="i in greatCate === null ? 0 : greatCate.length / 2"
        :key="i"
        dense
      >
        <v-col cols="6" v-for="j in 2" :key="j">
          <v-card flat outlined>
            <v-img :src="greatCate[2 * i + j - 3].img" height="150px"></v-img>

            <v-card-title class="justify-center pb-1 pt-2 card-title">
              {{ greatCate[2 * i + j - 3].title }}
            </v-card-title>

            <v-card-text class="d-flex justify-center">
              <span class="mx-1 sub-title"
                >{{ greatCate[2 * i + j - 3].pageViews }}浏览</span
              >
              <span class="mx-1 sub-title"
                >{{ greatCate[2 * i + j - 3].starNum }}收藏</span
              >
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-lazy>
</template>

<script>
export default {
  data() {
    return {
      greatCate: null,
      isShow: false,
    }
  },
  beforeCreate() {
    this.$axios.get("/home/greatCate").then((resp) => {
      this.greatCate = resp.list
    })
  },
}
</script>

<style>
.card-title {
  font-size: 1.15rem !important;
}
.sub-title {
  font-size: 0.75rem;
}
</style>
