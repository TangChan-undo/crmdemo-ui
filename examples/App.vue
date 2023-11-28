<template>
  <div id="app">
    <crm-detail :detail-items="items" :detail-title="title"> </crm-detail>
    <el-table
      v-myscroll
      :border="false"
      :data="dataList.slice(start, over)"
      height="300"
    >
      <el-table-column align="center" label="序号" width="55">
        <template #default="{ $index }">
          {{ $index + 1 }}
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="曲线编号"
        prop="trendid"
        show-overflow-tooltip
      />
      <el-table-column
        align="center"
        label="运行状态"
        prop="eventstatus"
        show-overflow-tooltip
      />
      <el-table-column
        align="center"
        label="执行步数"
        prop="stp"
        show-overflow-tooltip
      />
      <el-table-column
        align="center"
        label="温度测量值"
        prop="pv"
        show-overflow-tooltip
      />
      <el-table-column
        align="center"
        label="温度设定值"
        prop="sv"
        show-overflow-tooltip
      />
      <el-table-column
        align="center"
        label="当前压力值"
        prop="ppv"
        show-overflow-tooltip
      />
      <el-table-column
        align="center"
        label="设定压力值"
        prop="psv"
        show-overflow-tooltip
      />
    </el-table>
  </div>
</template>

<script>
import { myArray1 } from "./detailData.js";
export default {
  name: "App",
  components: {},
  data() {
    return {
      title: "基本信息",
      dataList: [],
      items: [
        {
          label: "客户名称",
          value: "广州佛山同圣科技软件有限公司",
          type: "text",
        },
        { label: "客户来源", value: "线上注册", type: "text" },
        { label: "手机", value: "18703850038 ", type: "text" },
        { label: "电话", value: "68873988", type: "text" },
        { label: "邮箱", value: "jiaxun000@gmail.com", type: "text" },
        { label: "网址", value: "https://www.28kcrm.com/base ", type: "text" },
        { label: "客户行业", value: "IT", type: "text" },
        { label: "客户级别", value: "C（非优先客户） ", type: "text" },
        {
          label: "地区定位",
          value: [
            {
              label: "定位",
            },
            {
              label: "区域",
              value: "河南省,郑州市,上街区",
            },
            {
              label: "详细地址",
              value: "河南省郑州市上街区淮阳路南段23号院",
            },
          ],
          type: "local",
        },
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      this.getData();
    }, 1000);
  },
  methods: {
    getData() {
      const {
        data: { rows },
      } = myArray1;
      this.dataList = rows;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #172b4d !important;
}
</style>
