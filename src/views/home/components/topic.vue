<script setup>
import { ref } from 'vue'
const brandList = ref([
  { src: '../../../../static/brand-001.webp', name: 'Haier' },
  { src: '../../../../static/brand-002.webp', name: 'Lenov' },
  { src: '../../../../static/brand-003.webp', name: 'Xiaomi' }
])
</script>
<template>
  <div class="topic wrapper">
    <ul>
      <li v-for="i in 4" :key="i">
        <div class="title">
          <p style="font-size: 18px">五星好店</p>
          <p style="color: red">爆款折扣</p>
        </div>
        <div class="info">
          <ul>
            <li v-for="(item, index) in brandList" :key="index">
              <img style="zoom: 0.4; border-radius: 50%" :src="item.src" :alt="item.name" />
              <p style="color: red">{{ item.name }}</p>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>
<style lang="less" scoped>
.topic {
  margin-top: 1vh;
}

.topic > ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.topic > ul > li {
  padding: 1vw;
  width: 46.5vw;
  height: 16vh;
  margin-right: 2vw;
  margin-bottom: 1vh;
  border-radius: 5px;
  background: linear-gradient(rgb(255, 198, 188), 1%, white);
  &:nth-child(2) {
    margin-right: 0;
  }
  &:nth-child(4) {
    margin-right: 0;
  }
}

.title {
  margin-bottom: 1vh;
  display: flex;
  justify-content: space-between;
  align-items: end;
}
.info ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.info li {
  width: 13vw;
  height: 11vh;
  text-align: center;
}
</style>
