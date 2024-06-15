<script setup></script>
<template>
  <div class="cell">
    <div class="cover">
      <img src="../../../../static/good-02.jpg" alt="" />
    </div>
    <div class="info">
      <div class="title">
        <h4>惠普有线鼠标</h4>
        <div class="type">黑色静音</div>
      </div>
      <div class="bottom">
        <p>￥<span>41.1</span></p>
        <van-stepper v-model="value" theme="round" button-size="22" disable-input />
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.cell {
  width: 100%;
  height: 12vh;
  margin-bottom: 10px;
  display: flex;
}
.cover {
  margin-right: 10px;
  width: 25%;
  height: 100%;
  border-radius: 10px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
}
.info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 71%;
  height: 100%;
  .title {
    line-height: 23px;
  }

  .type {
    color: rgb(97, 97, 97);
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    p {
      color: red;
    }
    span {
      font-size: 19px;
      font-weight: 700;
    }
  }
}
</style>
