<template>
  <div class="home">
    <HomeHeader :isHome="true" :getActive.sync="sendActive" />
    <!-- banner -->
    <div class="banner_container">
      <el-carousel :interval="3000" height="800px">
        <el-carousel-item v-for="(item, i) in banners" :key="i">
          <img :src="item" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- About us -->
    <div class="about_us_bg">
      <div class="about_us_container">
        <img src="@/assets/home_about_us.png" />
        <div class="us_right">
          <TitleGroup
            :align="'left'"
            :dec="'// About us'"
            :title="'关于我们'"
          />
          <div class="intr">
            <p>
              蓝若职业技能培训学校是一所经上海市人民政府审核批准和正式颁发办学许可证的民办职业技能培训学校。
              经过培训考试合格将颁发结业证书。
              学校具有正规性、合法性和社会公信力。
            </p>
            <p>
              目前在上海拥有2个校区，师资力量强大，现已联合台湾、日本、新加坡、英国等各国服务行业培训机构，共同打造中国
              服务培训行业的“标杆”。
            </p>
            <p>
              学校的职业培训内容主要涵盖和辐射中高端家政、五星级酒店保洁、特殊人群长期护理、公共物业管理等领域相关服务必须具备的各项专业技能。
            </p>
          </div>
          <a>了解更多 ></a>
        </div>
      </div>
    </div>
    <!-- Offer courses -->
    <div class="offer_courses">
      <div class="offer_container">
        <TitleGroup :dec="'Offer courses'" :title="'开设课程'" />
        <div class="offer_banner">
          <SchoolBanner />
        </div>
      </div>
    </div>
    <!-- Our Advantages -->
    <div class="advantages_bg">
      <div class="advantages_container">
        <TitleGroup :dec="'Our Advantages'" :title="'我们的优势'" />
        <CardHover :cardList="advantagesList" />
      </div>
    </div>
    <!-- Teams -->
    <div class="teams_courses">
      <div class="teams_container">
        <TitleGroup
          :dec="'authoritative team of teachers'"
          :title="'权威的师资团队'"
        />
        <div class="team_banner">
          <TeamSwiper />
        </div>
      </div>
    </div>
    <!-- Delivery jobs -->
    <div class="jobs_bg">
      <TitleGroup :dec="'Delivery jobs'" :title="'输送岗位'" />
      <p class="job_intr">
        蓝若培训体制不仅主要围绕和聚焦培养“高端家庭服务师”，也涵盖了为其他服务岗位培训和输送适合人选的任务，同时又为包括集团旗下各公司在内的所有学员、员工创设了“不断学习、不断成长、不断提升”富有人文情怀的发展路径。并依托集团丰富、稳定的社会公众物业合作伙伴资源，以及集团旗下各公司充沛的工作岗位、消化劳动者就业的强大能力，保证学习培训人员一旦结业考试合格，都能顺利就业上岗工作。
      </p>
      <div class="jobs_list">
        <div class="jobs_item" v-for="(item, i) in jobsList" :key="i">
          <img :src="item.img" />
          <div class="job_info">
            <img :src="item.icon" />
            <h3 v-text="item.title"></h3>
            <!-- <p>查看详情></p> -->
          </div>
        </div>
      </div>
    </div>
    <!-- <Footer /> -->
  </div>
</template>
<script>
import HomeHeader from "./component/HomeHeader";
// import Footer from "./component/footer";
import TitleGroup from "./component/TitleGroup";
import SchoolBanner from "./component/SchoolBanner";
import TeamSwiper from "./component/TeamSwiper";
import CardHover from "./component/CardHover";

