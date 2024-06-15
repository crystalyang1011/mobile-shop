<script setup></script>
<template>
  <div class="order wrapper">
    <div class="title">
      <p>我的订单</p>
      <p style="color: gray">全部 ></p>
    </div>
    <div class="icon">
      <ul>
        <li>
          <i><van-icon name="coupon-o" /></i>
          <p>待付款</p>
        </li>
        <li>
          <i><van-icon name="send-gift-o" /></i>
          <p>代发货</p>
        </li>
        <li>
          <i><van-icon name="logistics" /></i>
          <p>待收货</p>
        </li>
        <li>
          <i><van-icon name="comment-o" badge="9" /></i>
          <p>待评价</p>
        </li>
        <li>
          <i><van-icon name="gold-coin-o" /></i>
          <p>退款/售后</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="less" scoped>
.order {
  padding: 10px;
  margin-top: 2vh;

  height: 18vh;
  background-color: white;
  border-radius: 10px;
  .title {
    display: flex;
    justify-content: space-between;
  }
  .icon {
    margin-top: 2vh;
    ul {
      display: flex;
      justify-content: space-between;
      li {
        text-align: center;
        width: 18vw;
        height: 10vh;
        i {
          font-size: 33px;
        }
        p {
          font-size: 15px;
        }
      }
    }
  }
}
</style>
