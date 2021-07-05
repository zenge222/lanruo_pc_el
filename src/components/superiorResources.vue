<template>
  <div class="resources">
    <HomeHeader :getActive.sync="sendActive" />
    <img class="college_banner" src="@/assets/resources_banner.png" />
    <!-- Two series of courses -->
    <div class="courses_bg" id="science">
      <div class="courses_container">
        <TitleGroup
          :dec="'Scientific educational management'"
          :title="'科学的教育管理'"
        />
        <div class="courses_list">
          <div class="courses_item">
            <img src="@/assets/educational_img1.png" alt="" />
            <div class="btm_info">
              <img src="@/assets/educational_icon1.png" alt="" />
              <p>
                一、学校举办者、董事长是军人出身；两位校领导也都
                有长期从军历史；员工中有军旅背景的比例高达75.3%，
                将军旅文化与企业文化有机结合便自然称为我们打造办 学特色的。
              </p>
            </div>
          </div>
          <div class="courses_item">
            <img src="@/assets/educational_img2.png" alt="" />
            <div class="btm_info">
              <img src="@/assets/educational_icon2.png" alt="" />
              <p>
                二、契合我们从事高端家庭服务这一职业的自身特点，
                所以学校通过军训和实行半军事化管理。加强对学员思
                想品行、道德操守、行为举止、生活作风、自律自觉等
                素质养成抓得很紧，要求很严，对帮助学员更好从业，
                稳定就业都会起到积极作用。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Teams -->
    <div class="teams_courses" id="teams">
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
    <!-- Quality learning environment -->
    <div class="course_show_bg" id="environment">
      <div class="course_container">
        <TitleGroup
          :dec="'Quality learning environment'"
          :title="'优质的学习环境'"
        />
        <div>
          <CourseList :dataList="courseData" />
        </div>
      </div>
    </div>
    <!-- partners -->
    <div class="partners_bg" id="partner">
      <div class="partners_container">
        <TitleGroup :dec="'partners'" :title="'合作伙伴'" />
        <div>
          <PartnersCarousel :bannerList="partnersList" />
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
import TeamSwiper from "./component/TeamSwiper";
import CourseList from "./component/CourseList";
import PartnersCarousel from "./component/PartnersCarousel";

