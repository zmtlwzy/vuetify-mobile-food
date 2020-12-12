<template>
  <div class="more fill-height">
    <TopBar>
      <span class="title white--text">设置</span>
    </TopBar>
    <v-main class="px-5">
      <v-switch v-model="showMaps" :color="themeColor">
        <template #label>
          <div
            :style="{ width: '100%', textAlign: 'right', paddingRight: '1rem' }"
            class="grey--text text--darken-2"
          >
            是否显示地图
          </div>
        </template>
      </v-switch>
      <div
        class="d-flex justify-space-between"
        :style="{
          height: '25px',
          paddingRight: '1rem',
        }"
      >
        <v-sheet
          :color="themeColor"
          @click.stop="dialog = true"
          width="40"
          :style="{ height: '100%' }"
        />
        <span
          class="d-flex align-center grey--text text--darken-2"
          :style="{ height: '100%' }"
          >更改主题颜色</span
        >
      </div>
      <v-dialog v-model="dialog" max-width="290">
        <v-card>
          <v-card-title class="headline">颜色选择器</v-card-title>

          <v-color-picker
            class="ma-2"
            :value="themeColor"
            @input="inputChange"
          ></v-color-picker>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="green darken-1" text @click="handleCancel">
              取消
            </v-btn>

            <v-btn color="green darken-1" text @click="handleSetColor">
              确定
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-main>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapState } from "vuex"

import TopBar from "@/components/TopBar.vue"
export default {
  components: {
    TopBar,
  },
  data() {
    return {
      dialog: false,
      pickerColor: undefined,
    }
  },
  computed: {
    ...mapState(["themeColor"]),
    ...mapGetters(["bottomNavData"]),
    showMaps: {
      get() {
        return this.$store.state.showMaps
      },
      set(val) {
        this.toggleBND(val)
      },
    },
  },
  methods: {
    ...mapMutations(["toggleBND", "changeThemeColor"]),
    handleSetColor() {
      this.changeThemeColor(this.pickerColor)
      this.dialog = false
    },
    handleCancel() {
      this.pickerColor = undefined
      this.dialog = false
    },
    inputChange(val) {
      this.pickerColor = val
    },
  },
}
</script>
