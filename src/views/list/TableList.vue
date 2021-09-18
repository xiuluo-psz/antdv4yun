<template>
  <div>
    <a-card>
      <div>dddd</div>
      <!-- 按钮 -->
      <div>
        <a-row>
          <a-col span="24">
            <a-button
              v-for="(item, index) in stuBtnList"
              :key="index"
              :class="[{ 'num-btn-selected': bIdx === index, 'num-btn-ml15': index }]"
              type="primary"
              class="num-btn"
              @click="showTable(item)"
            >
              {{ item.name }}
              <span class="color-theme">{{ `(${item.num})` }}</span>
            </a-button>
          </a-col>
        </a-row>
      </div>
      <!-- 表格 -->
      <div class="ant-table-wrapper mt-10" v-show="bIdx === 0">
        <c-table
          id="procPool"
          bordered
          row-key="issueId"
          ref="procPool"
          :columns="procPoolColumns"
          :data-load="procPoolData"
          :scroll="{ x: 1610 }"
        >
        </c-table>
      </div>

      <div class="ant-table-wrapper mt-10" v-show="bIdx === 1">
        <c-table
          id="handPool"
          bordered
          row-key="issueId"
          ref="handPool"
          :columns="handPoolColumns"
          :data-load="handPoolData"
          :scroll="{ x: 1610 }"
        >
        </c-table>
      </div>

      <div class="ant-table-wrapper mt-10" v-show="bIdx === 2">
        <c-table
          id="closePool"
          bordered
          row-key="issueId"
          ref="closePool"
          :columns="closePoolColumns"
          :data-load="closePoolData"
          :scroll="{ x: 1610 }"
        >
        </c-table>
      </div>
    </a-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { CTable } from '@/components'

