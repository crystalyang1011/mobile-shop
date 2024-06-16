<script setup></script>
<template>
  <div class="comments">
    <div class="title">
      <h3 style="font-weight: 400">评价(1000+)</h3>
      <van-icon name="arrow" />
    </div>
    <div class="comment">
      <ul>
        <li v-for="i in 3" :key="i">
          <div class="left">
            <img src="@/assets/imgs/avatar.jpg" alt="" />
          </div>
          <div class="right">
            <div class="name">garlicbreadvegaancha</div>
            <div class="content">
              不好意思收货晚了点，第一次购买，发货很快东西收到之后马上查看了，和预想的一样，同事已经问了链接。很有耐心的卖家，以后有需要还会回购的。
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="less" scoped>
.comments {
  padding: 10px;
  width: 100%;
}
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.comment {
  margin-top: 1.5vh;
  li {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 10vh;
    .left {
      width: 18%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .right {
      margin-left: 10px;
      flex: 1;
      .name {
        height: 30%;
        color: gray;
      }
      .content {
        height: 67%;
        overflow-y: hidden;
      }
    }
  }
}
</style>
