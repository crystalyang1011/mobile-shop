<script setup></script>
<template>
  <div class="follow wrapper">
    <ul>
      <li>
        <div class="info">
          <p>关注店铺<span>></span></p>
          <p style="font-size: 12px; color: gray">2家常逛店有优惠</p>
          <div class="shop">
            <div class="cover">
              <img src="../../../../static/brand-001.webp" alt="" />
            </div>
            <p style="font-weight: 500">Haier</p>
            <p style="color: red">直播中</p>
          </div>
        </div>
        <hr />
      </li>
      <li>
        <div class="info">
          <p>关注商品<span>></span></p>
          <p style="font-size: 12px; color: gray">最近降价商品</p>
          <div class="shop">
            <div class="cover">
              <img src="../../../../static/brand-003.webp" alt="" />
            </div>
            <p style="font-weight: 500">Xiaomi</p>
            <p style="color: red">每300减50</p>
          </div>
        </div>
        <hr />
      </li>
      <li>
        <div class="info">
          <p>足迹<span>></span></p>
          <p style="font-size: 12px; color: gray">最近常逛</p>
          <div class="shop">
            <div class="cover">
              <img src="../../../../static/brand-002.webp" alt="" />
            </div>
            <p style="font-weight: 500">Thinkpad</p>
            <p style="color: red">淘金币抵2元</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<style lang="less" scoped>
.follow {
  padding: 5px;
  margin-top: 2vh;
  border-radius: 10px;
  background-color: white;
}
ul {
  display: flex;
  justify-content: left;
}
li {
  display: flex;
  text-align: center;
  width: 32vw;
  height: 23vh;
  .info {
    flex: 1;
  }
  hr {
    margin-left: 5px;
    border: none;
    width: 1px;
    height: 20vh;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255) 10%,
      red 60%,
      rgba(255, 255, 255) 90%
    );
  }
}
.info {
  span {
    margin-left: 15px;
    display: inline-block;
    width: 15px;
    height: 15px;
    font-size: 13px;
    border-radius: 50%;
    color: white;
    background-color: black;
  }
  .shop {
    margin-top: 1vh;
    .cover {
      margin-bottom: 1vh;
      margin-left: 7vw;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 16vw;
      height: 9vh;
      border-radius: 50%;
      box-shadow: 0 0 0 2px red;
    }
    img {
      border-radius: 50%;
      zoom: 0.5;
    }
    p {
      font-size: 16px;
      line-height: 20px;
    }
  }
}
</style>
