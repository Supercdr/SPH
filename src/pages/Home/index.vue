<template>
  <div>
    <typeNav/>
    <ListContainer/>
    <Recommand/>
    <Rank/>
    <Like/>
    <Floor/>
    <Brand/>
  </div>
</template>

<script>

  import ListContainer from '@/pages/Home/listContainer'
  import Recommand from '@/pages/Home/recommand'
  import Rank from '@/pages/Home/rank'
  import Like from '@/pages/Home/like'
  import Floor from '@/pages/Home/floor'
  import Brand from '@/pages/Home/brand'

  export default {
    name:'Home',
    components:{
      ListContainer,
      Recommand,
      Rank,
      Like,
      Floor,
      Brand,
    }
  }
</script>

<style>

</style>