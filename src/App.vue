<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
    <Footer v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import Header from '@/components/Header/index'
import Footer from '@/components/Footer/index'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  mounted(){
    // 加载组件时最先加载App组件，其mounted只加载一次，所以将数据请求放在App的mounted中可使请求只发送一次，优化了性能
    // 通知vuex发请求获取数据，并且将数据存储在仓库中
    this.$store.dispatch('Home/getCategoryList')
  }
}
</script>

<style>

</style>
