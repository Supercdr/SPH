<template>
  <div>
    <toolBar/>
    <typeNav/>
    <listContent/>
  </div>
</template>

<script>
import toolBar from '@/pages/Search/toolBar'
import listContent from '@/pages/Search/listContent'
export default {
  name:'Search',
  components:{
    toolBar,
    listContent,
  }
}
</script>

<style>

</style>