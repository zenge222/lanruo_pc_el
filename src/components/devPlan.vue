<template>
  <div class="dev_plan">
    <HomeHeader :getActive="5" />
    <img class="college_banner" src="@/assets/dev_plan_img.png" />
    <!-- Lanruo Vocational Skills Training School Phase III -->

    <div class="school_bg" id="layout">
      <div class="school_container">
        <div class="school_content">
          <img src="@/assets/school_img.png" alt="" />
          <div class="school_info">
            <h3>张江校区</h3>
            <h4>园区总平面布局图规划如下：</h4>
            <p>
              围绕打造家政行业培训/就业基地这一主题，项目将园区分为六大板块。
            </p>
            <p>1号楼：智慧办公楼，智能化办公楼</p>
            <p>2号楼：康复中心 ，护理培训基地</p>
            <p>4号楼：体验中心</p>
            <p>5号楼：科技展厅</p>
            <p>6号楼及9号楼为酒店区域</p>
            <p>7号楼：员工宿舍，一楼餐厅</p>
            <p>8号楼：培训基地</p>
            <p style="padding-top: 20px">
              拥有40间教室，150间学员宿舍，最高可同时容纳1000人同时培训
            </p>
          </div>
        </div>
        <img style="margin-top: 68px" src="@/assets/school_table.png" alt="" />
      </div>
    </div>
    <!-- 1 -->
    <div class="item_bg item1_bg" id="wisdom">
      <div class="item_container">
        <div class="item_group">
          <TitleGroup :titleSize="36" :align="'left'" :title="'智慧办公区'" />
          <p>
            1号楼规划为智能办公区域，打造大型智能
            化办公楼，将通过对智慧型养老产业的孵化
            和搭建，培养孵化或引流高端产业领军企业，
            营造智能化办公场所，同时配备智能化办公
            器械，提供“集约化管理、智慧化运营、专
            业化服务、全产业融合”的医疗服务产业办 公服务平台。
          </p>
          <img src="@/assets/shool_item_s1.png" alt="" />
        </div>
        <img src="@/assets/shool_item_b1.png" alt="" />
      </div>
    </div>
    <!-- 2 -->
    <div class="item_bg item2_bg" id="rehabilitation">
      <div class="item_container">
        <img src="@/assets/shool_item_b2.png" alt="" />
        <div class="item_group">
          <TitleGroup
            :titleSize="36"
            :align="'left'"
            :title="'康复中心、护理中心'"
          />
          <p>
            2号楼规划主打康复中心及护理中心，与大型医院进行合作，强强联合，引
            进一流医疗资源，立足于打造专业级的大型康复中心，护理中心。
            同时由专业设计师将设计康复区，护理区，生活区等等进行划分，设立专业
            级康复治疗训练室，制定科学方案划分各区域，硬件设施将引进国内外专业康
            复训练及相关护理器械。
          </p>
          <img src="@/assets/shool_item_s2.png" alt="" />
        </div>
      </div>
    </div>
    <!-- 3 -->
    <div class="item_bg item3_bg" id="trainingBase">
      <div class="item_container">
        <div class="item_group">
          <TitleGroup :titleSize="36" :align="'left'" :title="'培训基地'" />
          <p>
            8号楼为园区培训中心，携手蓝若职业技能
            培训学校，打造高端家庭服务培训的摇篮。
            包含教室及办公场所，同时培训课程包括高端
            家庭服务，家庭保洁，服务礼仪、英式管家服
            务、营养烹饪、婴儿护理、老人护理、月嫂陪
            护等。致力于打造现代服务大型培训基地。
            搭建权威的师资培训体系，容纳国内外保洁
            收纳专家，携手日本高端家政服务品牌，日籍
            教师授课，台湾康宁大学老师亲临授课。
          </p>
          <img src="@/assets/shool_item_s3.png" alt="" />
        </div>
        <img src="@/assets/shool_item_b3.png" alt="" />
      </div>
    </div>
    <!-- 4 -->
    <div class="item_bg item4_bg" id="dormitory">
      <div class="item_container">
        <img src="@/assets/shool_item_b4.png" alt="" />
        <div class="item_group">
          <TitleGroup :titleSize="36" :align="'left'" :title="'员工宿舍'" />
          <p>
            3号楼打造员工宿舍，提供高品质的员工宿
            舍、食堂、娱乐空间等配套设施，给员工创造
            一个安静、整洁、卫生、舒适的生活环境，提
            高园区的生活品质，提高员工的工作效率。
            同时划分4000多平为餐厅区域，可以做中
            餐服务培训。一楼为厨房及餐厅外包，二楼可
            专门开设包房10-12个可做培训人员的入住以 达到盈利。
          </p>
          <img src="@/assets/shool_item_s4.png" alt="" />
        </div>
      </div>
    </div>
    <!-- 5 -->
    <div class="item_bg item5_bg">
      <div class="item_container">
        <div class="item_group">
          <TitleGroup
            :titleSize="36"
            :align="'left'"
            :title="'智慧体验中心、科技展厅办公区'"
          />
          <p>
            4号楼5号楼着重打造体验中心，科技展厅，智能化部署 “体教结 合”
            ，通过在真实的模拟空间，将高科技设备体验及基地培训教育
            有机的结合，使学员在真实的操作环境中获得高效的提升。
            展厅为高科技老年康复医疗器械的多元化高端展示空间，引进国
            内外一流的高科技医疗器械，同事让厂商与体验方无缝对接，提供
            办公、服务、体验等各个附属空间。
          </p>
          <img src="@/assets/shool_item_s5.png" alt="" />
        </div>
        <img src="@/assets/shool_item_b5.png" alt="" />
      </div>
    </div>
    <!-- 6 -->
    <div class="item_bg item6_bg" id="hotel">
      <div class="item_container">
        <img src="@/assets/shool_item_b6.png" alt="" />
        <div class="item_group">
          <TitleGroup :titleSize="36" :align="'left'" :title="'商务酒店'" />
          <p>
            6号楼和9号楼打造大型酒店。联合OMN GROUP全方集团共同打造，参
            与酒店客房与休闲餐饮管理服务，中英理念结合。
            6号楼：打造以商务、会议、娱乐、餐饮、住宿为一体的高端主题酒店
            ，并可为园区提供必要的商业配套服务。配备高级特色餐厅，包含中餐及
            各国西餐等，娱乐服务有大型KTV，休闲酒吧，健身房，游泳池，桑拿房
            ，网球场，桌球室等等一系列休闲娱乐配备。
            9号楼为主要客房区域，各楼层可定制不同房型，包含不同价位及格局，
            顶层做4到5个高级套房， 打造高端商务套房，提供安全、舒适、方便、
            清洁、美观的休息和工作场所 。
          </p>
          <img src="@/assets/shool_item_s6.png" alt="" />
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
export default {
  name: "DevPlan",
  data() {
    return {};
  },
  components: {
    HomeHeader,
    // Footer,
    TitleGroup,
  },
};
</script>
<style lang="less" scoped>
.school_bg {
  position: relative;
  background: #ffffff;
  border-bottom-left-radius: 240px;
  padding: 100px 0 98px 0;
  z-index: 10;
  .school_container {
    margin: 0 auto;
    width: 1200px;
    .school_content {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      .school_info {
        h3 {
          font-size: 36px;
          padding-bottom: 30px;
          font-weight: bold;
        }
        h4 {
          font-size: 21px;
          color: #7f1770;
          padding-bottom: 10px;
          font-weight: bold;
        }
        p {
          line-height: 36px;
          font-size: 16px;
          color: #666;
        }
      }
    }
  }
}
.item_bg {
  position: relative;
  margin-top: -230px;
  padding: 330px 0 115px 0;
  .item_container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    .item_group {
      p {
        line-height: 36px;
        font-size: 18px;
        color: #666;
        width: 580px;
        padding-top: 30px;
      }
    }
  }
}
.item1_bg {
  z-index: 9;
  border-bottom-right-radius: 240px;
  background: #f9f9f9;
  .item_group {
    p {
      padding-bottom: 86px;
    }
  }
}
.item2_bg {
  border-bottom-left-radius: 240px;
  z-index: 8;
  background: #ffffff;
  .item_group {
    p {
      padding-bottom: 50px;
    }
  }
}
.item3_bg {
  border-bottom-right-radius: 240px;
  z-index: 7;
  background: #f9f9f9;
  .item_group {
    p {
      padding-bottom: 14px;
    }
  }
}
.item4_bg {
  border-bottom-left-radius: 240px;
  z-index: 6;
  background: #ffffff;
  .item_group {
    p {
      padding-bottom: 14px;
    }
  }
}
.item5_bg {
  border-bottom-right-radius: 240px;
  z-index: 5;
  background: #f9f9f9;
  .item_group {
    p {
      padding-bottom: 14px;
    }
  }
}
.item6_bg {
  border-bottom-left-radius: 240px;
  z-index: 4;
  background: #ffffff;
  .item_group {
    p {
      padding-bottom: 29px;
    }
  }
}
</style>