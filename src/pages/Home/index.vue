<template>
  <div>
    <typeNav />
    <ListContainer />
    <Recommand />
    <Rank />
    <Like />
    <Floor v-for="floor in floorList" :key="floor.id" :list="floor" />
    <Brand />
  </div>
</template>

<script>
import ListContainer from "@/pages/Home/listContainer";
import Recommand from "@/pages/Home/recommand";
import Rank from "@/pages/Home/rank";
import Like from "@/pages/Home/like";
import Floor from "@/pages/Home/floor";
import Brand from "@/pages/Home/brand";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    ListContainer,
    Recommand,
    Rank,
    Like,
    Floor,
    Brand,
  },
  computed: {
    ...mapState({
      floorList: (state) => state.Home.floorList,
    }),
  },
  mounted() {
    this.$store.dispatch("Home/getFloorList");
    // 获取用户信息
    this.$store.dispatch('getUserInfo')
  },
};
</script>

<style></style>