export default {
  name: "SuperiorResources",
  data() {
    return {
      sendActive: 3,
      courseData: [
        {
          title: "多媒体教室",
          img: require("@/assets/learning_img1.png"),
        },
        {
          title: "厨艺培训区",
          img: require("@/assets/learning_img2.png"),
        },
        {
          title: "卧室培训室",
          img: require("@/assets/learning_img3.png"),
        },
        {
          title: "咖啡厅培训区",
          img: require("@/assets/learning_img4.png"),
        },
        {
          title: "插花培训区",
          img: require("@/assets/learning_img5.png"),
        },
        {
          title: "宴会培训区",
          img: require("@/assets/learning_img6.png"),
        },
        {
          title: "客厅培训区",
          img: require("@/assets/learning_img7.png"),
        },
        {
          title: "医护培训区",
          img: require("@/assets/learning_img8.png"),
        },
        {
          title: "熨烫培训区",
          img: require("@/assets/learning_img9.png"),
        },
        {
          title: "茶道培训区",
          img: require("@/assets/learning_img10.png"),
        },
      ],
      partnersList: [
        {
          logo: require("@/assets/partners_logo.png"),
          title: "舜瀛物业",
          intrList: [
            "一家涉足物业清洁行业18年的公司，全方位提供物业托管， 保安、保洁服务，小区绿化的专业物业管理公司。",
            "曾为上海世博会及雪龙号科考船等一系列重要项目提供清洁服务。围绕“有人的地方就有我们服务的身影”这个核心原则， 经过多年的发展，上海舜瀛物业目前服务的对象涵盖金融、 公共设施、国企、外资、酒店、教育、商业广场、住宅、医 疗等各个领域服务区域也扩大至上海、北京、河南、河北、 山西、四川、湖北、安徽、云南等多个城市。",
            "并且与多个客户保持着长期的合作关系，其中包括海烟大酒店、家乐福、交通银行，铂颂医院、同济大学、东华大学、 虹桥迎宾馆，泛海国际、红星国际广场等。",
          ],
          imgs: [
            require("@/assets/sy_banner1.png"),
            require("@/assets/sy_banner2.png"),
            require("@/assets/sy_banner3.png"),
            require("@/assets/sy_banner4.png"),
          ],
        },
        {
          logo: require("@/assets/jm_logo.png"),
          title: "嘉美美家",
          intrList: [
            "嘉美美家，是国内高端家庭服务品牌领跑者，立 足互联网+平台，专业的家庭服务，涵盖保洁、收 纳、烹饪、清洗、护理、英式管家等。",
            "嘉美美家项目以数字经济理论为基础，围绕“专 业化、标准化、数字化、自动化”的方向，改革传 统家庭服务业，为家庭服务也注入新的血液带来 新的生机。企业总部位于上海，运用全新的服务 行业区块链模式，集合海内外权威师资力量，同 时建立完善晋升渠道体系，向全社会输出专业型 家庭服务人才。",
          ],
          imgs: [
            require("@/assets/jm_banner1.png"),
            require("@/assets/jm_banner2.png"),
            require("@/assets/jm_banner3.png"),
            require("@/assets/jm_banner4.png"),
          ],
        },
        {
          logo: require("@/assets/qf_logo.png"),
          title: "全方集团",
          intrList: [
            "OMNI GROUP 全方集团于 1980 年在英国伦敦创立， 专注于酒店客房与餐饮管理的全外包服务，为各种规模 的酒店提供人力资源外包及物业管理服务，是酒店客房 和餐饮领域第三方管理的行业领导者。",
            "OMNI拥有超过35年的客房服务经验，专注于管理全 面外包酒店清洁服务，并被广泛认为是该领域的领导者 。为超过650万个客房提供服务，并保证我们的顾客能 够享受一贯高质量的服务水平。",
            "合作的品牌包括：希尔顿全球酒店，万豪国际，洲际 酒店集团，雅诗阁集团，Sandman Signature, Westmont Hospitality, Redefine BDL, M＆C Group。",
          ],
          imgs: [
            require("@/assets/qf_banner1.png"),
            require("@/assets/qf_banner2.png"),
            require("@/assets/qf_banner3.png"),
            require("@/assets/qf_banner4.png"),
          ],
        },
        {
          logo: require("@/assets/za_logo.png"),
          title: "挚爱护理站",
          intrList: [
            "“上海挚爱护理站”是2015年12月，经徐汇 区卫计委、人社局和民政局批准设立：是上 海市《高领老人医疗护理计划》和长期护理 保险的首批定点服务机构和上海市医保定点 单位",
            "挚爱护理站始终秉持“一个理念”：即 “一切为了老人、为了老人一切”服务至上的 理念，经过七年的摸索与总结取得了阶段性 的成果，",
          ],
          imgs: [
            require("@/assets/za_banner1.png"),
            require("@/assets/za_banner2.png"),
            require("@/assets/za_banner3.png"),
            require("@/assets/za_banner4.png"),
          ],
        },
        {
          logo: require("@/assets/amn_logo.png"),
          title: "阿姆尼软件开发",
          intrList: [
            "在互联网时代中任务的事物都离不开技术的支持，阿 姆尼软件开发公司立志于成为互联网时代当中的标准软 件服务提供商，利用信息技术的力量为产业的升级和企 业的转型提供强有力的专业保障。",
            "现有的“保姆标准化工作绩效考评系统”“银行保洁协调 系统”为以前行业内难以界定的标准的服务有了可量化的 服务标准，大大提高了整体的工作和管理的效率，为产 业的升级提供了新思",
          ],
          imgs: [
            require("@/assets/amn_banner1.png"),
            require("@/assets/amn_banner2.png"),
            require("@/assets/amn_banner3.png"),
            require("@/assets/amn_banner4.png"),
          ],
        },
      ],
    };
  },
  components: {
    HomeHeader,
    // Footer,
    TitleGroup,
    TeamSwiper,
    CourseList,
    PartnersCarousel,
  },
};
</script>
<style lang="less" scoped>
.courses_bg {
  position: relative;
  background: #ffffff;
  border-bottom-left-radius: 240px;
  //   margin-top: -230px;
  padding: 100px 0 117px 0;
  z-index: 10;
  .courses_container {
    width: 1200px;
    margin: 0 auto;
    .courses_list {
      display: flex;
      margin-top: 66px;
      justify-content: space-between;
      .courses_item {
        width: 575px;
        border-radius: 20px;
        background: #f9f9f9;
        .btm_info {
          display: flex;
          padding: 50px 0;
          align-items: center;
          > img {
            display: flex;
            margin: 0 43px 0 59px;
          }
          > p {
            width: 361px;
            font-size: 18px;
            line-height: 25px;
            // font-weight: bold;
          }
        }
      }
    }
    > p {
      color: #666;
      font-size: 18px;
      line-height: 28px;
      padding-top: 73px;
    }
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
.course_show_bg {
  position: relative;
  background: #ffffff;
  border-bottom-left-radius: 240px;
  margin-top: -230px;
  padding: 330px 0 117px 0;
  z-index: 5;
  .course_container {
    width: 1200px;
    margin: 0 auto;
  }
}
.partners_bg {
  background: url("../assets/home_offer_courses.png") no-repeat;
  background-size: 1920px 1320px;
  border-bottom-right-radius: 240px;
  height: 1320px;
  position: relative;
  z-index: 4;
  margin-top: -230px;
  padding: 330px 0 0 0;
  .partners_container {
    width: 1200px;
    margin: 0 auto;
  }
}
</style>