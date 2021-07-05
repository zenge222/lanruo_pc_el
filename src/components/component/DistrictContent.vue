<template>
  <div class="district_container">
    <div class="info_list">
      <div class="info_item" :style="{ background: textBg }">
        <img src="@/assets/district_icon1.png" />
        <p>地址：<span v-text="dataInfo.address"></span></p>
      </div>
      <div class="info_item" :style="{ background: textBg }">
        <img src="@/assets/district_icon2.png" />
        <p>面积：<span v-text="dataInfo.area"></span>平米</p>
      </div>
      <div class="info_item" :style="{ background: textBg }">
        <img src="@/assets/district_icon3.png" />
        <p>同时容纳：<span v-text="dataInfo.accommodate"></span>人培训</p>
      </div>
      <div class="info_item" :style="{ background: textBg }">
        <img src="@/assets/district_icon4.png" />
        <p>多功能教室：<span v-text="dataInfo.classroom1"></span>个</p>
      </div>
      <div class="info_item" :style="{ background: textBg }">
        <img src="@/assets/district_icon5.png" />
        <p>功能性教室：<span v-text="dataInfo.classroom2"></span>个</p>
      </div>
    </div>
    <img :src="dataInfo.img" />
  </div>
</template>
<script>
export default {
  props: {
    dataInfo: {
      type: Object,
      require: true,
    },
    textBg: {
      type: String,
      default: "#f9f9f9",
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.district_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  > img {
    display: block;
  }
  .info_item {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    border-radius: 100px;
    width: 522px;
    > img {
      margin-right: 16px;
      width: 60px;
    }
    p {
      color: #7f1770;
      font-size: 20px;
      font-weight: bold;
      > span {
        font-weight: bold;
      }
    }
  }
  .info_item:last-child {
    margin-bottom: 0;
  }
}
</style>