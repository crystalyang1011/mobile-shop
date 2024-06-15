<script setup>
import Like from '@/components/like.vue'
import Follow from './components/follow.vue'
import Order from './components/order.vue'
import Personal from './components/personal.vue'
</script>
<template>
  <div class="my">
    <Personal />
    <Order />
    <Follow />
    <Like />
  </div>
</template>
<style lang="less" scoped>
.my {
  background: linear-gradient(red, 10%, #f6f6f6);
}
</style>
