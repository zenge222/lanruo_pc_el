<template>
  <div class="courses_container">
    <div class="course_item" v-for="(item, i) in dataList" :key="i">
      <img :src="item.img" />
      <h3 v-text="item.title"></h3>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    dataList: {
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
.courses_container {
  margin-top: 73px;
  display: flex;
  flex-warp: warp; /*CSS3样式，支持webkit，ms*/
  -ms-flex-wrap: wrap; /*IE9以及一下不支持*/
  -webkit-flex-wrap: wrap;
  .course_item {
      cursor: pointer;
    margin: 0 0 55px 0;
    > h3 {
      text-align: center;
      font-size: 24px;
      font-weight: bold;
      padding-top: 32px;
    }
  }
  .course_item:nth-child(2n-1) {
    margin-right: 40px;
  }
}
</style>