<template>
  <div class="swiper">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(slide, index) in swiperSlides" :key="index" @mouseover.native="stopPlay" @mouseout.native="play" class="swiper-slide">
        <img :src="slide.url" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
export default {
  name: 'carrousel',
  data () {
    return {
      swiperSlides: [
        {url: require('../../common/images/banner/banner1.jpg')}, // 通过require来引用图片,若是在static中,不需要require
        {url: require('../../common/images/banner/banner2.jpg')},
        {url: require('../../common/images/banner/banner3.jpg')},
        {url: require('../../common/images/banner/banner4.jpg')}
      ],
      swiperOption: {
        notNextTick: true,
        autoplay: {
          delay: 2500, // 时间
          disableOnInteraction: false // 用户操作后,是否禁止swiper
        },
        loop: true, // 无限模式
        pagination: {
          el: '.swiper-pagination',
          clickable: true // 点击跳转到相应slide
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    stopPlay () {
      this.swiper.autoplay.stop() // 鼠标移入停止轮播,@mouseover需要添加native才生效,移动端触摸无效
    },
    play () {
      this.swiper.autoplay.start() // 鼠标移出继续轮播,@mouseout需要添加native才生效,移动端触摸无效
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="stylus">
pag-button = #ffffff // swiper按钮默认颜色
pag-active = #007aff // swiper-active按钮颜色
.swiper
  width 10rem
  overflow hidden
  .swiper-slide
    img
      width 100%
      height 100%
  .swiper-pagination-bullet
    width 10px
    height 10px
    background pag-button
    opacity .6
  .swiper-pagination-bullet-active
    background pag-active
</style>
