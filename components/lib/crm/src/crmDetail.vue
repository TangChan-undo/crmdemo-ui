<template>
  <section class="detail-card">
    <div class="detail-head" @click="toggleCard">
      <!-- 根据状态显示不同的图标 -->
      <i :class="iconClass" style="font-weight: 700"></i>
      {{ detailTitle }}
    </div>
    <el-card v-show="isCardVisible">
      <el-row>
        <el-col
          :span="getColSpan(item)"
          v-for="(item, index) in detailItems"
          :key="index"
        >
          <template v-if="item.type == 'text'">
            <div class="detail-item">
              <label class="item-label">{{ item.label }}</label>
              <div class="item-value">
                {{ item.value }}
              </div>
            </div>
          </template>
          <template v-else>
            <div class="detail-item fullwidth">
              <label class="item-label">{{ item.label }}：</label>
              <div class="item-value">
                <div
                  v-for="(item_son, index) in item.value"
                  :key="index"
                  class="item_son"
                >
                  <label class="item_sonLabel">{{ item_son.label }}</label>
                  <div class="item_sonValue">{{ item_son.value }}</div>
                </div>
              </div>
            </div>
          </template>
        </el-col>
      </el-row>
    </el-card>
  </section>
</template>

<script>
export default {
  name: "crmDetail",
  props: {
    detailTitle: {
      type: String,
      default: "基本信息",
    },
    detailItems: Array,
  },
  data() {
    return {
      isCardVisible: true,
    };
  },
  computed: {
    iconClass() {
      return this.isCardVisible ? "el-icon-arrow-down" : "el-icon-arrow-right";
    },
  },
  methods: {
    toggleCard() {
      this.isCardVisible = !this.isCardVisible;
    },
    getColSpan(item) {
      return item.type === "text" ? 12 : 24;
    },
  },
};
</script>

<style lang="scss" scoped></style>
