<template>
  <div>
    <swiper class="swiper-container" ref="mySwiper" :options="swiperOption">
      <swiper-slide
        class="swiper-slide"
        v-for="(item, index) in bannerList"
        :key="index"
      >
        <div :class="{ team_item: true, team_acitve: swiperIndex == index }">
          <img :src="item.img" alt="" />
          <div class="team_info">
            <img class="dec" :src="item.icon" alt="" />
            <i v-text="item.title"></i>
            <p v-text="item.intr"></p>
          </div>
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
      sendActive: 0,
    };
  },
};
</script>
<style lang="less" scoped>
.team_item {
  width: 360px;
  height: 430px;
  background: #f9f9f9;
  border-radius: 20px;
  background: #f9f9f9;
  text-align: center;
  transition: box-shadow linear 0.3s;
  position: relative;
  > img {
    display: block;
    width: 100%;
  }
  .team_info {
    position: absolute;
    left: 50%;
    top: 36px;
    transform: translate(-50%, 0);
    .dec {
      width: 106px;
      display: block;
      margin: 0 auto;
    }
    > i {
      font-size: 24px;
      font-weight: bold;
      line-height: 22px;
      padding: 18px 0 20px 0;
      display: block;
      color: #333;
    }
    > p {
      width: 280px;
      color: #666;
      font-size: 16px;
      line-height: 24px;
      margin: 0 auto;
    }
  }
}
.team_acitve {
  // box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  background: #7f1770;
  .team_info {
    > i {
      color: #fff;
    }
    > p {
      color: #fff;
    }
  }
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