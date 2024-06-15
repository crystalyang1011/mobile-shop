<script setup>
import { ref } from 'vue'
const goodsList = ref([
  {
    src: '../../static/good-01.jpg',
    title: 'VIP短袖t恤男夏季拼接体恤宽松打底衫赛博朋克机能风上衣ins潮牌',
    priceUpper: '35',
    priceLower: '6',
    nums: '200'
  },
  {
    src: '../../static/good-02.jpg',
    title: 'VIP短袖t恤男夏季拼接体恤宽松打底衫赛博朋克机能风上衣ins潮牌',
    priceUpper: '98',
    priceLower: '6',
    nums: '70'
  },
  {
    src: '../../static/good-03.jpg',
    title: 'VIP短袖t恤男夏季拼接体恤宽松打底衫赛博朋克机能风上衣ins潮牌',
    priceUpper: '89',
    priceLower: '6',
    nums: '500'
  },
  {
    src: '../../static/good-01.jpg',
    title: 'VIP短袖t恤男夏季拼接体恤宽松打底衫赛博朋克机能风上衣ins潮牌',
    priceUpper: '65',
    priceLower: '6',
    nums: '100'
  },
  {
    src: '../../static/good-02.jpg',
    title: 'VIP短袖t恤男夏季拼接体恤宽松打底衫赛博朋克机能风上衣ins潮牌',
    priceUpper: '35',
    priceLower: '6',
    nums: '200'
  },
  {
    src: '../../static/good-03.jpg',
    title: 'VIP短袖t恤男夏季拼接体恤宽松打底衫赛博朋克机能风上衣ins潮牌',
    priceUpper: '35',
    priceLower: '6',
    nums: '200'
  },
  {
    src: '../../static/good-01.jpg',
    title: 'VIP短袖t恤男夏季拼接体恤宽松打底衫赛博朋克机能风上衣ins潮牌',
    priceUpper: '35',
    priceLower: '6',
    nums: '200'
  },
  {
    src: '../../static/good-02.jpg',
    title: 'VIP短袖t恤男夏季拼接体恤宽松打底衫赛博朋克机能风上衣ins潮牌',
    priceUpper: '35',
    priceLower: '6',
    nums: '200'
  },
  {
    src: '../../static/good-03.jpg',
    title: 'VIP短袖t恤男夏季拼接体恤宽松打底衫赛博朋克机能风上衣ins潮牌',
    priceUpper: '35',
    priceLower: '6',
    nums: '200'
  },
  {
    src: '../../static/good-01.jpg',
    title: 'VIP短袖t恤男夏季拼接体恤宽松打底衫赛博朋克机能风上衣ins潮牌',
    priceUpper: '35',
    priceLower: '6',
    nums: '200'
  }
])
</script>
<template>
  <div class="like wrapper">
    <ul>
      <li v-for="i in goodsList" :key="i">
        <good :good="i" />
      </li>
    </ul>
  </div>
</template>
<style lang="less" scoped>
.like {
  margin-top: 1vh;
}
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  li {
    flex-shrink: 0;
    margin-bottom: 2vh;
  }
}
</style>
