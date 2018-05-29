<template>
  <div>
    <div class="logo">
      <img src="../../common/images/logo.jpg" alt="logo" class="logo-img">
    </div>
    <banner></banner>
  </div>
</template>

<script>
import banner from '../banner/banner.vue'
export default {
  components: {
    banner: banner
  }
}
</script>

<style lang="stylus">
  @import "../../common/stylus/common.styl"
  @import "../../common/stylus/index.styl"
</style>
