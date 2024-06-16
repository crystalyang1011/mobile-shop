<script setup></script>
<template>
  <div class="good">
    <div class="cover">
      <img src="@/assets/imgs/good-02.jpg" alt="" />
    </div>
    <div class="info">
      <div class="title">
        <van-tag mark type="danger">618</van-tag>
        得胜HM-780小蜜蜂扩音器耳麦教师上课用喊话器有线头戴式麦克风
      </div>
      <div class="price-nums">
        <span class="price">￥ <span class="upper">16</span>.8</span>
        <span class="nums">已售600+</span>
      </div>
      <div class="shop">
        <span><van-icon name="shop-o" />惠普中国官方旗舰店 ></span>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.good {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 15vh;
}
.cover {
  width: 30%;
  height: 100%;
  border-radius: 10px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
}
.info {
  margin-left: 10px;
  flex: 1;
  .title,
  .price-nums,
  .shop {
    width: 100%;
  }
  .title {
    height: 40%;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .price-nums {
    padding-top: 10px;
    height: 30%;
    .price {
      color: red;
      font-weight: 700;
      .upper {
        font-size: 20px;
      }
    }
    .nums {
      margin-left: 10vw;
      color: gray;
    }
  }
  .shop {
    margin-top: 1vh;
    height: 20%;
    span {
      padding: 3px 10px;
      border-radius: 5px;
      color: gray;
      font-size: 15px;
      background-color: rgb(231, 231, 231);
    }
  }
}
</style>
