<script setup>
import { ref } from 'vue'
const rankList = ref([
  '父亲节礼物送什么',
  '看歌手2024抽现场门票',
  '如何提高工作效率',
  '最新科技展会时间地点',
  '健康生活方式分享',
  '旅行必备清单推荐',
  '最佳手机摄影技巧',
  '如何提高工作效率',
  '最新科技展会时间地点'
])
</script>
<template>
  <div class="rank">
    <div class="title">时下热门🔥</div>
    <ul>
      <li v-for="(item, index) in rankList" :key="index">
        <span>{{ index + 1 }}</span> &nbsp; {{ item }}
      </li>
    </ul>
  </div>
</template>
<style lang="less" scoped>
.rank {
  margin-top: 2vh;
}
.title {
  color: red;
  font-weight: 700;
  font-size: 18px;
  font-style: italic;
  margin-bottom: 10px;
}
li {
  padding: 0 10px;
  margin-top: 5px;
  width: 100%;
  height: 6vh;
  line-height: 6vh;
  background: linear-gradient(to right, rgb(255, 247, 247), white);
  border-radius: 5px;
  &:first-child,
  &:nth-child(2),
  &:nth-child(3) {
    color: red;
    font-weight: 700;
    background: linear-gradient(to right, rgb(255, 232, 232), white);
  }
  &:nth-child(2) {
    color: tomato;
  }
  &:nth-child(3) {
    color: orange;
  }
  span {
    font-style: italic;
  }
}
</style>
