<template>
  <div class="Maps">
    <iframe
      :src="src"
      frameborder="0"
      title="ifm"
      :style="{ height: '100vh', width: '100%' }"
    >
      maps
    </iframe>
  </div>
</template>

<script>
export default {
  computed:{
    src(){
      return process.env.NODE_ENV === 'development' ? '/Map.html' : 'Map.html'
    }
  }
}
</script>
