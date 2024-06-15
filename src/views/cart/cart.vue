<script setup>
import { ref } from 'vue'
import Cell from './components/cell.vue'
const checked = ref(true)
</script>
<template>
  <div class="cart">
    <h2>购物车 <span>(149)</span></h2>
    <div class="white-bg">
      <div class="tags">
        <ul>
          <li>
            <van-tag style="font-size: 18px; padding: 5px 20px" round plain type="danger"
              >官方立减</van-tag
            >
          </li>
          <li>
            <van-tag style="font-size: 18px; padding: 5px 20px" round plain type="warning"
              >降价</van-tag
            >
          </li>
          <li>
            <van-tag style="font-size: 18px; padding: 5px 20px" round plain type="primary"
              >常购</van-tag
            >
          </li>
          <li>
            <van-tag style="font-size: 18px; padding: 5px 20px" round plain type="danger"
              >官方立减</van-tag
            >
          </li>
          <li>
            <van-tag style="font-size: 18px; padding: 5px 20px" round plain type="warning"
              >降价</van-tag
            >
          </li>
          <li>
            <van-tag style="font-size: 18px; padding: 5px 20px" round plain type="primary"
              >常购</van-tag
            >
          </li>
        </ul>
      </div>
      <div class="goods" style="margin-top: 2vh">
        <ul>
          <li v-for="i in 10" :key="i" style="display: flex">
            <van-checkbox v-model="checked" style="margin-right: 3vw" />
            <Cell />
          </li>
        </ul>
      </div>
    </div>
    <van-submit-bar style="margin-bottom: 7vh" :price="3050" button-text="提交订单">
      <van-checkbox v-model="checked">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>
<style lang="less" scoped>
.cart {
  height: 100%;
  width: 100%;
  background-color: red;
  h2 {
    height: 7vh;
    line-height: 7vh;
    margin-left: 4vw;
    color: white;
    span {
      font-size: 18px;
      font-weight: 400;
    }
  }
}
.white-bg {
  padding: 10px;
  height: 79%;
  width: 100%;
  overflow-y: auto;
  background-color: white;
  border-radius: 30px 30px 0 0;
  &::-webkit-scrollbar {
    display: none;
  }
}
.goods-card {
  margin: 0;
  background-color: white;
}

.delete-button {
  height: 100%;
}

.tags {
  overflow-x: auto;
  mask: linear-gradient(90deg, #000, 85%, transparent);
  &::-webkit-scrollbar {
    display: none;
  }
  ul {
    display: flex;
    li {
      flex-shrink: 0;
      margin-right: 10px;
    }
  }
}
</style>