export default {
  name: 'Pool',
  components: {
    CTable
  },
  data() {
    const stuBtnList = [
      { index: 0, num: 0, name: '处理中', ref: 'procPool' },
      { index: 1, num: 0, name: '经手案件', ref: 'handPool' },
      { index: 2, num: 0, name: '已结案', ref: 'closePool' }
    ]
    const procPoolColumns = [
      // {
      //   dataIndex: 'specialCode',
      //   title: '',
      //   align: 'center',
      //   width: 70,
      //   scopedSlots: { customRender: 'specialCode' }
      // },
      {
        dataIndex: 'issueId',
        title: '案件编号',
        width: 230,
        scopedSlots: { customRender: 'issueId' }
      },
      {
        dataIndex: 'market',
        title: '市场',
        width: 100
      },
      {
        dataIndex: 'officeName',
        title: '办公室',
        width: 100
      },
      {
        dataIndex: 'department',
        title: '部门',
        width: 120
      },
      {
        dataIndex: 'reportName',
        title: '报修人',
        width: 330
      },
      {
        dataIndex: 'sourceUser',
        title: '故障用户',
        width: 330
      },
      {
        dataIndex: 'vipFlag',
        title: 'VIP',
        scopedSlots: { customRender: 'vipFlag' },
        width: 50
      },
      {
        dataIndex: 'issueTypeL1',
        title: '报修分类',
        width: 150
      },
      {
        dataIndex: 'issueContent',
        title: '故障描述',
        width: 170
      },
      {
        dataIndex: 'status',
        title: '案件状态',
        width: 150
      },
      {
        dataIndex: 'reportTime',
        title: '报修时间',
        width: 200,
        scopedSlots: { customRender: 'reportTime' }
      },
      {
        dataIndex: 'responseTime',
        title: '响应时长',
        width: 100,
        scopedSlots: { customRender: 'responseTime' }
      },
      {
        dataIndex: 'dealTime',
        title: '处理时长',
        width: 100,
        scopedSlots: { customRender: 'dealTime' }
      },
      {
        dataIndex: 'action',
        title: '操作',
        align: 'center',
        width: 100,
        fixed: 'right',
        scopedSlots: { customRender: 'action' }
      }
    ]
    const handPoolColumns = [
      // {
      //   dataIndex: 'specialCode',
      //   title: '',
      //   align: 'center',
      //   width: 60,
      //   scopedSlots: { customRender: 'specialCode' }
      // },
      {
        dataIndex: 'issueId',
        title: '案件编号',
        width: 165,
        scopedSlots: { customRender: 'issueId' }
      },
      {
        dataIndex: 'market',
        title: '市场',
        width: 100
      },
      {
        dataIndex: 'officeName',
        title: '办公室',
        width: 100
      },
      {
        dataIndex: 'department',
        title: '部门',
        width: 120
      },
      {
        dataIndex: 'reportName',
        title: '报修人',
        width: 330
      },
      {
        dataIndex: 'sourceUser',
        title: '故障用户',
        width: 330
      },
      {
        dataIndex: 'vipFlag',
        title: 'VIP',
        scopedSlots: { customRender: 'vipFlag' },
        width: 50
      },
      {
        dataIndex: 'issueTypeL1',
        title: '报修分类',
        width: 150
      },
      {
        dataIndex: 'issueContent',
        title: '故障描述',
        width: 170
      },
      {
        dataIndex: 'status',
        title: '案件状态',
        width: 150
      },
      {
        dataIndex: 'reportTime',
        title: '报修时间',
        width: 200,
        scopedSlots: { customRender: 'reportTime' }
      },
      {
        dataIndex: 'lastDealUser',
        title: '最后处理人',
        width: 200
      },
      {
        dataIndex: 'responseTime',
        title: '响应时长',
        width: 100,
        scopedSlots: { customRender: 'responseTime' }
      },
      {
        dataIndex: 'dealTime',
        title: '处理时长',
        width: 100,
        scopedSlots: { customRender: 'dealTime' }
      },
      {
        dataIndex: 'action',
        title: '操作',
        align: 'center',
        width: 100,
        fixed: 'right',
        scopedSlots: { customRender: 'action' }
      }
    ]
    const closePoolColumns = [
      // {
      //   dataIndex: 'specialCode',
      //   title: '',
      //   align: 'center',
      //   width: 60,
      //   scopedSlots: { customRender: 'specialCode' }
      // },
      {
        dataIndex: 'issueId',
        title: '案件编号',
        width: 165,
        scopedSlots: { customRender: 'issueId' }
      },
      {
        dataIndex: 'market',
        title: '市场',
        width: 100
      },
      {
        dataIndex: 'officeName',
        title: '办公室',
        width: 100,
        scopedSlots: { customRender: 'officeName' }
      },
      {
        dataIndex: 'department',
        title: '部门',
        width: 120
      },
      {
        dataIndex: 'reportName',
        title: '报修人',
        width: 330
      },
      {
        dataIndex: 'sourceUser',
        title: '故障用户',
        width: 330
      },
      {
        dataIndex: 'vipFlag',
        title: 'VIP',
        scopedSlots: { customRender: 'vipFlag' },
        width: 50
      },
      {
        dataIndex: 'issueTypeL1',
        title: '报修分类',
        scopedSlots: { customRender: 'issueTypeL1' },
        width: 150
      },
      {
        dataIndex: 'issueContent',
        title: '故障描述',
        width: 170
      },
      {
        dataIndex: 'status',
        title: '案件状态',
        width: 150
      },
      {
        dataIndex: 'finishType',
        title: '结案类型',
        width: 150
      },
      {
        dataIndex: 'reportTime',
        title: '报修时间',
        width: 200,
        scopedSlots: { customRender: 'reportTime' }
      },
      {
        dataIndex: 'finishTime',
        title: '结案时间',
        width: 200,
        scopedSlots: { customRender: 'finishTime' }
      },
      {
        dataIndex: 'responseTime',
        title: '响应时长',
        width: 100,
        scopedSlots: { customRender: 'responseTime' }
      },
      {
        dataIndex: 'dealTime',
        title: '处理时长',
        width: 100,
        scopedSlots: { customRender: 'dealTime' }
      }
    ]
    return {
      stuBtnList,
      procPoolColumns,
      handPoolColumns,
      closePoolColumns,
      willOrder: false,
      showAnnex: false, // 添加备注显示隐藏标识
      bIdx: 0,
      annexForm: {
        officeCode: '',
        issueId: '',
        appendContent: ''
      },
      rules: {
        appendContent: [{ required: true, message: '请输入备注', trigger: 'change' }]
      }
    }
  },
  mounted() {
    this.updateNum(this.bIdx)
  },
  methods: {
    ...mapActions(['loading']),
    showTable(item) {
      this.bIdx = item.index
      this.$nextTick(this.$refs[item.ref].load)
    },
    // 处理中
    procPoolData(params) {
      const aa = {
        totalCount: 10,
        pageSize: 10,
        totalPage: 1,
        pageNo: 1,
        data: [
          {
            currentLevelName: '01',
            lastDealUser: '10031426',
            specialCode: '0439',
            assetId: '黄金万两',
            startDate: '2021-09-13 16:18:03',
            place: '大连',
            officeName: '黄牛',
            department: 'YES',
            reportName: '矿老板',
            assetdate: '2021-09-13 16:18:04',
            assetFlag: 'ddd失败',
            assetTypeL1: 'JS大胜利',
            assetContent: null,
            status: 'NO',
            reportTime: '---',
            responseTime: '查是不可能查的',
            dealTime: 'JS黄牛胜利',
            action: null
            // specialCode: 9,
            // specialName: '重开',
            // assetId: 'XANF112109007S',
            // market: '西安IT市场',
            // department: '测试部门',
            // officeName: '测试办公室',
            // reportName: '测试办公室-测试部门-office用户(9000515)',
            // sourceUser: '测试办公室-测试部门-office用户(9000515)',
            // vipFlag: '1',
            // issueTypeL1: '测试报修 1',
            // issueContent: 'yyg报修测试',
            // status: '处理中IT待接单',
            // reportTime: '2021-09-13 16:18:03',
            // enterPoolTime: '2021-09-13 16:18:03',
            // responseTime: '-',
            // dealTime: '76',
            // lastDealUser: null,
            // finishTime: null,
            // finishType: null,
            // officeCode: '011',
            // currentLevelName: 'Office L1',
            // issueSource: 'Office报修',
            // statusCode: null,
            // pageNo: null,
            // pageSize: null
          }
        ]
      }
      const pp = new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('woc')
          resolve(aa)
        }, 1000)
      })
      return pp
    },
    // 经手案件
    handPoolData(params) {
      const aa = {
        totalCount: 10,
        pageSize: 10,
        totalPage: 1,
        pageNo: 1,
        data: [
          {
            currentLevelName: '01',
            lastDealUser: '10031426',
            specialCode: '0439',
            assetId: '黄金万两',
            startDate: '2021-09-13 16:18:03',
            place: '大连',
            officeName: '黄牛',
            department: 'YES',
            reportName: '矿老板',
            assetdate: '2021-09-13 16:18:04',
            assetFlag: 'ddd失败',
            assetTypeL1: 'JS大胜利',
            assetContent: null,
            status: 'NO',
            reportTime: '---',
            responseTime: '查是不可能查的',
            dealTime: 'JS黄牛胜利',
            action: null
            // specialCode: 9,
            // specialName: '重开',
            // assetId: 'XANF112109007S',
            // market: '西安IT市场',
            // department: '测试部门',
            // officeName: '测试办公室',
            // reportName: '测试办公室-测试部门-office用户(9000515)',
            // sourceUser: '测试办公室-测试部门-office用户(9000515)',
            // vipFlag: '1',
            // issueTypeL1: '测试报修 1',
            // issueContent: 'yyg报修测试',
            // status: '处理中IT待接单',
            // reportTime: '2021-09-13 16:18:03',
            // enterPoolTime: '2021-09-13 16:18:03',
            // responseTime: '-',
            // dealTime: '76',
            // lastDealUser: null,
            // finishTime: null,
            // finishType: null,
            // officeCode: '011',
            // currentLevelName: 'Office L1',
            // issueSource: 'Office报修',
            // statusCode: null,
            // pageNo: null,
            // pageSize: null
          }
        ]
      }
      const pp = new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('woc')
          resolve(aa)
        }, 1000)
      })
      return pp
    },
    // 已结案
    closePoolData(params) {
      const aa = {
        totalCount: 10,
        pageSize: 10,
        totalPage: 1,
        pageNo: 1,
        data: [
          {
            currentLevelName: '01',
            lastDealUser: '10031426',
            specialCode: '0439',
            assetId: '黄金万两',
            startDate: '2021-09-13 16:18:03',
            place: '大连',
            officeName: '黄牛',
            department: 'YES',
            reportName: '矿老板',
            assetdate: '2021-09-13 16:18:04',
            assetFlag: 'ddd失败',
            assetTypeL1: 'JS大胜利',
            assetContent: null,
            status: 'NO',
            reportTime: '---',
            responseTime: '查是不可能查的',
            dealTime: 'JS黄牛胜利',
            action: null
            // specialCode: 9,
            // specialName: '重开',
            // assetId: 'XANF112109007S',
            // market: '西安IT市场',
            // department: '测试部门',
            // officeName: '测试办公室',
            // reportName: '测试办公室-测试部门-office用户(9000515)',
            // sourceUser: '测试办公室-测试部门-office用户(9000515)',
            // vipFlag: '1',
            // issueTypeL1: '测试报修 1',
            // issueContent: 'yyg报修测试',
            // status: '处理中IT待接单',
            // reportTime: '2021-09-13 16:18:03',
            // enterPoolTime: '2021-09-13 16:18:03',
            // responseTime: '-',
            // dealTime: '76',
            // lastDealUser: null,
            // finishTime: null,
            // finishType: null,
            // officeCode: '011',
            // currentLevelName: 'Office L1',
            // issueSource: 'Office报修',
            // statusCode: null,
            // pageNo: null,
            // pageSize: null
          }
        ]
      }
      const pp = new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('woc')
          resolve(aa)
        }, 1000)
      })
      return pp
    },
    // 处理
    deal(data, cb) {
      this.routeTo(data, true)
    },
    // 经手案件的添加备注显示，并赋值issueId
    remark(data, cb) {
      this.showAnnex = true
      this.annexForm.issueId = data.issueId
      this.annexForm.officeCode = data.officeCode
    },
    // 添加备注取消
    annexCancel() {
      this.showAnnex = false
      this.$refs.annexForm.resetFields()
      this.$refs.annexUpload && this.$refs.annexUpload.clear()
    },
    // 路由跳转
    routeTo(data, linktype = false) {
      // 跳转到案件详情
      // const routeBlank = this.$router.resolve({
      //   path: routerUrl.O_REPAIR_DETAILS,
      //   query: { issueId: data.issueId, linktype, olv: constant.OFFICE_L2 }
      // })
      // const w = window.open(routeBlank.href, '_blank', constant.CASE_PROCESS_CSS)
      // this.$store.dispatch('closeOpenedWindow', { key: data.issueId, window: w })
      // w.onbeforeunload = () => {
      //   this.updateNum(this.bIdx)
      // }
    },
    // 更新案件值
    updateNum(index) {
      const pageQuery = { pageSize: 1, pageNo: 1 }
      index === 0 ? this.$refs['procPool'].load() : this.procPoolData(pageQuery)
      index === 1 ? this.$refs['handPool'].load() : this.handPoolData(pageQuery)
      index === 2 ? this.$refs['closePool'].load() : this.closePoolData(pageQuery)
    }
  }
}
</script>

<style scoped></style>
