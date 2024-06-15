<script setup>
import Like from '../../components/like.vue'
import Header from './components/header.vue'
import Quick from './components/quick.vue'
import Topic from './components/topic.vue'
</script>
<template>
  <div class="home">
    <Header />
    <Quick />
    <Topic />
    <Like />
  </div>
</template>
<style lang="less" scoped>
.home {
  background: linear-gradient(red, 1%, #f3f3f3);
}
</style>
