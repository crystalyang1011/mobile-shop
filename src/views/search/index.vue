<script setup>
import history from './components/history.vue'
import rank from './components/rank.vue'
</script>
<template>
  <div class="search">
    <history />
    <rank />
  </div>
</template>
<style lang="less" scoped>
.search {
  padding: 15px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}
.header {
  padding: 10px;
  width: 100%;
  height: 10vh;
  background-color: red;
  font-size: 20px;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .search-input {
    position: relative;
    display: flex;
    input {
      padding: 0 20px;
      width: 80vw;
      height: 6vh;
      border-radius: 25px;
    }
    button {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translate(0, -50%);
      width: 16vw;
      height: 4vh;
      font-size: 14px;
      line-height: 14px;
      border-radius: 25px;
      color: white;
      background: linear-gradient(to right, orange, red);
    }
  }
}
.white-bg {
  padding: 15px;
  flex: 1;
  background-color: white;
  border-radius: 20px 20px 0 0;
}
</style>
