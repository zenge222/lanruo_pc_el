<template>
  <div class="index">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Footer />
  </div>
</template>

<script>
import Footer from "./component/footer";

export default {
  name: "Index",
  data() {
    return {};
  },
  components: {
    Footer,
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped>
</style>
