<template>
  <div class="footerNav">
    <ul class="clearfix">
      <!-- <li v-for="(link, index) in links" :key="index" class="link-list fl">
        <router-link :to="link.url" :style="{backgroundImage: index == ins ? 'url(' + link.bgActive + ')': 'url(' + link.bg + ')'}"
        @click.native="showIcon(index)" :class="{'active2': index == ins}">{{link.title}}</router-link>
      </li> -->
      <li v-for="(link, index) in links" :key="index" class="link-list fl">
         <router-link :to="link.url">{{link.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ins: 0,
      links: [
        {
          url: '/home',
          title: '首页',
          bg: require('../../common/images/icon/home.svg'),
          bgActive: require('../../common/images/icon/homes.svg')
        },
        {
          url: '/classify',
          title: '分类',
          bg: require('../../common/images/icon/classify.svg'),
          bgActive: require('../../common/images/icon/classifys.svg')
        },
        {
          url: '/find',
          title: '发现',
          bg: require('../../common/images/icon/found.svg'),
          bgActive: require('../../common/images/icon/founds.svg')
        },
        {
          url: '/shopCart',
          title: '购物车',
          bg: require('../../common/images/icon/shopCart.svg'),
          bgActive: require('../../common/images/icon/shopCarts.svg')
        },
        {
          url: '/my',
          title: '我的',
          bg: require('../../common/images/icon/my.svg'),
          bgActive: require('../../common/images/icon/mys.svg')
        }
      ]
    }
  },
  methods: {
    showIcon (index) { // 判断当前点击元素的下标,通过class条件(点击时的ins与循环时的下标是否一致)是否添加active2样式
      this.ins = index
    }
  }
}
</script>

<style lang="stylus" scoped>
  .footerNav
    position fixed
    width 10rem
    height 1.4rem
    bottom 0
    left 0
    border-top 1px solid #ededed
    padding-top 2px
    .link-list
      width 2rem
      a
        display table-cell // 变成td元素
        width 5% // 宽度故意设置较小,是让table-cee占100%的宽或者固定宽度2rem
        height 1.4rem
        font-size 0.4rem
        text-align center
        vertical-align bottom // 底部对齐
        color #8a8a8a
        background-repeat  no-repeat // + ' no-repeat' + ' center top'行内样式注意空格
        background-size 100% 62%
        &:hover // 取消连续点击a标签时的蓝色背景
          -webkit-tap-highlight-color rgba(255, 255, 255, 0)
          -webkit-user-select none
          -moz-user-focus none
          -moz-user-select none
      .active // 在router中linkActiveClass: 'active',激活链接时的样式(bug:移动端左右滑动也激活链接,此时无点击事件,会导致字体变色,背景图片不变),@click与class为测试应用
        color #005197
      // .active2
      //  color #005197
      &:nth-of-type(1)     // 为解决bug只能通过css控制,思路:可以通过函数来监听页面跳转,实现背景图与文字同时变化
        a
          background-image url('../../common/images/icon/home.svg')
        .active
          background-image url('../../common/images/icon/homes.svg')
      &:nth-of-type(2)     // css控制,此时不能用行内样式
        a
          background-image url('../../common/images/icon/classify.svg')
        .active
          background-image url('../../common/images/icon/classifys.svg')
      &:nth-of-type(3)
        a
          background-image url('../../common/images/icon/found.svg')
        .active
          background-image url('../../common/images/icon/founds.svg')
      &:nth-of-type(4)
        a
          background-image url('../../common/images/icon/shopCart.svg')
        .active
          background-image url('../../common/images/icon/shopCarts.svg')
      &:nth-of-type(5)
        a
          background-image url('../../common/images/icon/my.svg')
        .active
          background-image url('../../common/images/icon/mys.svg')
</style>
