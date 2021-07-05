<template>
  <div class="contact_us">
    <HomeHeader :getActive="6" />
    <img class="college_banner" src="@/assets/contact_us_banner.png" />
    <!-- Contact us -->
    <div class="contact_bg" id="contact">
      <div class="contact_container">
        <TitleGroup :dec="'Contact us'" :title="'联系我们'" />
        <p>
          面对着如此广阔的家政服务业市场， 真正升起的朝阳产业， 由衷地说一声：
          准备好了吗？ 让我们拥抱朝阳。
        </p>
        <div class="contact_list">
          <div>
            <img src="@/assets/contact_icon1.png" alt="" />
            <h3>全国热线 7*24小时服务</h3>
            <p>18301947460</p>
          </div>
          <div>
            <img src="@/assets/contact_icon2.png" alt="" />
            <h3>学校地址</h3>
            <p>上海市浦东新区沂南路35号</p>
          </div>
          <div>
            <img src="@/assets/contact_icon3.png" alt="" />
            <h3>邮箱</h3>
            <p>lanruopeixun@lanruopx.com</p>
          </div>
        </div>
      </div>
    </div>
    <div class="map_location">
      <div id="map" style="height: 340px"></div>
    </div>
    <!-- <Footer /> -->
  </div>
</template>
<script>
import HomeHeader from "./component/HomeHeader";
// import Footer from "./component/footer";
import TitleGroup from "./component/TitleGroup";
import maps from "qqmap";
export default {
  name: "ContactUs",
  data() {
    return {};
  },
  components: {
    HomeHeader,
    // Footer,
    TitleGroup,
  },
  mounted() {
    this.init();
    // console.log(this.$route.query.hash.replace("#", ""));
    // let toElement = document.getElementById(
    //   this.$route.query.hash.replace("#", "")
    // );

    // console.log(toElement, "toElement");
    // toElement.scrollIntoView(true);

    // const { hash } = this.$route.query;
    // hash &&
    //   window.scrollTo({
    //     top: document.querySelector(hash).getBoundingClientRect().top,
    //     behavior: "smooth",
    //   });
  },
  methods: {
    init() {
      let that = this;
      maps.init("PEKBZ-NBPWU-QCLV2-BHFRM-A7572-NOFZV", () => {
        // eslint-disable-next-line no-undef
        let center = new qq.maps.LatLng(31.19833, 121.50753);
        // eslint-disable-next-line no-undef,no-unused-vars
        // eslint-disable-next-line no-undef
        that.map = new qq.maps.Map(window.document.getElementById("map"), {
          center: center,
          zoom: 20,
          disableDoubleClickZoom: true,
          // eslint-disable-next-line no-undef
          mapTypeId: qq.maps.MapTypeId.ROADMAP,
        });
        // eslint-disable-next-line no-unused-vars,no-undef
        let marker = new qq.maps.Marker({
          map: that.map,
          position: center,
        });
      });
    },
  },
};
</script>
<style lang="less" scoped>
.contact_bg {
  position: relative;
  background: #ffffff;
  border-bottom-left-radius: 240px;
  padding: 100px 0 98px 0;
  z-index: 10;
  .contact_container {
    width: 1200px;
    margin: 0 auto;
    > p {
      font-size: 18px;
      color: #666;
      line-height: 30px;
      padding: 60px 0 50px 0;
      text-align: center;
      width: 480px;
      margin: 0 auto;
    }
    .contact_list {
      display: flex;
      border-radius: 20px;
      background: #f9f9f9;
      border: 1px solid #dbdbdb;
      > div {
        flex: 1;
        text-align: center;
        padding: 55px 0 51px 0;
        > img {
          display: block;
          margin: 0 auto;
          margin-bottom: 20px;
        }
        > h3 {
          font-size: 24px;
          line-height: 24px;
          font-weight: bold;
          padding-bottom: 21px;
        }
        > p {
          font-size: 18px;
          line-height: 25px;
        }
      }
      > div:nth-child(2) {
        box-sizing: border-box;
        border-left: 1px solid #dbdbdb;
        border-right: 1px solid #dbdbdb;
      }
    }
  }
}
.map_location {
  position: relative;
  background: #ffffff;
  //   border-bottom-right-radius: 240px;
  overflow: hidden;
  z-index: 9;
}
#map {
  //   border-bottom-right-radius: 240px;
  //   overflow: hidden;
}
</style>