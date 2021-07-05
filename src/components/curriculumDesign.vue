<template>
  <div class="curriculum">
    <HomeHeader :getActive.sync="sendActive" />
    <img class="college_banner" src="@/assets/curriculum_banner.png" alt="" />
    <!-- Two series of courses -->
    <div class="courses_bg" id="series">
      <div class="courses_container">
        <TitleGroup :dec="'Two series of courses'" :title="'两大系列课程'" />
        <div class="courses_list">
          <div class="courses_item">
            <img src="@/assets/courses_item1.png" alt="" />
            <div class="btm_info">
              <img src="@/assets/courses_item_icon1.png" alt="" />
              <p>一、按照和对接国家指定的家政培训项目所开设的课程。</p>
            </div>
          </div>
          <div class="courses_item">
            <img src="@/assets/courses_item2.png" alt="" />
            <div class="btm_info">
              <img src="@/assets/courses_item_icon2.png" alt="" />
              <p>二、学校汇集当今国外家政行业最新理念，与新加坡、日本、英国等相关机构共同合作研发的富有学校自身特色的培训课程。</p>
            </div>
          </div>
        </div>
        <p>
          总体上两大系列课程在设置和培训中，做到了虽有所区别，又相互联系，是和而不同的关系。从“和”
          的角度看，学校主营技能培训的各个专业都集中涵盖在“保洁”的大范畴里；而“不同”之处是工作环境场景、项目内容属性、检测规范标准各有其特殊要求，所以课程设置上还是有所不同的。如果面试合格，进入学校培训。
        </p>
      </div>
    </div>
    <!-- Offer courses -->
    <div class="offer_courses" id="curriculum">
      <div class="offer_container">
        <TitleGroup :dec="'Offer courses'" :title="'开设课程'" />
        <div class="offer_banner">
          <SchoolBanner/>
        </div>
      </div>
    </div>
    <!-- Course to show -->
    <div class="course_show_bg">
      <div class="course_container">
        <TitleGroup :dec="'Course to show'" :title="'课程展示'" />
        <div>
          <CourseList :dataList="courseData" />
        </div>
      </div>
    </div>
    <!-- Outstanding students -->
    <div class="styles_bg" id="student">
      <div class="styles_container">
        <TitleGroup :dec="'Outstanding students'" :title="'优秀学员'" />
        <img src="@/assets/excellent_staf.png" alt="" />
      </div>
    </div>
    <!-- <Footer /> -->
  </div>
</template>
<script>
import HomeHeader from "./component/HomeHeader";
// import Footer from "./component/footer";
import TitleGroup from "./component/TitleGroup";
import CourseList from "./component/CourseList";
import SchoolBanner from "./component/SchoolBanner";
export default {
  name: "CurriculumDesign",
  data() {
    return {
      sendActive: 2,
      courseData: [
        {
          title: "家庭护理",
          img: require("@/assets/course_show1.png"),
        },
        {
          title: "艺术插花",
          img: require("@/assets/course_show2.png"),
        },
        {
          title: "管家服务",
          img: require("@/assets/course_show3.png"),
        },
        {
          title: "日常保洁",
          img: require("@/assets/course_show4.png"),
        },
        {
          title: "茶艺品茗",
          img: require("@/assets/course_show5.png"),
        },
        {
          title: "家常烹饪",
          img: require("@/assets/course_show6.png"),
        },
        {
          title: "维修服务",
          img: require("@/assets/course_show7.png"),
        },
        {
          title: "婴儿护理",
          img: require("@/assets/course_show8.png"),
        },
      ],
    };
  },

  components: {
    HomeHeader,
    // Footer,
    TitleGroup,
    SchoolBanner,
    CourseList,
  },
};
</script>
<style lang="less" scoped>
.college_banner {
  position: relative;
  z-index: 11;
}
.courses_bg {
  position: relative;
  background: #ffffff;
  border-bottom-left-radius: 240px;
  margin-top: -230px;
  padding: 330px 0 117px 0;
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
.offer_courses {
  background: url("../assets/home_offer_courses.png") no-repeat center center;
  background-size: 100% 1030px;
  height: 1030px;
  position: relative;
  z-index: 9;
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
.course_show_bg {
  position: relative;
  background: #ffffff;
  border-bottom-left-radius: 240px;
  margin-top: -230px;
  padding: 330px 0 117px 0;
  z-index: 8;
  .course_container {
    width: 1200px;
    margin: 0 auto;
  }
}
.styles_bg {
  position: relative;
  z-index: 7;
  background: #f9f9f9;
  border-bottom-right-radius: 240px;
  margin-top: -230px;
  padding: 330px 0 143px 0;
  .styles_container {
    width: 1200px;
    margin: 0 auto;
    > img {
      display: block;
      margin-top: 64px;
    }
  }
}
</style>