<script setup></script>
<template>
  <div class="history">
    <div class="title">
      <div>
        <van-icon name="clock-o" />
        <span style="color: gray; font-size: 18px; margin-left: 10px">最近搜索</span>
      </div>
      <van-icon name="delete-o" />
    </div>
    <div class="icon">
      <button>有线鼠标静音</button>
      <button>芒果TV会员</button>
      <button>营养快线</button>
      <button>红米K70</button>
      <button>玉米</button>
      <button>风扇</button>
      <span>更多▾</span>
    </div>
  </div>
</template>
<style lang="less" scoped>
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  line-height: 18px;
}
.icon {
  margin-top: 10px;
  span {
    color: rgb(129, 129, 129);
  }
}
button {
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 5px 10px;
  border-radius: 25px;
  color: black;
  background-color: rgb(231, 231, 231);
}
</style>
