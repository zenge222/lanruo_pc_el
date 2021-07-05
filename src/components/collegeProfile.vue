<template>
  <div class="college_profile">
    <HomeHeader :getActive.sync="sendActive" />
    <img class="college_banner" src="@/assets/college_banner.png" alt="" />
    <!-- Delivery jobs -->
    <div class="delivery_bg">
      <div class="delivery_container">
        <TitleGroup :dec="'Delivery jobs'" :title="'学校简介'" />
        <p style="padding: 60px 0 20px 0">
          蓝若职业技能培训学校是一所经上海市人民政府审核批准和正式颁发办学许可证的民办职业技能培训学校，
          学校名称是：上海蓝若职业技能培训有限责任公司（简称蓝若），
          在官方网站可以检索查验。 经过培训考试合格将颁发结业证书。
          学校具有正规性、合法性和社会公信力。
        </p>
        <p>
          学校的职业培训内容主要涵盖和辐射中高端家政、
          五星级酒店保洁、特殊人群长期护理、公共物业管理等领域相关服务必须具备的各项专业技能。
        </p>
        <div class="card_container">
          <div class="card_item" v-for="(item, i) in cardList" :key="i">
            <img :src="item" />
            <div class="mask"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- qualification -->
    <div class="qualification_bg">
      <div class="qua_container">
        <TitleGroup :dec="'Running qualification'" :title="'办学资质'" />
        <div class="qua_info">
          <img src="@/assets/qualification_pic.png" alt="" />
          <div class="intr">
            <p>
              蓝若学校隶属上海顺铎集团，这是一家有近20年从事家政物业在业界享有盛誉的专业服务企业。
            </p>
            <p>
              先后获得过“中国商业企业管理协会保洁师资质、项目经理资质指定培训基地；上海中小企业协会、上海职工代表协会
              授权创办的家政服务培训学校；上海城市保洁同业联谊会项目经理培训基地；上海舜瀛物业管理有限公司员工职业技能培训基地。
            </p>
            <p>
              集团对旗下蓝若学校明确提出“定位上要有高度，理念上要有深度，文化上要有厚度，情怀上要有温度，特色上要有亮度”的办学标准、把学校建成高端家政特色学校的办学要求、
              努力打造成业界航母的办学目标”。
            </p>
            <p>
              蓝若职业技能培训学校是经过“中华人民共和国人力资源和社会保障部”批准的拥有正规“民办学校办学许可证”的合法、合规的
              正规培训机构，目前在上海拥有2个校区，师资力量强大，现已联合台湾、日本、新加坡、英国等各国服务行业培训机构，共同打造中国
              服务培训行业的“标杆”。
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- The principle -->
    <div class="principle_bg" id="purpose">
      <div class="principle_container">
        <TitleGroup :dec="'The principle'" :title="'办学宗旨'" />
        <div style="margin-top: 60px">
          <PrincipleSwiper :bannerList="teamList" />
        </div>
      </div>
    </div>
    <!-- Mode of operation -->
    <div class="operation_bg" id="model">
      <div class="operation_container">
        <TitleGroup
          :changeColor="true"
          :dec="'Mode of operation'"
          :title="'办学模式'"
        />
        <p>
          蓝若培训学校以线下实体培训学校为起点，主动紧密结合互联网、寻找适合自己的未来之路，通过线上线下融合，将实体服务和虚拟体验完美结合，建立管家式服务培训学校。预计形成日臻完善，
          成熟稳定的终端服务平台。
          同时，蓝若职业技能培训学校还会不断地将家政行业细分化、知识化、专业化、规范化、产业化，
          推出以品牌+资源，服务+口碑的管理模式在全国落地生根。
        </p>
      </div>
    </div>
    <!-- About the training -->
    <div class="advantages_bg" id="train">
      <div class="advantages_container">
        <TitleGroup :dec="'About the training'" :title="'关于培训'" />
        <CardHover :cardList="advantagesList" />
      </div>
    </div>
    <!-- Training style -->
    <div class="styles_bg" id="elegant">
      <div class="styles_container">
        <TitleGroup :dec="'Training style'" :title="'培训风采'" />
        <img src="@/assets/training_style_img.png" alt="" />
      </div>
    </div>
    <!-- Jingan district -->
    <div class="district_bg" id="jingan">
      <div class="district_container">
        <TitleGroup :dec="'Jingan district'" :title="'静安校区'" />
        <div style="margin-top: 60px">
          <DistrictContent :dataInfo="jinganDistrict" />
        </div>
      </div>
    </div>
    <!-- pudong district -->
    <div class="district_bg pudong_bg" id="pudong">
      <div class="district_container">
        <TitleGroup :dec="'pudong district'" :title="'浦东校区'" />
        <div style="margin-top: 60px">
          <DistrictContent :textBg="'#fff'" :dataInfo="pudongDistrict" />
        </div>
      </div>
    </div>
    <!-- <Footer /> -->
  </div>
</template>
<script>
import HomeHeader from "./component/HomeHeader";
// import Footer from "./component/footer";
import PrincipleSwiper from "./component/PrincipleSwiper";
import CardHover from "./component/CardHover";
import DistrictContent from "./component/DistrictContent";

