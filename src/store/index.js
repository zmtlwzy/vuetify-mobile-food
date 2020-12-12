import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const _bottomNavData = [
  {
    text: "美食大全",
    link: "/home",
    path:
      "M936.533333 213.333333h-166.4V85.333333c0-23.466667-19.2-42.666667-42.666666-42.666666s-42.666667 19.2-42.666667 42.666666v128h-166.4c-25.173333 0-44.8 21.76-42.666667 46.933334l5.12 51.626666c157.013333 36.266667 289.28 147.626667 289.28 328.106667l0.853334 341.333333h72.533333c35.84 0 65.28-27.733333 69.546667-62.72L978.773333 260.266667c2.56-25.173333-17.066667-46.933333-42.24-46.933334z m-294.4 682.666667h-554.666666c-23.466667 0-42.666667 19.2-42.666667 42.666667s19.2 42.666667 42.666667 42.666666h554.666666c23.466667 0 42.666667-19.2 42.666667-42.666666s-19.2-42.666667-42.666667-42.666667z m-550.4-256h546.133334c26.453333 0 47.36-23.893333 42.24-49.493333-27.733333-137.813333-171.52-206.933333-315.306667-206.933334s-287.146667 69.12-315.306667 206.933334c-5.12 25.6 16.213333 49.493333 42.24 49.493333z m550.4 85.333333h-554.666666c-23.466667 0-42.666667 19.2-42.666667 42.666667s19.2 42.666667 42.666667 42.666667h554.666666c23.466667 0 42.666667-19.2 42.666667-42.666667s-19.2-42.666667-42.666667-42.666667z",
  },
  {
    text: "分类",
    link: "/category",
    path:
      "M320 64 192 64C121.6 64 64 121.6 64 192l0 128c0 70.4 57.6 128 128 128l128 0c70.4 0 128-57.6 128-128L448 192C448 121.6 390.4 64 320 64zM768 64l-128 0C569.6 64 512 121.6 512 192l0 128c0 70.4 57.6 128 128 128l128 0c70.4 0 128-57.6 128-128L896 192C896 121.6 838.4 64 768 64zM320 512 192 512c-70.4 0-128 57.6-128 128l0 128c0 70.4 57.6 128 128 128l128 0c70.4 0 128-57.6 128-128l0-128C448 569.6 390.4 512 320 512zM768 512l-128 0c-70.4 0-128 57.6-128 128l0 128c0 70.4 57.6 128 128 128l128 0c70.4 0 128-57.6 128-128l0-128C896 569.6 838.4 512 768 512z",
  },
  {
    text: "美食地图",
    link: "/maps",
    path:
      "M512 0C321.240382 0 167.210876 154.029505 167.210876 344.789124c0 73.460226 23.696847 142.181082 62.796645 197.868672L452.757883 959.722303l29.621058 50.948221c17.772635 17.772635 40.28464 17.772635 58.057275 0L570.057275 959.722303l222.750362-417.064507c39.099798-55.68759 62.796644-124.408447 62.796644-197.868672C856.789124 154.029505 701.574776 0 512 0z m0 526.070003c-72.275383 0-133.887185-41.469482-163.508244-101.896442-11.848423-23.696847-17.772635-50.948221-17.772635-79.384437 0-100.7116 81.754122-181.280879 181.280879-181.28088 100.7116 0 181.280879 81.754122 181.280879 181.28088 0 28.436216-7.109054 55.68759-17.772635 79.384437-29.621059 60.42696-92.417703 101.896442-163.508244 101.896442z",
  },
  {
    text: "更多",
    link: "/more",
    path:
      "M96 416a96 96 0 1 1 0 192 96 96 0 0 1 0-192z m416 0a96 96 0 1 1 0 192 96 96 0 0 1 0-192z m416 0a96 96 0 1 1 0 192 96 96 0 0 1 0-192z",
  },
]

const firRenderBN = () => {
  let lo = window.localStorage.getItem("showMaps")
  if (lo === null) {
    lo = window.localStorage.setItem("showMaps", true)
  }
  return JSON.parse(lo)
}

export default new Vuex.Store({
  state: {
    themeColor:'#ee742f',
    scrollTop: null,
    lastScrollTop: null,
    lastShowBottomNav: true,
    windowSize: {
      x: 0,
      y: 0,
    },
    showMaps: firRenderBN(),
    snackbar: false,
    snackbarTime: 3000,
    snackbarTimer:null,
    snackbarText: '',
  },
  mutations: {
    changeThemeColor(state,value='#ee742f'){
      state.themeColor = value
    },
    setOffsetTop(state, e) {
      state.lastScrollTop = state.scrollTop
      state.scrollTop = e.target.scrollTop
    },
    onResize(state) {
      state.windowSize = { x: window.innerWidth, y: window.innerHeight }
    },
    toggleBND(state, bool) {
      console.log("toggle")
      state.showMaps = bool
      window.localStorage.setItem("showMaps", bool)
    },
    showSnackbar(state, text) {
      clearTimeout(state.snackbarTimer)
      state.snackbarText = text
      state.snackbar = true
      state.snackbarTimer = setTimeout(() => {
        state.snackbar = false
      }, state.snackbarTime);
    },
    closeSnackbar(state) {
      state.snackbar = false
    }
  },
  actions: {},
  modules: {},
  getters: {
    showBottomNav: (state) => {
      if (Math.abs(state.scrollTop - state.lastScrollTop) > 10) {
        if (state.scrollTop > state.lastScrollTop) {
          state.lastShowBottomNav = false
          return false
        } else {
          state.lastShowBottomNav = true
          return true
        }
      }
      return state.lastShowBottomNav
    },
    bottomNavData(state) {
      const arr = [..._bottomNavData]
      if (state.showMaps) {
        return arr
      }
      arr.splice(2, 1)
      return arr
    },
  },
})
