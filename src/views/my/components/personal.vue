<script setup></script>
<template>
  <div class="personal wrapper">
    <div class="avatar">
      <img src="@/assets/imgs/avatar.jpg" alt="" />
    </div>
    <div class="info">
      <h2>User 01 <van-icon style="margin-left: 37vw" name="setting-o" /></h2>
      <div class="address">
        <van-icon style="font-weight: 700" name="location-o" />&nbsp;收货地址
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.personal {
  padding-top: 2vh;
  display: flex;
  justify-content: space-between;
  height: 12vh;
  .avatar {
    width: 12vh;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }
  .info {
    flex: 1;
    padding-top: 10px;
    margin-left: 10px;
    height: 100%;
    line-height: 30px;
    color: white;
  }
}
</style>
