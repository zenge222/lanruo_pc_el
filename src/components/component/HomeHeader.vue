<template>
  <div
    :class="{ header: true, other_header: !isHome, header_menu2: headerChange }"
  >
    <div class="header_container">
      <div class="header_left">
        <div v-if="isHome">
          <img v-if="!headerChange" src="@/assets/def_logo.png" />
          <img v-else src="@/assets/def_logo2.png" alt="" />
        </div>
        <div v-else>
          <img src="@/assets/def_logo2.png" alt="" />
        </div>
      </div>
      <div class="right_group">
        <div class="header_right">
          <ul>
            <li
              :class="{ active: tabActive == index && headerChange }"
              @click="linkTo(item, index)"
              v-for="(item, index) in tabList"
              :key="index"
            >
              <h3
                v-if="isHome"
                :style="{
                  'border-bottom':
                    tabActive == index
                      ? !headerChange
                        ? '2px solid #ffffff'
                        : '2px solid #7F1770'
                      : '2px solid transparent',
                }"
                v-text="item.title"
              ></h3>
              <h3
                v-else
                :style="{
                  'border-bottom':
                    tabActive == index
                      ? '2px solid #7F1770'
                      : '2px solid transparent',
                  color: tabActive == index ? '#7e1770' : '#333',
                }"
                v-text="item.title"
              ></h3>
            </li>
          </ul>
        </div>
        <div :class="{ phone_group: true, phone_change: headerChange }">
          <div v-if="isHome">
            <img v-if="!headerChange" src="@/assets/head_phone.png" />
            <img v-else src="@/assets/head_phone2.png" alt="" />
          </div>
          <div v-else>
            <img src="@/assets/head_phone2.png" alt="" />
          </div>
          <p>18301947460</p>
        </div>
      </div>
    </div>
    <el-backtop :bottom="100">
      <img src="@/assets/go_top.png" />
    </el-backtop>
  </div>
</template>
<script>
export default {
  data() {
    return {
      scrollTop: 0,
      headerChange: false,
      tabActive: this.getActive,
      tabList: [
        { title: "首页", path: "Home" },
        { title: "学院简介", path: "CollegeProfile" },
        { title: "课程设置", path: "CurriculumDesign" },
        { title: "优势资源", path: "SuperiorResources" },
        { title: "晋升发展", path: "PromoteDevelop" },
        { title: "发展规划", path: "DevPlan" },
        { title: "联系我们", path: "ContactUs" },
      ],
    };
  },
  props: {
    getActive: {
      type: Number,
      // default: 0
      require: true,
    },
    isHome: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    scrollTop: function (newVal, oldVal) {
      // console.log(newVal);
      if (newVal >= 50) {
        this.headerChange = true;
      } else {
        this.headerChange = false;
      }
    },
    getActive(newVal, oldVal) {
      this.tabActive = newVal;
    },
    tabActive(newVal, oldVal) {
      this.$emit("update:showPop", newVal);
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
    },
    linkTo(item, index) {
      this.pushTo(item.path);
    },
  },
};
</script>
<style lang="less" scope>
.header {
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  transition: background linear 0.3s;
  background: transparent;
  .header_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 60px;
    // padding: 18px 0;
    .header_left {
      display: flex;
      align-items: center;
      img {
        display: block;
        width: 370px;
      }
      > p {
        font-size: 24px;
        color: #7e1770;
        font-weight: bold;
        padding-left: 22px;
      }
    }
    .header_right {
      > ul {
        display: flex;
        > li {
          cursor: pointer;
          text-align: center;
          color: #ffffff;
          h3 {
            font-size: 18px;
            padding: 10px 0;
            margin: 0 20px;
          }
        }
        .active {
          h3 {
            color: #7e1770;
          }
          p {
            color: #fff;
          }
        }
      }
    }
  }
}

.right_group {
  display: flex;
  align-items: center;
}
.phone_group {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  color: #ffffff;
  border-radius: 24px;
  background: transparent;
  border: 2px solid #ffffff;
  padding: 10px 16px;
  margin-left: 100px;
  img {
    width: 20px;
    margin-right: 9px;
  }
}
.other_header {
  background: rgba(255, 255, 255, 0.4);
  .phone_group {
    border: 2px solid #7e1770;
    color: #7e1770;
  }
  .header_container {
    .header_right {
      > ul {
        > li {
          color: #333333;
        }
      }
      > ul {
        .active {
          h3 {
            color: #7e1770;
          }
        }
      }
    }
  }
}
.header_menu2 {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  .header_container {
    .header_right {
      > ul {
        > li {
          color: #333333;
          h3 {
            color: #333333;
          }
        }
      }
    }
  }
}
.phone_change {
  color: #7e1770;
  border: 2px solid #7e1770;
}
</style>