<template>
  <div :class="{ left_title_group: true, change_color: changeColor }">
    <!-- <slot class="dec" name="header"></slot> -->
    <p :style="{ 'text-align': align }" v-if="dec">
      {{ dec | toCapitalization }}
    </p>
    <h3
      :style="{ 'text-align': align, 'font-size': titleSize + 'px' }"
      v-text="title"
    ></h3>
    <div
      :style="{ margin: align == 'center' ? '0 auto' : '0 0' }"
      class="line"
    ></div>
  </div>
</template>
<script>
export default {
  props: {
    dec: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      require: true,
    },
    align: {
      type: String,
      default: "center",
    },
    changeColor: {
      type: Boolean,
      default: false,
    },
    titleSize: {
      type: Number,
      default: 48,
    },
  },
  data() {
    return {};
  },
  filters: {
    toCapitalization: function (value) {
      if (!value) return "";
      value = value.toString();
      return value.toUpperCase();
    },
  },
};
</script>
<style lang="less" scoped>
.left_title_group {
  h3 {
    font-weight: bold;
    margin-bottom: 30px;
  }
  p {
    color: #7f1770;
    font-weight: bold;
    font-size: 21px;
    padding-bottom: 24px;
  }
  .line {
    width: 75px;
    height: 4px;
    background: linear-gradient(
      90deg,
      rgba(127, 23, 112, 1),
      rgba(182, 51, 169, 0)
    );
  }
}
.change_color {
  h3 {
    color: #fff;
  }
  p {
    color: #ab57a0;
  }
  .line {
    background: linear-gradient(
      90deg,
      rgba(236, 156, 225, 1),
      rgba(182, 51, 169, 0)
    );
  }
}
</style>