<template>
    <div class="type-nav">
      <div class="container">
        <!-- 事件委派：将子元素需要绑定的事件交给其父元素 -->
        <div  @mouseleave="leaveIndex" @mouseenter="sortShow">
          <h2 class="all">全部商品分类</h2>
          <!-- 三级联动 为导航栏添加动画-->
          <transition name="sort">
            <div class="sort" v-show="show">
            <!-- 事件委派：将每个a标签的goSearch方法委派给父元素，防止过多的回调函数 -->
              <div class="all-sort-list2" @click="goSearch">
                  <div class="item" v-for="(c1,index) in categoryList" :key="c1.categoryId" @mouseenter="current(index)" :class="{cur:currentIndex===index}">
                      <h3>
                        <!-- 自定义属性data-categoryname(注意全部小写) 可使用e.target.dataset获取 可判断点击的元素是否为a标签 -->
                          <a :data-categoryname="c1.categoryName" :data-category1id="c1.categoryId">{{ c1.categoryName }}</a>
                      </h3>
                      <!-- 二，三级分类 -->
                      <div class="item-list clearfix" :style="{display:currentIndex==index?'block':'none'}">
                          <div class="subitem" v-for="(c2,index) in c1.categoryChild" :key="c2.categoryId">
                              <dl class="fore">
                                  <dt>
                                      <a :data-categoryname="c2.categoryName" :data-category2id="c2.categoryId">{{ c2.categoryName }}</a>
                                  </dt>
                                  <dd>
                                      <em v-for="(c3,index) in c2.categoryChild" :key="c3.categoryId">
                                          <a :data-categoryname="c3.categoryName" :data-category3id="c3.categoryId">{{ c3.categoryName }}</a>
                                      </em>
                                  </dd>
                              </dl>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          </transition>
        </div>
          <nav class="nav">
              <a href="###">服装城</a>
              <a href="###">美妆馆</a>
              <a href="###">尚品汇超市</a>
              <a href="###">全球购</a>
              <a href="###">闪购</a>
              <a href="###">团购</a>
              <a href="###">有趣</a>
              <a href="###">秒杀</a>
          </nav>

      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
// 按需引入Lodash中的节流函数throttle
import throttle from 'lodash/throttle'
export default {
    name:'typeNav',
    data(){
        return{
            currentIndex:-1,
            show:true,
        }
    },
    methods:{
        // 使用节流防止用户频繁操作 注意throttle函数不要写成箭头函数，注意函数上下文
        current:throttle(function(index){
            this.currentIndex=index
        },50),
        sortShow(){
            if(this.$route.path != '/home'){
                this.show=true
            }
        },
        leaveIndex(){
            this.currentIndex=-1
            if(this.$route.path != '/home'){
                this.show=false
            }
        },
        goSearch(e){
            // dataset获取用户点击的标签自定义分类数据
            let {categoryname,category1id,category2id,category3id}=e.target.dataset
            if(categoryname){
                let location={name:'Search',query:{categoryname:categoryname}}
                if(category1id){
                    location.query.category1id=category1id
                }else if(category2id){
                    location.query.category2id=category2id
                }else if(category3id){
                    location.query.category3id=category3id
                }
                // 判断是否含有搜索框里的params参数
                if(this.$route.params){
                    location.params=this.$route.params
                }
                this.$router.push(location)
            }
        }
    },
    // 组件挂载完毕，向服务器发请求加载数据
    mounted(){
        // 通过判断路径设置导航分类的显示与隐藏
        if(this.$route.path!=='/home'){
            this.show=false
        }
    },
    computed:{
        // mapState的对象形式 右侧为一个箭头函数，接收参数state
       ...mapState({
         categoryList:(state)=>{
            return state.Home.categoryList
         }
       })
    }
}
</script>

<style scoped lang="less">
    .type-nav {
        border-bottom: 2px solid #e1251b;

        .container {
            width: 1200px;
            margin: 0 auto;
            display: flex;
            position: relative;

            .all {
                width: 210px;
                height: 45px;
                background-color: #e1251b;
                line-height: 45px;
                text-align: center;
                color: #fff;
                font-size: 14px;
                font-weight: bold;
            }

            .nav {
                a {
                    height: 45px;
                    margin: 0 22px;
                    line-height: 45px;
                    font-size: 16px;
                    color: #333;
                }
            }

            .sort {
                position: absolute;
                left: 0;
                top: 45px;
                width: 210px;
                height: 511px;
                position: absolute;
                background: #fafafa;
                z-index: 999;

                .all-sort-list2 {
                    overflow: auto;
                    .item {
                        h3 {
                            line-height: 30px;
                            font-size: 14px;
                            font-weight: 400;
                            overflow: hidden;
                            padding: 0 20px;
                            margin: 0;

                            a {
                                color: #333;
                            }
                        }

                        .item-list {
                            display: none;
                            position: absolute;
                            width: 734px;
                            min-height: 511px;
                            background: #f7f7f7;
                            left: 210px;
                            border: 1px solid #ddd;
                            top: 0;
                            z-index: 9999 !important;

                            .subitem {
                                float: left;
                                width: 650px;
                                padding: 0 4px 0 8px;

                                dl {
                                    border-top: 1px solid #eee;
                                    padding: 6px 0;
                                    overflow: hidden;
                                    zoom: 1;

                                    &.fore {
                                        border-top: 0;
                                    }

                                    dt {
                                        float: left;
                                        width: 54px;
                                        line-height: 22px;
                                        text-align: right;
                                        padding: 3px 6px 0 0;
                                        font-weight: 700;
                                    }

                                    dd {
                                        float: left;
                                        width: 415px;
                                        padding: 3px 0 0;
                                        overflow: hidden;

                                        em {
                                            float: left;
                                            height: 14px;
                                            line-height: 14px;
                                            padding: 0 8px;
                                            margin-top: 5px;
                                            border-left: 1px solid #ccc;
                                        }
                                    }
                                }
                            }
                        }

                    }
                    .cur{
                        background: rgb(179, 200, 231);
                    }
                }
            }

            .sort-enter,.sort-leave-to{
                height:0
            }
            .sort-enter-to,.sort-leave{
                height:511px
            }
            .sort-enter-active,.sort-leave-active{
                transition:all .3s linear;
            }
        }
    }
</style>