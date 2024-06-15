<script setup></script>
<template>
  <van-sticky>
    <header>
      <h2>优易选: 多！快！好！省！</h2>
      <div class="search">
        <van-icon name="search" />
        <input type="text" />
      </div>
    </header>
  </van-sticky>
</template>
<style lang="less" scoped>
@import url('https://fonts.googleapis.com/css2?family=ZCOOL+KuaiLe&display=swap');
header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 14vh;
  background: linear-gradient(rgb(255, 74, 43), #ff9292);
}
h2 {
  margin-bottom: -1vh;
  font-family: 'ZCOOL KuaiLe', sans-serif;
  color: white;
}
.search {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 5vh;
  background-color: white;
  border-radius: 10vh;
}
i {
  font-size: 4vh;
  font-weight: 700;
  color: tomato;
}
input {
  border: none;
  width: 85%;
  height: 70%;
  padding-left: 10px;
}
</style>
