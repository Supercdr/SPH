<template>
  <div class="spec-preview">
    <img :src="imgObj.imgUrl" />
    <div class="event"></div>
    <div class="big">
      <img :src="imgObj.imgUrl" />
    </div>
    <div class="mask"></div>
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
      let item=this.skuImageList.forEach((item) => {
          if (item.id == this.imgId) {
            console.log(item)
            return item||{};
          }else{
            return this.skuImageList[0]
          }
        }) 
      // 防止在请求数据返回之前页面已经加载完毕，读取到空数组为undefined的情况
      return  item||{}
      },
  },
  methods: {},
  mounted() {
    this.$bus.$on("changeImage", (imgId) => {
      console.log("changeImage", imgId);
      this.imgId = imgId;
    });
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
