<script setup>
import history from './components/history.vue'
import rank from './components/rank.vue'
</script>
<template>
  <div class="search">
    <div class="header">
      <van-icon @click="$router.go(-1)" name="revoke" />
      <div class="search-input">
        <input type="text" placeholder="迪桑特夏季polo衫" />
        <button>搜索</button>
      </div>
    </div>
    <div class="white-bg">
      <history />
      <rank />
    </div>
  </div>
</template>
<style lang="less" scoped>
.search {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 100vh;
  background-color: red;
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
