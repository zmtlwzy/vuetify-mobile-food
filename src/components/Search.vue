<template>
  <v-text-field
    :loading="loading"
    class="mx-4"
    :placeholder="plhd"
    hide-details
    clearable
    background-color="grey lighten-4"
    :color="themeColor"
    dense
    outlined
    flat
    solo
    prepend-inner-icon="mdi-magnify"
  ></v-text-field>
</template>

<script>
import { mapState } from "vuex"

export default {
  data() {
    return {
      loading: false,
    }
  },

  props: {
    plhd: {
      type: String,
      default: "",
    },
  },

  computed: {
    ...mapState(["themeColor"]),
  },
}
</script>

<style></style>