import { _leaveMessage } from "../service/mews";
export default {
  name: "Home",
  data() {
    return {
      sendActive: 0,
      banners: [require("@/assets/home_banner1.png")],

      advantagesList: [
        {
          bgImg: require("@/assets/home_avg1.png"),
          icon: require("@/assets/home_avg_icon1.png"),
          title: "精准筛选",
          intr: "凡有志于家政或公共物业服务的 人员我们都欢迎报考。学校根据不同专业特点也是有不同的录用标准和相关要求的，需要通过必要的面试考核程序，符合要求才能参加培训学习。",
        },
        {
          bgImg: require("@/assets/home_avg2.png"),
          icon: require("@/assets/home_avg_icon2.png"),
          title: "严格要求",
          intr: "不同专业、岗位、工种还是有特别对 应的具体要求。有的比较宽泛，有的比较严格，比如学校重点建设打造的 高端家庭服务专业录取时对道德素质 、文化水平、年龄身高、语言能力等条件都有特别要求，差距偏大者一般 很难进入。",
        },
        {
          bgImg: require("@/assets/home_avg3.png"),
          icon: require("@/assets/home_avg_icon3.png"),
          title: "多重选择",
          intr: "除了高端家庭服务、五星级酒店等专业外，还开设有其他录取条件相对宽泛的专业和工种，比如一般性家政岗位、长期护理、基 础保洁、物业服务等多种专业和岗位来接纳、满足广大从业者的培训需求，只要考核合格都保证安排就业。",
        },
        {
          bgImg: require("@/assets/home_avg4.png"),
          icon: require("@/assets/home_avg_icon4.png"),
          title: "就业保障",
          intr: "学校对应岗位技能实际要求，在培训类型分为“三天学制保洁员培训班；七天学制常护险培训班；十天学制一级服务技师培训班；三十天学制高端家庭服务研修培训班”四大板块。培训班安排理论教学、课外实训、岗位实习，凡经结业考试成绩合格者都将保证就业。",
        },
      ],
      jobsList: [
        {
          img: require("@/assets/home_job1.png"),
          icon: require("@/assets/home_job_icon1.png"),
          title: "嘉美美家家庭服务师",
        },
        {
          img: require("@/assets/home_job2.png"),
          icon: require("@/assets/home_job_icon2.png"),
          title: "全方酒店管理",
        },
        {
          img: require("@/assets/home_job3.png"),
          icon: require("@/assets/home_job_icon3.png"),
          title: "舜瀛物业保洁员",
        },
        {
          img: require("@/assets/home_job4.png"),
          icon: require("@/assets/home_job_icon4.png"),
          title: "挚爱护理站护理",
        },
      ],
    };
  },

  components: {
    HomeHeader,
    // Footer,
    TitleGroup,
    SchoolBanner,
    TeamSwiper,
    CardHover,
  },
  watch: {},
  mounted() {},
  destroyed() {
    // window.removeEventListener("scroll", this.windowScroll);
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.about_us_bg {
  position: relative;
  z-index: 10;
  background: #fff;
  border-bottom-left-radius: 240px;
  .about_us_container {
    width: 1200px;
    margin: 0 auto;
    padding: 109px 0 101px 0;
    display: flex;
    justify-content: space-between;
    > img {
      width: 630px;
    }
  }
}
.us_right {
  .intr {
    margin: 25px 0 50px 0;
    > p {
      font-size: 18px;
      color: #666;
      line-height: 28px;
      padding-bottom: 20px;
      width: 480px;
    }
  }
  > a {
    cursor: pointer;
    color: #7f1770;
    font-size: 16px;
    font-weight: bold;
  }
}
.offer_courses {
  background: url("../assets/home_offer_courses.png") no-repeat;
  background-size: 1920px 1030px;
  height: 1030px;
  position: relative;
  z-index: 9;
  // top: -230px;
  margin-top: -230px;
  padding: 330px 0 0 0;
  .offer_container {
    width: 1200px;
    margin: 0 auto;
  }
  .offer_banner {
    margin-top: 49px;
  }
}
.advantages_bg {
  position: relative;
  z-index: 8;
  background: #fff;
  border-bottom-left-radius: 240px;
  // top: -230px;
  // margin-top: -230px;
  padding: 111px 0 142px 0;
  .advantages_container {
    width: 1200px;
    margin: 0 auto;
  }
}
.teams_courses {
  background: url("../assets/home_team_courses.png") no-repeat;
  background-size: 100% 1130px;
  height: 1130px;
  position: relative;
  z-index: 6;
  margin-top: -230px;
  padding-top: 330px;
  .teams_container {
    width: 1200px;
    margin: 0 auto;
    .team_banner {
      margin-top: 60px;
    }
  }
}

.jobs_bg {
  position: relative;
  z-index: 5;
  background: #fff;
  border-bottom-left-radius: 240px;
  padding: 100px 0 130px 0;
  .job_intr {
    font-size: 18px;
    width: 1200px;
    line-height: 30px;
    margin: 50px auto;
    color: #666;
  }
  .jobs_list {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    .jobs_item {
      width: 280px;
      height: 400px;
      border-radius: 20px;
      margin-right: 27px;
      background: #f9f9f9;
      position: relative;
      transition: background linear 0.3s;
      .job_info {
        text-align: center;
        position: absolute;
        left: 50%;
        top: 205px;
        transform: translate(-50%, 0);
        > img {
          width: 96px;
          display: block;
          margin-bottom: 11px;
          margin: 0 auto;
        }
        > h3 {
          font-weight: bold;
          font-size: 20px;
          line-height: 28px;
          padding-top: 20px;
          width: 240px;
          color: #333;
          transition: color linear 0.3s;
        }
        > p {
          font-size: 16px;
          line-height: 22px;
          color: #7f1770;
          cursor: pointer;
          transition: color linear 0.3s;
        }
      }
    }
    .jobs_item:last-child {
      margin-right: 0;
    }
    .jobs_item:hover {
      background: #7f1770;
      .job_info {
        > h3 {
          color: #fff;
        }
        > p {
          color: #fff;
        }
      }
    }
  }
}
</style>