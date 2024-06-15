<script setup>
import { ref } from 'vue'
const images = ref([
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg'
])
const iconsList = ref([
  { src: 'quick-001', name: '爆款名鞋' },
  { src: 'quick-002', name: '爆款名鞋' },
  { src: 'quick-003', name: '爆款名鞋' },
  { src: 'quick-004', name: '爆款名鞋' },
  { src: 'quick-005', name: '爆款名鞋' }
])
</script>
<template>
  <div class="content">
    <div class="swipe">
      <van-swipe :autoplay="3000" lazy-render>
        <van-swipe-item v-for="image in images" :key="image">
          <img :src="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="recommend" style="margin-top: 10px">
      <section>
        <van-tag type="danger" style="font-size: 17px; padding: 5px">热门推荐🔥</van-tag>
        <ul>
          <li v-for="i in iconsList" :key="i">
            <img style="zoom: 0.4" :src="`../../../../static/${i.src}.png`" alt="" />
            <p style="margin-top: -2vh">{{ i.name }}</p>
          </li>
        </ul>
      </section>
      <section style="margin-top: 2vh">
        <van-tag type="warning" style="font-size: 17px; padding: 5px">本周热门🌟</van-tag>
        <ul>
          <li v-for="i in iconsList" :key="i">
            <img style="zoom: 0.4" :src="`../../../../static/${i.src}.png`" alt="" />
            <p style="margin-top: -2vh">{{ i.name }}</p>
          </li>
        </ul>
      </section>
      <section style="margin-top: 2vh">
        <van-tag type="success" style="font-size: 17px; padding: 5px">明星推荐👍️</van-tag>
        <ul>
          <li v-for="i in iconsList" :key="i">
            <img style="zoom: 0.4" :src="`../../../../static/${i.src}.png`" alt="" />
            <p style="margin-top: -2vh">{{ i.name }}</p>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>
<style lang="less" scoped>
.content {
  padding: 5px;
  width: 100%;
  height: 100%;
  background-color: #f6f6f6;
}
.swipe {
  width: 100%;
  height: 23vh;
  background-color: white;
  border: 1px solid rgb(203, 203, 203);
  border-radius: 5px;
  img {
    width: 100%;
    height: 22.5vh;
    object-fit: contain;
  }
}
.recommend {
  ul {
    margin-top: 1.5vh;
    display: flex;
    flex-wrap: wrap;
    li {
      flex-shrink: 0;
      width: 24vw;
      height: 13vh;
      background-color: white;
      margin-bottom: 1vh;
      text-align: center;
    }
  }
}
</style>
