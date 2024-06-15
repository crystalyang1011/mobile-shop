<script setup></script>
<template>
  <div class="app">
    <main>
      <RouterView />
    </main>
    <van-tabbar active-color="red" route>
      <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/category" icon="label-o">分类</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="cart-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/my" icon="contact-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<style lang="less" scoped>
main {
  width: 100vw;
  height: 100vh;
}
</style>
