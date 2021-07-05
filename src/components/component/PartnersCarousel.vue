<template>
  <div class="partners_carousel" style="margin-top: 46px">
    <el-carousel
      arrow="never"
      :autoplay="true"
      :interval="3000"
      height="750px"
    >
      <el-carousel-item v-for="(item, i) in bannerList" :key="i">
        <div class="offer_item">
          <img :src="item.logo" />
          <h3 v-text="item.title"></h3>
          <p v-for="(item2, j) in item.intrList" :key="j" v-text="item2"></p>
          <div class="banners">
            <img v-for="(item3, o) in item.imgs" :key="o" :src="item3" />
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  props: {
    bannerList: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.offer_item {
  width: 1200px;
  height: 750px;
  > img {
    display: block;
    margin: 0 auto 19px auto;
  }
  > h3 {
    font-size: 36px;
    line-height: 50px;
    margin-bottom: 41px;
    text-align: center;
  }
  > p {
    font-size: 18px;
    color: #666;
    line-height: 28px;
    padding-bottom: 20px;
    text-align: center;
  }
  .banners {
    display: flex;
    margin-top: 34px;
    > img {
      display: block;
      width: 284px;
      margin-right: 20px;
    }
    > img:last-child {
      margin-right: 0px;
    }
  }
}
</style>
