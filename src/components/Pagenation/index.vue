<template>
  <div class="fr page">
    <div class="sui-pagination clearfix">
      <ul>
        <li class="prev" :class="{ disabled: pageNo == 1 }">
          <button @click="$emit('getPageNo', pageNo - 1)">上一页</button>
        </li>
        <li v-if="startAndNum().start > 1" :class="{ active: pageNo == 1 }">
          <button @click="$emit('getPageNo', 1)">1</button>
        </li>
        <li v-if="startAndNum().start > 2"><button>...</button></li>
        <template v-for="(page, index) of startAndNum().end">
          <li
            v-if="page >= startAndNum().start"
            :key="index"
            :class="{ active: pageNo == page }"
          >
            <button @click="$emit('getPageNo', page)">
              {{ page }}
            </button>
          </li>
        </template>
        <li v-if="startAndNum().end < totalPage - 1"><button>...</button></li>
        <li :class="{ active: pageNo == totalPage }">
          <button
            v-if="startAndNum().end < totalPage"
            @click="$emit('getPageNo', totalPage)"
          >
            {{ totalPage }}
          </button>
        </li>
        <li class="next" :class="{ disabled: pageNo == totalPage }">
          <button @click="$emit('getPageNo', pageNo + 1)">下一页»</button>
        </li>
        <li>
          <button>共{{ totalData }}条</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagenation",
  // 当前页面，页面数据个数，总数据个数，连续显示页面个数
  props: ["pageNo", "pageSize", "totalData", "continues"],
  computed: {
    // 计算总页面
    totalPage() {
      // Math.ceil()对结果向上取整
      return Math.ceil(this.totalData / this.pageSize);
    },
  },
  methods: {
    // 计算连续页面的start和end
    startAndNum() {
      let { continues, pageNo } = this;
      let start = 0,
        end = 0;
      if (continues > this.totalPage) {
        start = 1;
        end = this.totalPage;
      } else {
        // Math.floor向下取整
        start = pageNo - Math.floor(continues / 2);
        // parseInt将数字转换为整数，也相当于向下取整
        end = pageNo + parseInt(continues / 2);
        if (start < 1) {
          start = 1;
          end = continues;
        }

        if (end > this.totalPage) {
          end = this.totalPage;
          start = end - continues + 1;
        }
      }
      return { start, end };
    },
  },
};
</script>

<style scoped lang="less">
.page {
  height: 66px;
  overflow: hidden;
  .sui-pagination {
    margin: 18px 0;
    ul {
      margin-bottom: 0;
      vertical-align: middle;
      text-align: center;
      li {
        line-height: 18px;
        display: inline-block;
        button {
          position: relative;
          line-height: 18px;
          text-decoration: none;
          background-color: #efecec;
          border: 1px solid #e1e1e1;
          margin-left: 7px;
          font-size: 14px;
          padding: 9px 18px;
          color: #333;
        }

        &.prev {
          button {
            background-color: #fafafa;
          }
        }
        &.active {
          button {
            background-color: #fff;
            color: #e1251b;
            border-color: #fff;
            cursor: default;
          }
        }
        &.disabled {
          button {
            color: #999;
            cursor: default;
          }
        }
        &.next {
          button {
            background-color: #fafafa;
          }
        }
      }
    }
    div {
      color: #333;
      font-size: 14px;
      float: right;
      width: 241px;
    }
  }
}
</style>
