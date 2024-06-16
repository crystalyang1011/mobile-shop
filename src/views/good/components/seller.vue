<script setup>
import { ref } from 'vue'
const model = ref(4)
</script>
<template>
  <div class="seller">
    <div class="top">
      <div class="left">
        <div class="container">
          <img src="@/assets/imgs/brand-001.webp" alt="" />
        </div>
      </div>
      <div class="right">
        <div class="title">海尔电器旗舰店</div>
        <div class="info"><van-rate size="15px" readonly v-model="model" /> 4.0 | 115万粉丝</div>
      </div>
    </div>
    <div class="middle">
      <ul>
        <li>
          <p class="title">宝贝质量 4.7 <span>高</span></p>
          <p class="desc">好评率96%</p>
        </li>
        <li>
          <p class="title">物流速度 4.4 <span>中</span></p>
          <p class="desc">平均15小时发货</p>
        </li>
        <li>
          <p class="title">服务保障 4.3 <span>中</span></p>
          <p class="desc">平均43秒回复</p>
        </li>
      </ul>
    </div>
    <div class="bottom">
      <ul>
        <li>
          <button><van-icon name="shop-o" />进店逛逛</button>
        </li>
        <li>
          <button><van-icon name="bag-o" />全部宝贝</button>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="less" scoped>
.seller {
  padding: 10px;
  width: 100%;
  border-top: 1px solid rgb(202, 202, 202);
  border-bottom: 1px solid rgb(202, 202, 202);
}
.top {
  display: flex;
  justify-content: space-between;
  height: 15vh;
  .left {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    height: 100%;
    .container {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 90%;
      height: 90%;
      border-radius: 20%;
      border: 2px solid red;
      img {
        width: 95%;
        height: 95%;
        object-fit: cover;
        border-radius: 20%;
      }
    }
  }
  .right {
    margin-left: 10px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .title {
      font-size: 19px;
    }
    .info {
      margin-top: 5px;
      font-size: 15px;
      color: gray;
    }
  }
}
.middle {
  margin-top: 10px;
  height: 8vh;
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    li {
      flex: 1;
      font-size: 15px;
      padding-left: 5px;
      border-left: 1px solid rgb(207, 207, 207);

      .desc {
        margin-top: 5px;
        font-size: 14px;
        color: gray;
      }
      span {
        color: red;
      }
      &:first-child {
        border-left: none;
      }
    }
  }
}
.bottom {
  height: 7vh;
  ul {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  button {
    padding: 10px 30px;
    border: 1px solid rgb(216, 216, 216);
    background-color: white;
    border-radius: 5px;
    font-size: 17px;
  }

  i {
    margin-right: 10px;
    color: red;
  }
}
</style>
