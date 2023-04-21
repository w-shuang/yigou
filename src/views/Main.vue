<template>
  <div>
    <el-container>
      <el-aside width="auto">
          <CommonAside/>
      </el-aside>
      <el-container>
        <el-header>
            <CommonHeader/>
        </el-header>
        <CommonTag/>
        <el-main>
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonHeader from '../components/CommonHeader.vue';
import CommonAside from '../components/CommonAside.vue';
import CommonTag from '../components/CommonTag.vue';
export default {
  components: { CommonAside, CommonHeader, CommonTag },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.el-header {
    padding: 0%;
}
</style>