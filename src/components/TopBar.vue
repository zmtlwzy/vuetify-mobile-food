<template>
  <v-toolbar
    :height="height"
    flat
    tile
    :color="themeColor"
    class="d-flex justify-center"
  >
    <slot name="default">请输入内容</slot>
  </v-toolbar>
</template>

<script>
import { mapState } from "vuex"
export default {
  props: {
    height: {
      type: [Number, String],
      default: 48,
    },
  },
  computed: {
    ...mapState(["themeColor"]),
  },
}
</script>

<style></style>
