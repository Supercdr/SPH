<template>
  <div class="spec-preview">
    <img :src="imgObj.imgUrl" />
    <div class="event" @mousemove="changeMask" ref="area"></div>
    <!-- 放大区域 -->
    <div class="big">
      <img :src="imgObj.imgUrl"  ref="bigImg"/>
    </div>
    <!-- 遮罩区域 -->
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
export default {
  name: "Zoom",
  props: ["skuImageList"],
  data() {
    return {
      imgId: 0,
    };
  },
  computed: {
    imgObj() {
      if (this.skuImageList && this.skuImageList.length > 0) {
        let result = this.skuImageList.find((item) => item.id == this.imgId);
        return result || this.skuImageList[0];
      }
      // 防止在请求数据返回之前页面已经加载完毕，读取到空数组为undefined的情况
      return {};
    },
  },
  methods: {},
  mounted() {
    this.$bus.$on("changeImage", (imgId) => {
      this.imgId = imgId;
    });
  },
  methods: {
    changeMask(e) {
      let { mask, area, bigImg } = this.$refs;
      let left = e.offsetX - mask.offsetWidth / 2;
      let top = e.offsetY - mask.offsetHeight / 2;
      if (left < 0) left = 0;
      if (left > area.offsetWidth - mask.offsetWidth)
        left = area.offsetWidth - mask.offsetWidth;
      if (top < 0) top = 0;
      if (top > area.offsetHeight - mask.offsetHeight)
        top = area.offsetHeight - mask.offsetHeight;
      mask.style.left = left + "px";
      mask.style.top = top + "px";
      bigImg.style.top=-top*2+ "px";
      bigImg.style.left=-left*2+ "px";
    },
  },
  beforeDestroy() {
    this.$bus.$off("changeImage");
  },
};
</script>

<style lang="less">
.spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;

  img {
    width: 100%;
    height: 100%;
  }

  .event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
  }

  .mask {
    width: 50%;
    height: 50%;
    background-color: rgba(0, 255, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  .big {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 100%;
    border: 1px solid #aaa;
    overflow: hidden;
    z-index: 998;
    display: none;
    background: white;

    img {
      width: 200%;
      max-width: 200%;
      height: 200%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .event:hover ~ .mask,
  .event:hover ~ .big {
    display: block;
  }
}
</style>
