<template>
  <div>
    <swiper class="swiper-container" ref="mySwiper" :options="swiperOption">
      <swiper-slide
        class="swiper-slide"
        v-for="(item, index) in teamList"
        :key="index"
      >
        <div :class="{ team_item: true, team_acitve: swiperIndex == index }">
          <div class="img_group">
            <img :src="item.img" alt="" />
            <img class="dec" src="@/assets/team_dec.png" alt="" />
          </div>
          <h3 v-text="item.name"></h3>
          <i v-text="item.title"></i>
          <p v-text="item.intr"></p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev ctr_btn" slot="button-prev">
        <img src="@/assets/ctr_left.png" alt="" />
      </div>
      <div class="swiper-button-next ctr_btn" slot="button-next">
        <img src="@/assets/ctr_right.png" alt="" />
      </div>
    </swiper>
  </div>
</template>
<script>
const c_swiper = document.getElementsByClassName("swiper-container");
export default {
  props: {
    bannerList: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      swiperIndex: 1,
      swiperOption: {
        //显示分页
        slidesPerView: 3,
        spaceBetween: 60,
        pagination: {
          el: ".swiper-pagination",
        },
        //设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: false,
        //自动轮播
        // autoplay: {
        //   delay: 3000,
        //   //当用户滑动图片后继续自动轮播
        //   disableOnInteraction: false,
        // },
        //开启循环模式
        loop: false,
        on: {
          // 在滚动事件中通过上面保存的swiper元素获取当前页索引,可以打印一下c_swiper看一下内部属性
          slideChange: () => {
            // console.log("轮播图滚动事件 --->", c_swiper[0].swiper.activeIndex);
            this.swiperIndex = c_swiper[0].swiper.activeIndex + 1;
          },
        },
      },
      teamList: [
        {
          img: require("@/assets/home_team1.png"),
          name: "胡茜",
          title: "培训导师",
          intr: "整理、收纳培训导师，日本家政协会会员、整理、收纳理事。在日本最大的家政从事培 训导师工作。并编写有《整理在生活中的应用》。有十三年整理收纳的经验。",
        },
        {
          img: require("@/assets/home_team2.png"),
          name: "中泽良子",
          title: "资深培训师",
          intr: "清洁导师日本小熊公司资深培训师。日本高端家政服务品牌，日籍教师授。长期从事一线清洁保洁师服务，在清洁技能培训方面见解独特。",
        },
        {
          img: require("@/assets/home_team3.png"),
          name: "袁蒙殊",
          title: "培训导师",
          intr: "30余年酒店管理经验，曾参与过 17家五星级皇冠假日酒店，万豪酒店的开业筹建工作；及多家大型企业集团的战略发展规划编制以及行政管理工作经验丰富。现担任嘉美美家总经理。",
        },
        // {
        //   img: require("@/assets/home_team4.png"),
        //   name: "张菊英",
        //   title: "清洁培训师",
        //   intr: "上海舜瀛物业 管理有限公司执行总经理。 曾供职于央企物业管理有限 公司，有精品楼盘保洁的丰 富经验。",
        // },
        // {
        //   img: require("@/assets/home_team5.png"),
        //   name: "田芳琦",
        //   title: "资深培训师",
        //   intr: "11年酒店管理经验。曾操盘600间客 房的酒店，2019 年10月,培训讲师身份代表酒店前往印度普纳丽思卡尔顿酒店进行培训与协助开业。现担任嘉美美家区域总监。",
        // },
        {
          img: require("@/assets/home_team6.png"),
          name: "刘建国",
          title: "保洁员培训师",
          intr: "从事保洁工 作二十年之久。所经手的项 目个个为精品项目，特别在 保洁人员的培训工作中，经 验丰富。",
        },
        {
          img: require("@/assets/home_team7.png"),
          name: "姜立志",
          title: "保洁工具、药剂技能培训师",
          intr: "曾供 职于好慷家政服 务公司。对此领 域的见解和培训 有独到之处。",
        },
        // {
        //   img: require("@/assets/home_team8.png"),
        //   name: "赵秀坤",
        //   title: "实操培训师",
        //   intr: "曾供 职于好慷家政服 务公司。对此领 域的见解和培训 有独到之处。",
        // },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.team_item {
  width: 360px;
  height: 490px;
  background: #fff;
  border-radius: 20px;
  padding: 50px 0 0 0;
  text-align: center;
  transition: box-shadow linear 0.3s;
  .img_group {
    position: relative;
    display: inline-block;
    margin-bottom: 24px;
    > img {
      display: block;
      width: 180px;
    }
    .dec {
      width: 60px;
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
  > h3 {
    color: #7f1770;
    font-size: 21px;
    font-weight: bold;
    line-height: 29px;
    padding-bottom: 4px;
  }
  > i {
    font-size: 16px;
    font-weight: bold;
    line-height: 22px;
    padding-bottom: 20px;
    display: block;
  }
  > p {
    width: 280px;
    color: #666;
    font-size: 16px;
    line-height: 24px;
    margin: 0 auto;
  }
}
.team_acitve {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}
.swiper-button-next,
.swiper-button-prev {
  margin: 36px 0 0 0;
  .img {
    width: 30px;
  }
}
.swiper-button-prev {
  img {
    margin-left: 560px;
    margin-right: 27px;
  }
}
.ctr_btn {
  background: transparent;
  display: inline-block;
  > img {
    display: block;
  }
}
</style>