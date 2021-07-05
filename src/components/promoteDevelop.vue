<template>
  <div class="promote_develop">
    <HomeHeader :getActive="4" />
    <img class="college_banner" src="@/assets/promote_banner.png" />
    <!-- Promotion and development channels -->
    <div class="channels_bg" id="channel">
      <TitleGroup
        :dec="'Promotion and development channels'"
        :title="'晋升发展渠道'"
      />
      <img class="channels_img" src="@/assets/channels_img.png" alt="" />
    </div>
    <!-- On employment policy -->
    <div class="employment_bg" id="obtain">
      <div class="employment_container">
        <TitleGroup :dec="'On employment policy'" :title="'关于就业政策'" />
        <p class="intr">
          蓝若培训体制不仅主要围绕和聚焦培养“高端家庭服务师”，也涵盖了为其他服务岗位培训和输送适合人选的任务，同时又为包括集团旗下各公司在内的所有学员、员工创设了“不断学习、不断成长、不断
          提升”富有人文情怀的发展路径。并依托集团丰富、稳定的社会公众物业合作伙伴资源，以及集团旗下各公司充沛的工作岗位、消化劳动者就业的强大能力，保证学习培训人员一旦结业考试合格，都能顺利就业上岗工作。
        </p>
        <div class="employment_content">
          <div class="text_list">
            <div class="text_item">
              <h3>一、就业原则</h3>
              <p>
                培训机会均等；考核标准公开；成绩核定等第；对应岗位录用；确保人人就业。
              </p>
            </div>
            <div class="text_item">
              <h3>二、就业规则</h3>
              <p>
                以考核标准为准绳，根据结业考试成绩，对应相应工作岗位安排就业：
                1、结业考试成绩达到85分以上者，直接签约入职嘉美美家就业。
                2、结业考试成绩在71—84分之间者，可自主选择签约入职长护险或酒店客
                房服务岗位就业。
                3、结业考试成绩在60—70分之间者，均签约入职舜瀛物业岗位就业。
              </p>
            </div>
            <div class="text_item">
              <h3>三、就业通则</h3>
              <p>
                1、坚持“能者上，平者让，庸者下”的用人制度，以工作实绩并结合适时考
                核评估结果，动态量才安排或调整用工岗位。
                2、坚持“培训—就业—培训”的学校教育培训机制，为所有学员、员工转岗
                就业或技术等第升级提供不间断地学习、考核的务实平台。
                3、坚持修满“积分”或逐个通过“项目”考核等灵活机动的学习、评价方式，
                为需要者创造提升和晋级的机会。
              </p>
            </div>
          </div>
          <img src="@/assets/employment_img.png" alt="" />
        </div>
      </div>
      <!-- Policies related to enrollment of training schools -->
    </div>
    <div class="enrollment_bg" id="recruit">
      <div class="enrollment_container">
        <TitleGroup
          :dec="'Policies related to enrollment of training schools'"
          :title="'培训学校招生相关政策'"
        />
        <div class="enrollment_content">
          <img src="@/assets/enrollment_img.png" alt="" />
          <GeminiScrollbar
            style="height: 520px; width: 590px"
            class="my-scroll-bar"
          >
            <h3>学校相关招生、培训、就业政策说明如下：</h3>
            <p v-for="(item, i) in enrollmentTexts" :key="i" v-text="item"></p
          ></GeminiScrollbar>
        </div>
      </div>
    </div>
    <!-- Transfer post: family service division -->
    <div class="service_bg" id="transportation">
      <div class="service_container">
        <TitleGroup
          :dec="'Transfer post: family service division'"
          :title="'输送岗位：家庭服务师'"
        />
        <div class="service_content">
          <div class="service_info">
            <h3>报名信息</h3>
            <p>
              1、报名条件：年龄18-50周岁，限女性，身体健康，无不良嗜好；普通话标准；提供身份证、健康证、无犯罪证明、核酸检测报告、其它职业资格证书。
            </p>
            <p>
              2、培训内容：《职业道德》、《基础保洁》、《洗涤》、《上海菜烹饪》、《精细擦窗》、《基础收纳》、《基本护理》、《急救》等。
            </p>
            <p>
              3、培训时间：10-15天，培训结束获得证书后学校安排就业，提供统一服装，多劳多得。
            </p>
            <p>4、需求人数30人/月</p>
            <p>
              5、报名培训学校2000元/人（1500元学费+500元学杂费（含服装、工具、耗材等），
            </p>
            <p>
              6、结业获得两证（蓝若技能培训结业证书、人社部门家政职业证书）考证费用自理。
            </p>
            <p>7、获得两证的人员，学费1500元返还个人有效银行卡。</p>
            <p>*劳务派遣公司提供住宿</p>
            <p>/保险/按每小时30元核算</p>
            <p>/合作模式：劳务派遣。</p>
          </div>
          <img src="@/assets/service_img.png" alt="" />
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
  name: "PromoteDevelop",
  data() {
    return {
      enrollmentTexts: [
        "1、蓝若受上级企业即顺铎集团要求，负责集团所属的嘉美美家、全方酒店管理、舜瀛物业管理以及集团战略合作伙伴挚爱护理站等四家公司“统一招收员工，统一岗前培训，统 一输送就业”的工作。",
        "2、蓝若秉持“相信人人有才，帮助人人成才，保证人尽其才”的人才观，不拘一格欢迎 符合学校招生条件的学员报名入学，参加职业技能综合培训。一经培训结束，依据每名学员的结业考核成绩，将分别输送到对应用工单位，保证接受过初次培训后的所有学员都能上岗就业。",
        "3、蓝若职业技能培训时间原则上定为每期30天，其中前10天统一安排为国家家政（初级 ）理论课程、专项技能课程的学习、实操、参加上海市职业技能资格证书考试（获取职业 资格证书）。后20天为带薪实习（20元/小时）；核审实习鉴定；评定综合培训等级，并根据综合培训等级实施初次就业分配工作。 ",
        "4、蓝若培训合格学员将颁发“中国商业企业管理协会清洁服务商专业委员会；上海蓝若 职业技能培训有限责任公司”双印章落款的结业证书。",
        "5、蓝若对所有参加和接受培训的学员一律免收培训学费，但须缴学习培训保证金 2000元。凡完成培训，与就业单位签署就业协议并工作满3个月后，保证金将全额退还。培训期间，因个人原因提前要求退学或严重违反学校规章制度者，学校将按照每人每天200元的成本标准从保证金中予以扣除。保证金不足部分将从实习津贴中补足。",
        "6、蓝若对报名参加培训的人员将组织初次面试、考核，凡有过相关工作经历或接受过相关培训者，经学校考核，能力甄别后，可减免培训直接上岗就业或核减培训时间， 提前上岗就业。",
        "7、蓝若将公示各用工单位录用标准，学校依据学员的学业水平、考试成绩和实践工作 能力经验，公平、公正、公开对其就业岗位进行推荐与分配。 ",
        "8、蓝若实行“初次就业—继续培训—再次就业”的培训和工作推荐模式。为每位学员继续学习深造和进入心怡的就业岗位搭建平台，创造机会，提供通道。",
      ],
    };
  },
  components: {
    HomeHeader,
    // Footer,
    TitleGroup,
  },
};
</script>
<style lang="less" scoped>
.channels_bg {
  position: relative;
  background: #ffffff;
  border-bottom-left-radius: 240px;
  padding: 100px 0 98px 0;
  z-index: 10;
  .channels_img {
    display: block;
    width: 1200px;
    margin: 48px auto 0 auto;
  }
}
.employment_bg {
  position: relative;
  background: #f9f9f9;
  border-bottom-right-radius: 240px;
  margin-top: -230px;
  padding: 330px 0 98px 0;
  z-index: 9;
  .employment_container {
    width: 1200px;
    margin: 0 auto;
    .intr {
      font-size: 18px;
      text-align: center;
      line-height: 30px;
      padding: 50px 0 59px 0;
    }
    .employment_content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .text_list {
        width: 580px;
        .text_item {
          margin-bottom: 21px;
          h3 {
            font-size: 21px;
            color: #7f1770;
            line-height: 36px;
            font-weight: bold;
          }
          p {
            font-size: 16px;
            color: #666;
            line-height: 36px;
          }
        }
      }
    }
  }
}
.enrollment_bg {
  position: relative;
  background: #fff;
  border-bottom-left-radius: 240px;
  margin-top: -230px;
  padding: 330px 0 98px 0;
  z-index: 7;
  .enrollment_container {
    width: 1200px;
    margin: 0 auto;
    .enrollment_content {
      margin-top: 44px;
      overflow: hidden;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      > img {
        display: block;
      }
      h3 {
        font-size: 21px;
        line-height: 30px;
        font-weight: bold;
        margin-bottom: 10px;
      }
      p {
        font-size: 16px;
        line-height: 30px;
        color: #666;
        padding: 0 10px 0 0;
      }
    }
  }
}
.service_bg {
  position: relative;
  background: #f9f9f9;
  border-bottom-right-radius: 240px;
  margin-top: -230px;
  padding: 330px 0 98px 0;
  z-index: 6;
  .service_container {
    width: 1200px;
    margin: 0 auto;
    .service_content {
      margin-top: 65px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .service_info {
        width: 580px;
        h3 {
          font-size: 32px;
          line-height: 45px;
          color: #7f1770;
          padding-bottom: 41px;
          font-weight: bold;
        }
        p {
          line-height: 27px;
          color: #666;
          font-size: 16px;
        }
      }
    }
  }
}
</style>