<template>
  <div class="swiper-container" ref="cur">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="carousel in list" :key="carousel.id">
        <img :src="carousel.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from 'swiper';

export default {
  name: "Carousel",
  props: ["list"],
  watch: {
    list: {
      // 初始化监听，不管数据有没有变化 先初始化监听一次
      immediate:true,
      // handler函数接收两个参数，改变后的数据和改变前的数据
      handler(newValue, oldValue) {
        // nettTick在下次DOM更新 循环结束之后 执行延迟回调，在修改数据之后立即使用这个方法，获取更新后的DOM
        this.$nextTick(() => {
          // 由于必须要在页面中的DOM元素已经存在时，才能new Swiper实例，所以使用$nextTick钩子确保DOM元素已经渲染完毕
          new Swiper(this.$refs.cur, {
            // 可以, 只会匹配, 当前组件中的对应元素
            // direction: 'vertical', // 垂直切换选项   默认是水平轮播
            loop: true, // 循环模式

            // 分页器
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },

            // 前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      },
    },
  },
};
</script>

<style></style>
