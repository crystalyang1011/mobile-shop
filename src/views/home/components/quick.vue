<script setup>
import { ref } from 'vue'

const quickList = ref([
  {
    url: '../../../../static/quick-001.png',
    name: '爆款好鞋'
  },
  {
    url: '../../../../static/quick-002.png',
    name: '精品风衣'
  },
  {
    url: '../../../../static/quick-003.png',
    name: '精致护理'
  },
  {
    url: '../../../../static/quick-004.png',
    name: '智能家居'
  },
  {
    url: '../../../../static/quick-005.png',
    name: '潮电数码'
  },
  {
    url: '../../../../static/quick-001.png',
    name: '爆款好鞋'
  },
  {
    url: '../../../../static/quick-002.png',
    name: '精品风衣'
  },
  {
    url: '../../../../static/quick-003.png',
    name: '精致护理'
  }
])
</script>
<template>
  <div class="quick wrapper">
    <ul>
      <li v-for="(item, index) in quickList" :key="index">
        <img style="zoom: 0.4" :src="item.url" alt="" />
        <p style="margin-top: -1.5vh">{{ item.name }}</p>
      </li>
    </ul>
  </div>
</template>
<style lang="less" scoped>
.quick {
  height: 15vh;
  background-color: white;
  border-radius: 5px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  ul {
    display: flex;
    height: 100%;
    width: 100%;
    li {
      margin-right: 1vw;
      width: 22vw;
      height: 100%;
      text-align: center;
      flex-shrink: 0;
      border-right: 1px dotted tomato;
    }
  }
}
</style>
