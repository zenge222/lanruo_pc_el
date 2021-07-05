<template>
  <div>
    <div class="footer">
      <div class="footer_container">
        <div class="left_group">
          <img class="logo" src="@/assets/footer_logo.png" />
          <img class="phone" src="@/assets/footer_phone.png" />
          <i>全国热线 7*24小时服务</i>
          <p>邮箱:lanruopeixun@lanruopx.com</p>
          <p>地址：上海市浦东新区沂南路35号</p>
        </div>
        <div class="right_group">
          <div class="footer_list" v-for="(item, i) in footerList" :key="i">
            <ul>
              <h3 v-text="item.title"></h3>
              <li v-for="(item2, j) in item.subs" :key="j">
                <span></span>
                <a
                  :href="item2.hash"
                  @click="linkTo(item2)"
                  v-text="item2.linkName"
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="btn_info">
        <span
          >Copyright © 2020-2030 蓝若职业技术培训学校 版权所有
          沪ICP备11043453号-2
        </span>
        <span style="padding-left: 50px">沪公网安备 31011202005206号</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      footerList: [
        {
          title: "学院简介",
          subs: [
            {
              linkName: "学校概况",
              path: "/collegeProfile",
              hash: "#survey",
            },
            {
              linkName: "办学宗旨",
              path: "/collegeProfile",
              hash: "#purpose",
            },
            {
              linkName: "办学模式",
              path: "/collegeProfile",
              hash: "#model",
            },
            {
              linkName: "关于培训",
              path: "/collegeProfile",
              hash: "#train",
            },
            {
              linkName: "培训风采",
              path: "/collegeProfile",
              hash: "#elegant",
            },
            {
              linkName: "静安校区",
              path: "/collegeProfile",
              hash: "#jingan",
            },
            {
              linkName: "浦东校区",
              path: "/collegeProfile",
              hash: "#pudong",
            },
            {
              linkName: "联系我们",
              path: "/contactUs",
              hash: "#contact",
            },
          ],
        },
        {
          title: "课程设置",
          subs: [
            {
              linkName: "两大系列课程",
              path: "/curriculumDesign",
              hash: "#series",
            },
            {
              linkName: "开设课程",
              path: "/curriculumDesign",
              hash: "#curriculum",
            },
            {
              linkName: "优秀学员",
              path: "/curriculumDesign",
              hash: "#student",
            },
          ],
        },
        {
          title: "优势资源",
          subs: [
            {
              linkName: "科学的教育管理",
              path: "/superiorResources",
              hash: "#science",
            },
            {
              linkName: "权威的师资团队",
              path: "/superiorResources",
              hash: "#teams",
            },
            {
              linkName: "优质的学习环境",
              path: "/superiorResources",
              hash: "#environment",
            },
            {
              linkName: "合作伙伴",
              path: "/superiorResources",
              hash: "#partner",
            },
          ],
        },
        {
          title: "晋升发展",
          subs: [
            {
              linkName: "晋升发展渠道",
              path: "/promoteDevelop",
              hash: "#channel",
            },
            {
              linkName: "关于就业政策",
              path: "/promoteDevelop",
              hash: "#obtain",
            },
            {
              linkName: "招生相关政策",
              path: "/promoteDevelop",
              hash: "#recruit",
            },
            {
              linkName: "输送岗位",
              path: "/promoteDevelop",
              hash: "#transportation ",
            },
          ],
        },
        {
          title: "后续发展规划",
          subs: [
            {
              linkName: "后续发展规划",
              path: "/devPlan",
              hash: "#followUp",
            },
            {
              linkName: "园区总平面布局",
              path: "/devPlan",
              hash: "#layout",
            },
            {
              linkName: "智慧办公区",
              path: "/devPlan",
              hash: "#wisdom",
            },
            {
              linkName: "康复中心",
              path: "/devPlan",
              hash: "#rehabilitation",
            },
            {
              linkName: "培训基地",
              path: "/devPlan",
              hash: "#trainingBase",
            },
            {
              linkName: "员工宿舍",
              path: "/devPlan",
              hash: "#dormitory",
            },
            {
              linkName: "体验中心",
              path: "/devPlan",
              hash: "#experience ",
            },
            {
              linkName: "商务酒店",
              path: "/devPlan",
              hash: "#hotel ",
            },
          ],
        },
      ],
    };
  },
  methods: {
    linkTo(item) {
      console.log(item.path, item.hash);
      this.$router.push({
        path: item.path, //  或者可以写成  path: '/home'
        query: {
          //  这种参数不会带在地址栏上
          // hash: item.hash,
        },
      });
    },
  },
};
</script>
<style lang="less" scoped>
.footer_bg {
}
.footer {
  background: url("../../assets/footer_bg.png") no-repeat;
  background-size: 100% 712px;
  height: 712px;
  position: relative;
  z-index: 0;
  margin-top: -230px;
  padding-top: 314px;
  .footer_container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .left_group {
      .logo {
        display: block;
        margin-bottom: 53px;
      }
      .phone {
        display: block;
        margin-bottom: 8px;
      }
      > i {
        display: block;
        font-size: 14px;
        padding-bottom: 32px;
        line-height: 20px;
      }
      > p {
        font-size: 16px;
        line-height: 16px;
        padding-bottom: 16px;
      }
    }
    .right_group {
      display: flex;
      align-items: flex-start;
      .footer_list {
        padding-left: 60px;
        h3 {
          font-size: 18px;
          font-weight: bold;
          padding-bottom: 32px;
        }
        ul {
          li {
            display: flex;
            align-items: center;
            padding-bottom: 18px;
            span {
              display: block;
              width: 9px;
              height: 1px;
              background: #7f1770;
              margin-right: 7px;
            }
            a {
              cursor: pointer;
              font-size: 14px;
              color: #666;
            }
          }
        }
      }
      .footer_list:first-child {
        padding-left: 0;
      }
    }
  }
}
.bottom {
  background: #eff0f7;
  padding: 15px 0;
  .btn_info {
    width: 1200px;
    margin: 0 auto;
    color: #555555;
    font-size: 14px;
    line-height: 21px;
  }
}
</style>