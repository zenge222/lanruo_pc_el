<template>
  <div>
    <el-carousel
      arrow="always"
      :autoplay="false"
      :interval="3000"
      height="450px"
    >
      <el-carousel-item v-for="(item, i) in offerList" :key="i">
        <div class="offer_item">
          <img :src="item.img" />
          <div class="right_info">
            <h3 v-text="item.title"></h3>
            <p>培训时间：<em v-text="item.day"></em>天</p>
            <p v-text="'毕业去向：' + item.to"></p>
            <i v-text="item.intr"></i>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  props: {
    // bannerList: {
    //   type: Array,
    //   require: true,
    // },
  },
  data() {
    return {
      offerList: [
        {
          img: require("@/assets/offer_img1.png"),
          title: "保洁员培训班",
          day: 3,
          to: "公共物业服务岗位",
          intr: "主要课程：《职业道德》、《心理建设》、《基本礼仪》、《基础保洁》",
        },
        {
          img: require("@/assets/offer_img2.png"),
          title: "长期护理班",
          day: 7,
          to: "母婴、医护岗位",
          intr: "主要课程：《职业道德》、《心理建设》、《基本礼仪》、《母婴护 理》、《老人陪护》、《高端护理》、《家庭营养》、《宝宝护理》等 一级服务技师班",
        },
        {
          img: require("@/assets/offer_img3.png"),
          title: "一级服务技师班",
          day: 10,
          to: "嘉美钟点服务人员",
          intr: "主要课程：《职业道德》、《心理建设》、《基本礼仪》、《基础保洁》、《基础护理》、《洗涤熨烫》、《烹饪》等课程",
        },
        {
          img: require("@/assets/offer_img4.png"),
          title: "高端家庭服务师",
          day: 30,
          to: "嘉美高端家庭服务平台",
          intr: "主要课程：《职业道德》、《心理建设》、《服务礼仪》、《深度保 洁》、《高端护理》、《洗涤熨烫》、《家庭宴会》、《杀菌消毒》、 《整屋收纳》、《茶花艺术》、《传统茶艺》、《绿化养护》、《老人 护理》、《母婴护理》等课程",
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.offer_item {
  width: 900px;
  height: 400px;
  background: #fff;
  margin: 0 auto;
  padding: 80px 60px;
  display: flex;
  border-radius: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);
  > img {
    border-radius: 10px;
    display: block;
    margin-right: 60px;
  }
  .right_info {
    > h3 {
      font-size: 28px;
      line-height: 40px;
      padding-bottom: 12px;
      color: #7f1770;
      font-weight: bold;
    }
    > p {
      font-weight: bold;
      font-size: 18px;
      line-height: 28px;
      padding-bottom: 8px;
      > em {
        color: #7f1770;
      }
    }
    > i {
      display: block;
      font-size: 16px;
      line-height: 26px;
      padding-top: 20px;
    }
  }
}
</style>
