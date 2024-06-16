<script setup>
// import { showToast } from 'vant'
import { ref } from 'vue'
import comments from './components/comments.vue'
import seller from './components/seller.vue'
const showShare = ref(false)
const showBottom = ref(false)
const showService = ref(false)
const showParams = ref(false)
const options = ref([
  [
    { name: '微信', icon: 'wechat' },
    { name: '朋友圈', icon: 'wechat-moments' },
    { name: '微博', icon: 'weibo' },
    { name: 'QQ', icon: 'qq' }
  ],
  [
    { name: '复制链接', icon: 'link' },
    { name: '分享海报', icon: 'poster' },
    { name: '二维码', icon: 'qrcode' },
    { name: '小程序码', icon: 'weapp-qrcode' }
  ]
])

const chosenAddressId = ref('1')
const list = [
  {
    id: '1',
    name: '张三',
    tel: '13000000000',
    address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
    isDefault: true
  },
  {
    id: '2',
    name: '李四',
    tel: '1310000000',
    address: '浙江省杭州市拱墅区莫干山路 50 号'
  }
]
const disabledList = [
  {
    id: '3',
    name: '王五',
    tel: '1320000000',
    address: '浙江省杭州市滨江区江南大道 15 号'
  }
]

// const onAdd = () => showToast('新增地址')
// const onEdit = (item, index) => showToast('编辑地址:' + index)
</script>
<template>
  <div class="good">
    <van-sticky>
      <van-nav-bar>
        <template #left>
          <van-icon name="revoke" size="25px" @click="$router.go(-1)" color="red" />
        </template>
        <template #right>
          <van-icon
            @click="showShare = true"
            name="share-o"
            size="25px"
            style="margin-right: 15px"
            color="red"
          />
          <van-icon
            color="red"
            @click="$router.push('/cart')"
            name="cart-circle-o"
            badge="9"
            size="25px"
          />
        </template>
      </van-nav-bar>
    </van-sticky>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img
          width="100%"
          height="90%"
          src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg"
          alt=""
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          width="100%"
          height="90%"
          src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg"
          alt=""
        />
      </van-swipe-item>
    </van-swipe>
    <div class="price-box">
      <p class="price">折后￥<span class="upper">47</span>.53起</p>
      <p class="nums">已售 1万+</p>
    </div>
    <div class="title">
      <van-tag mark type="danger" size="large">天猫</van-tag>
      得胜HM-780小蜜蜂扩音器耳麦教师上课用喊话器有线头戴式麦克风
    </div>
    <div class="info">
      <ul>
        <li @click="showBottom = true">
          <div class="left">
            <p style="color: green">48小时内发货</p>
            <p>广东深圳 快递：免运费</p>
          </div>
          <div class="right">
            <van-icon name="arrow" />
          </div>
        </li>
        <li @click="showService = true">
          <div class="left">升级运费险 7天无理由退货</div>
          <div class="right">
            <van-icon name="arrow" />
          </div>
        </li>
        <li @click="showParams = true">
          <div class="left">颜色分类 版本 生厂商名称 套件内容</div>
          <div class="right">
            <van-icon name="arrow" />
          </div>
        </li>
      </ul>
    </div>
    <comments />
    <seller />
    <div class="details">商品详情图片</div>

    <van-popup closeable v-model:show="showBottom" position="bottom" :style="{ height: '70%' }">
      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        :disabled-list="disabledList"
        disabled-text="以下地址超出配送范围"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
      />
    </van-popup>
    <van-popup closeable v-model:show="showService" position="bottom" :style="{ height: '70%' }">
      <div class="seavice" style="padding: 35px 10px">
        <ul>
          <li>
            <h3>升级版运费险</h3>
            <p style="margin-top: 5px">
              当买家发生退货状态时，在交易结束后72小时内，会根据当时购买运费险的约定对买家进行费用赔付。在选购商品后提交订单，会看见右方有一个“运费险”的选项，根据需要进行勾选，天猫会赠送给一些用户，也可以用自费购买。
            </p>
          </li>
          <li style="margin-top: 15px">
            <h3>7天无理由退货</h3>
            <p style="margin-top: 5px">
              经营者采用网络、电视、电话、邮购等方式销售商品，消费者有权自收到商品之日起七日内退货，且无需说明理由
            </p>
          </li>
        </ul>
      </div>
    </van-popup>
    <van-popup closeable v-model:show="showParams" position="bottom" :style="{ height: '70%' }">
      <div class="params" style="padding: 10px 10px">
        <table>
          <tr style="text-align: center; font-size: 20px">
            <td colspan="2">产品参数</td>
          </tr>
          <tr>
            <td width="20%">颜色分类</td>
            <td class="desc" style="font-size: 15px">
              计算机中的颜色是采用RGB颜色系统，也就是每种颜色采用红、绿、蓝三种分量。
              每个颜色分量的取值从0到255，一共有256种可能。
              则计算机中所能表示的颜色为256×256×256=16777216种，这也是16M色的来由。
            </td>
          </tr>
          <tr>
            <td width="20%">版本</td>
            <td class="desc" style="font-size: 15px">其他/other</td>
          </tr>
          <tr>
            <td width="20%">生厂商</td>
            <td class="desc" style="font-size: 15px">其他/other</td>
          </tr>
          <tr>
            <td width="20%">套件内容</td>
            <td class="desc" style="font-size: 15px">官方基础套件</td>
          </tr>
        </table>
      </div>
    </van-popup>
    <van-share-sheet v-model:show="showShare" title="立即分享给好友" :options="options" />
  </div>
</template>
<style lang="less" scoped>
.price-box {
  margin-top: -1vh;
  padding: 10px;
  width: 100%;
  height: 11vh;
  color: white;
  background-color: red;
  .upper {
    font-size: 25px;
    font-weight: 700;
  }
}
.title {
  padding: 10px;
  font-size: 19px;
}
.info {
  padding: 0 10px;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    line-height: 25px;
    color: gray;
    border-bottom: 1px solid rgb(226, 226, 226);
    &:nth-child(2),
    &:nth-child(3) {
      height: 35px;
      line-height: 30px;
    }
    &:nth-child(3) {
      border-bottom: none;
    }
    i {
      color: rgb(190, 190, 190);
    }
  }
}
.params table {
  border-spacing: 10px;
  .desc {
    color: gray;
  }
  td {
    vertical-align: top;
  }
}
.details {
  height: 2000px;
  background-color: pink;
}
</style>
