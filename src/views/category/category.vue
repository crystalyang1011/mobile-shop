<script setup>
import { ref } from 'vue'
const active = ref(0)
const sideBarsList = ref([
  {
    title: '食品'
  },
  {
    title: '女装'
  },
  {
    title: '男装'
  },
  {
    title: '食品'
  },
  {
    title: '女装'
  },
  {
    title: '男装'
  },
  {
    title: '食品'
  },
  {
    title: '女装'
  },
  {
    title: '男装'
  },
  {
    title: '食品'
  },
  {
    title: '女装'
  },
  {
    title: '男装'
  }
])
</script>
<template>
  <div class="cate">
    <div class="left" style="width: 22%">
      <van-sidebar v-model="active">
        <van-sidebar-item dot title="推荐" to="/category/content" />
        <van-sidebar-item
          v-for="i in sideBarsList"
          :key="i"
          :title="i.title"
          to="/category/content"
        />
      </van-sidebar>
    </div>
    <div class="right" style="width: 78.5%">
      <router-view></router-view>
    </div>
  </div>
</template>
<style lang="less" scoped>
.cate {
  display: flex;
}
</style>
