<script setup>
// import { ref } from 'vue'
import good from './components/good.vue'
</script>
<template>
  <div class="search-result">
    <div class="dropdown-meun">
      <ul>
        <li style="color: red">综合</li>
        <li>销量</li>
        <li>天猫</li>
        <li>店铺</li>
        <li>上新</li>
      </ul>
    </div>
    <div class="tags">
      <button>618狂欢8.5折起</button>
      <button>品牌</button>
      <button>百亿补贴</button>
      <button>官方立减</button>
      <button>迪士尼</button>
    </div>
    <div class="goods">
      <ul>
        <li v-for="i in 10" :key="i"><good /></li>
      </ul>
    </div>
  </div>
</template>
<style lang="less" scoped>
.dropdown-meun {
  width: 100%;
  height: 5vh;
  ul {
    display: flex;
    justify-content: space-between;
  }
  li {
    flex: 1;
    height: 5vh;
    line-height: 5vh;
    text-align: center;
    color: gray;
  }
}
.tags {
  display: flex;
  align-items: center;
  width: 100%;
  overflow-x: auto;
  height: 8vh;
  mask: linear-gradient(90deg, #000, 85%, transparent);
  &::-webkit-scrollbar {
    display: none;
  }
  button {
    padding-left: 20px;
    padding-right: 20px;
    height: 6vh;
    line-height: 6vh;
    flex-shrink: 0;
    margin-left: 10px;
    color: rgb(79, 79, 79);
    background-color: rgb(234, 234, 234);
    border-radius: 25px;
    &:first-child {
      color: red;
      background-color: white;
      border: 1px solid red;
    }
  }
}
.goods {
  padding: 10px;
  li {
    margin-bottom: 10px;
  }
}
</style>
