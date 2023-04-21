<template>
  <div class="tabs">
    <el-tag
      v-for="(item, index) in tabsList"
      :key="item.path"
      :effect="$route.name == item.name ? 'dark' : 'plain'"
      :closable="item.name !== 'home'"
      @click="changeMenu(item)"
      @close="handleClose(item, index)"
      size="small"
    >
      {{ item.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "CommonTag",
  data() {
    return {};
  },
  computed: {
    ...mapState("tab", ["tabsList"]),
  },
  methods: {
    // 点击tag跳转
    changeMenu(item) {
      this.$router.push({ name: item.name });
    },
    ...mapMutations('tab', ['closeTag']),
    // 点击tag删除的功能
    handleClose(item, index) {
      // 调用store中的mutation
      this.closeTag(item)
      const length = this.tabsList.length;
      // 删除之后的跳转逻辑
      if (item.name !== this.$route.name) {
        return;
      }
      // 表示的是删除的最后一项
      if (index === length) {
        this.$router.push({
          name: this.tabsList[index - 1].name,
        });
      } else {
        this.$router.push({
          name: this.tabsList[index].name,
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.tabs {
    padding: 20px;
    .el-tag {
        margin-right: 15px;
        cursor: pointer;
    }
}
</style>