<template>
  <div class="advantages_list">
    <div class="advantages_item" v-for="(item, i) in cardList" :key="i">
      <img :src="item.bgImg" alt="" />
      <div class="adv_info">
        <img :src="item.icon" />
        <h3 v-text="item.title"></h3>
        <p v-text="item.intr"></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    cardList: {
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
.advantages_list {
  padding-top: 50px;
  display: flex;
}
.advantages_item {
  width: 280px;
  height: 420px;
  margin-right: 26px;
  position: relative;
  > img {
    display: block;
    border-radius: 24px;
    width: 280px;
    height: 420px;
  }
  .adv_info {
    border-radius: 20px;
    width: 280px;
    height: 420px;
    position: absolute;
    background: url("../../assets/home_avg_def.png") no-repeat center center;
    transition: background linear 10.3s;
    left: 0;
    top: 0;
    text-align: center;
    > img {
      display: block;
      margin: 32px auto 0 auto;
    }
    > h3 {
      color: #333333;
      font-size: 24px;
      font-weight: bottom;
      padding: 15px 0 20px 0;
    }
    > p {
      color: #666666;
      width: 220px;
      margin: 0 auto;
      font-size: 14px;
      line-height: 20px;
    }
  }
}
.advantages_item:hover {
  .adv_info {
    background: transparent;
    > h3 {
      color: #fff;
    }
    > p {
      color: #fff;
    }
  }
}
.advantages_item:last-child {
  margin-right: 0;
}
</style>