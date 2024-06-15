<script setup>
const props = defineProps(['good'])
</script>
<template>
  <div class="good">
    <div class="cover">
      <img :src="props.good.src" alt="" />
    </div>
    <div class="info">
      <div class="title">{{ props.good.title }}</div>
      <div class="bottom">
        <span class="price"
          >￥<span class="upper">{{ props.good.priceUpper }}</span
          >.6</span
        >
        <span class="sold">{{ props.good.nums }}+付款</span>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.good {
  width: 46vw;
  height: 35vh;
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgb(230, 230, 230);
}
.cover {
  width: 100%;
  height: 70%;
  img {
    width: 100%;
    height: 100%;
    border-radius: 5px 5px 0;
  }
}
.info {
  border-top: 1px solid rgb(202, 202, 202);
  padding: 5px;
  width: 100%;
  height: 30%;
  .title {
    width: 100%;
    height: 5vh;
    line-height: 5vh;
    overflow: hidden;
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    .price {
      color: red;
      .upper {
        font-size: 20px;
        font-weight: 700;
      }
    }
    .sold {
      color: grey;
    }
  }
}
</style>
