<template>
  <div :class="{ toggle: true, active: active }" @click="change">
    <span v-for="(item, index) in toggleText" :key="index">{{ item }}</span>
    <div class="after">
      <span
        v-for="(item, index) in toggleText"
        :key="index"
        :style="{ color: themeColor }"
        >{{ item }}</span
      >
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  model: {
    prop: "active",
    event: "change",
  },
  props: {
    active: {
      type: Boolean,
    },
    toggleText: {
      type: Array,
      required: true,
    },
  },
  computed: {
    ...mapState(["themeColor"]),
  },
  methods: {
    // ...mapMutations(["showSnackbar"]),
    change() {
      this.$emit("change", !this.active)
      // this.showSnackbar("更改成功")
    },
  },
}
</script>

<style lang="scss">
$height: 35px;
$width: $height * 5;
$radius: $height;
$transition: all 0.3s ease;
$move-R: calc(-50% + #{$width} / 2);
$move-L: calc(-50% - #{$width} / 2);

@mixin span-same {
  position: absolute;
  left: 50%;
  transition: $transition;
}

.toggle {
  width: $width;
  height: $height;
  border: 1px solid white;
  border-radius: $radius;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  box-sizing: content-box;
  box-shadow: inset 0.1px 0 0 white, inset -0.1px 0 0 white;
  cursor: pointer;
  &.active {
    .after {
      left: $width / 2;
      span:nth-child(1) {
        transform: translateX($move-L);
      }
      span:nth-child(2) {
        transform: translateX(-50%);
      }
    }
  }
  span {
    color: white;
    font-size: 1rem;
    font-weight: bold;
  }
  .after {
    position: absolute;
    top: 0;
    left: 0px;
    width: $width / 2;
    height: $height;
    background-color: rgba(255, 255, 255, 1);
    border-radius: $radius;
    transition: $transition;
    overflow: hidden;
    display: flex;
    align-items: center;
    span:nth-child(1) {
      @include span-same();
      transform: translateX(-50%);
    }
    span:nth-child(2) {
      @include span-same();
      transform: translateX($move-R);
    }
  }
}
</style>
