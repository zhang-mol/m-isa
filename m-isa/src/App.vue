<template>
  <div>
    <router-view></router-view>
    <footerNav></footerNav>
  </div>
</template>

<script>
import footerNav from './components/footerNav/footerNav'
export default {
  components: {
    footerNav: footerNav
  }
}
</script>

<style lang="stylus">
  @import "./common/stylus/common.styl"
  @import "./common/stylus/index.styl"
</style>
