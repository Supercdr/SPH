<template>
  <div>
    搜索页面
    <h1>params参数: {{ $route.params.keyword }}</h1>
    <h1>query参数: {{ $route.query.k }}</h1>
  </div>
</template>

<script>
export default {
name:'Search'
}
</script>

<style>

</style>