import TitleGroup from "./component/TitleGroup";
export default {
  name: "collegeProfile",
  data() {
    return {
      sendActive: 1,
      cardList: [
        require("@/assets/delivery_card1.png"),
        require("@/assets/delivery_card2.png"),
        require("@/assets/delivery_card3.png"),
        require("@/assets/delivery_card4.png"),
      ],
      teamList: [
        {
          img: require("@/assets/principle_img1.png"),
          icon: require("@/assets/principle_icon1.png"),
          title: "理念深度",
          intr: "以家庭服务事业为平台担当企业社会责任，特别聚焦有意愿的 特殊群体，秉持“相信人人有才，帮助人人成才，保证人尽其 才”的育人办学宗旨，为其创造培训学习机会，提供充分就业 机会，走上自食其力勤劳致富的道路。",
        },
        {
          img: require("@/assets/principle_img2.png"),
          icon: require("@/assets/principle_icon2.png"),
          title: "文化厚度",
          intr: "蓝若致力打造不同一般的家庭服务文化，既秉承本土文化习俗，也汲取国外同业先进理念和规范标准，通过兼容并蓄形成具有自身特色的蓝若高端家庭服务文化。",
        },
        {
          img: require("@/assets/principle_img3.png"),
          icon: require("@/assets/principle_icon3.png"),
          title: "情怀温度",
          intr: "一旦入学你会处处感受“人格上尊重你，人人都是姐妹兄弟；生活上关心你，人 人都予温馨体惜；学习上帮助你，人人都能学到本领；安全上保护你，人人都无 后顾之忧；事业上扶持你，人人都有成长空间”的蓝若人性化的教育方式、管理制度和保障体系。",
        },
        {
          img: require("@/assets/principle_img4.png"),
          icon: require("@/assets/principle_icon4.png"),
          title: "定位高度",
          intr: "培训课程主要针对日益增长的高端家政服务市场开设，竭力量 身打造或定制培养、输送职业道德和职业技能与之相适应的专 门人才满足其需要。",
        },
        {
          img: require("@/assets/principle_img5.png"),
          icon: require("@/assets/principle_icon5.png"),
          title: "特色亮度",
          intr: "学校围绕培训、就业、晋级、继续教育培训构建而成 的一套完整巡回式的培训体系和发展路径，既有益于每位受训学员的阶段需求，也为长期提升、成 长、发展远景创造条件，提供可能。",
        },
      ],
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
      jinganDistrict: {
        address: "上海市静安区长兴路173号3楼",
        area: "1200",
        accommodate: "30",
        classroom1: "1",
        classroom2: "7",
        img: require("@/assets/jingan_istrict_img.png"),
      },
      pudongDistrict: {
        address: "上海市浦东沂南路35号",
        area: "2000",
        accommodate: "50",
        classroom1: "1",
        classroom2: "10",
        img: require("@/assets/pudong_district_img.png"),
      },
    };
  },

  components: {
    HomeHeader,
    // Footer,
    TitleGroup,
    PrincipleSwiper,
    CardHover,
    DistrictContent,
  },
};
</script>
<style lang="less" scoped>
.delivery_bg {
  position: relative;
  z-index: 10;
  background: #fff;
  border-bottom-left-radius: 240px;
  padding: 100px 0;
  //   height: 938px;
  .delivery_container {
    width: 1200px;
    margin: 0 auto;
    > p {
      font-size: 18px;
      color: #666;
      line-height: 30px;
      text-align: center;
    }
    .card_container {
      margin-top: 70px;
      border-radius: 20px;
      overflow: hidden;
      display: flex;
      .card_item {
        position: relative;
        flex: 1;
        height: 360px;
        .mask {
          width: 100%;
          height: 100%;
          transition: background linear 0.3s;
          background: rgba(127, 23, 112, 0.29);
          left: 0;
          top: 0;
          position: absolute;
        }
      }
      .card_item:hover {
        .mask {
          background: rgba(127, 23, 112, 0);
        }
      }
    }
  }
}
.qualification_bg {
  position: relative;
  z-index: 9;
  background: #f9f9f9;
  border-bottom-right-radius: 240px;
  padding: 330px 0 147px 0;
  margin-top: -230px;
  .qua_container {
    margin: 0 auto;
    width: 1200px;
    .qua_info {
      padding-top: 49px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      > img {
        display: block;
        width: 600px;
      }
      .intr {
        width: 554px;
        > p {
          font-size: 18px;
          color: #666;
          line-height: 28px;
          padding-bottom: 20px;
        }
        > p:last-child {
          padding-bottom: 0;
        }
      }
    }
  }
}
.principle_bg {
  position: relative;
  z-index: 8;
  background: #fff;
  border-bottom-left-radius: 240px;
  padding: 100px 0;
  .principle_container {
    width: 1200px;
    margin: 0 auto;
  }
}
.operation_bg {
  position: relative;
  z-index: 7;
  background: url("../assets/operation_bg.png") no-repeat center center;
  background-size: 1920px 955px;
  height: 955px;
  margin-top: -230px;
  padding: 330px 0 0 0;
  .operation_container {
    width: 1200px;
    margin: 0 auto;
    > p {
      color: #fff;
      font-size: 18px;
      text-align: center;
      padding-top: 50px;
      line-height: 30px;
    }
  }
}
.advantages_bg {
  position: relative;
  z-index: 6;
  background: #fff;
  border-bottom-left-radius: 240px;
  // top: -230px;
  margin-top: -230px;
  padding: 330px 0 142px 0;
  .advantages_container {
    width: 1200px;
    margin: 0 auto;
  }
}
.styles_bg {
  position: relative;
  z-index: 5;
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
.district_bg {
  position: relative;
  z-index: 4;
  background: #ffffff;
  border-bottom-left-radius: 240px;
  margin-top: -230px;
  padding: 330px 0 143px 0;
  .district_container {
    width: 1200px;
    margin: 0 auto;
  }
}
.pudong_bg {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 240px;
  position: relative;
  z-index: 3;
  background: #f9f9f9;
  .district_container {
    .info_item {
      background: #fff;
    }
  }
}
</style>