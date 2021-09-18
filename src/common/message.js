import { Modal } from 'ant-design-vue'

export default {
  SUCCESS: '成功',
  WARNING: '警告',
  FAIL: '失败',
  ERROR: '错误',
  SUBMIT: '提交',
  SAVE: '保存',
  ADD: '新增',
  BACK: '退回',
  REVOKE: '撤单',
  REOPEN: '重开',
  REMINDERS: '催单',
  SAVE_SUCCESS: '保存成功',
  SUBMIT_SUCCESS: '提交成功',
  DELETE_SUCCESS: '删除成功',
  UPDATE_SUCCESS: '更新成功',
  OK_TEXT: '确定',

  UNKNOW_USER_TYPE: '未知用户类型',
  UNKNOW_USER_ROLE: '未知用户角色',

  TEAMLEADER_SUCCESS: '转组长成功',
  WANTORDER_SUCCESS: '我要接单成功',
  ORDER_SUCCESS: '接单成功',

  SUBMIT_CONTENT: '确定提交？',
  SAVE_CONTENT: '确定保存？',
  BACK_CONTENT: '确定退回？',
  REOPEN_CONTENT: '确定重开',
  REMINDERS_CONTENT: '确定催单？',
  REVOKE_CONTENT: '确定撤单？',
  ADD_CONTENT: '确定新增？',

  SYSTEM_ERROR: '系统出现错误，请稍后再试',
  REQUEST_ERROR: '请求出现错误，请稍后再试',
  ROLE_ERROR: '当前角色已经切换，请关闭此页面后重新打开',
  ERR_408_MSG: '登录超时，请重新登录',
  ERR_401_MSG: '授权验证失败',
  ERR_403_MSG: '当前无权限',
  ERR_404_MSG: '当前资源不存在',
  ERR_500_MSG: '服务器错误，请稍后重试',
  UN_AUTH: '未授权',
  AUTH_FAILED: '授权验证失败',
  FORBIDDEN: '禁止访问',
  UN_SELECT: '请勾选数据',
  DECLINE_SUCCESS: '拒绝成功',
  APPROVE_SUCCESS: '审批成功',
  DELETE_OK: '删除',
  DELETE_CONFIRM: '确定删除吗？',
  DELETE_DATA: '确定删除数据吗？',
  UPDATE_OK: '编辑',

  RECEIVINGORDERS_OK: '接单',
  RECEIVINGORDERS_DATA: '确认接单吗？',

  RETURNOVERFLOW_OK: '退回',
  RETURNOVERFLOW_DATA: '确认退回吗？',
  RECEIVEOVERFLOW_OK: '接受',
  RECEIVEOVERFLOW_DATA: '确认接受吗？',
  REFUSEOVERFLOW_OK: '拒绝',
  REFUSEOVERFLOW_DATA: '确认拒绝吗？',
  WORKORDERTYPE_OK: '同意',
  WORKORDERTYPE_DATA: '确认同意吗？',

  TOMARKET_OK: '转市场',
  TOMARKET_DATA: '确定转市场吗？',

  ISNOTBACKTOIT_OK: '提醒',
  ISNOTBACKTOIT_DATA: '是否确认工单结案后，事件返回IT队列?',
  ISNOTBACKTOIT_MSG: '是否确定工单结案时，事件同时关闭?',

  HOLDING_OK: 'HOLD',
  HOLDING_DATA: '确认HOLD吗？',
  DISTRIBUTELEAFLETS_OK: '派单',
  DISTRIBUTELEAFLETS_DATA: '是否确认派单？',

  APPLYTOLEAVEWORK_OK: '下班',
  APPLYTOLEAVEWORK_DATA: '确认申请下班吗？',

  WORKORDERCLOSED_OK: '事件结案',
  WORKORDERCLOSED_DATA: '还有工单未关闭，是否确认结案？（确认结案后，工单将同时结案）',

  RECORDPROCESSED: '此记录已被处理！',
  EXCEEDMAXORDER: '已超过最大接单数,请先去处理！',
  PLEASESIGNINFIRST: '请先签到！',
  DATA_ERROE: '获取数据失败！',
  ASYNC_OK: '同步信息',
  ASYNC_DATA: '确认将信息同步到ACTIVITI？',
  HOLD_OK: 'HOLD更多',
  HOLD_DATA: '确认解除HOLD？',

  HOLD_SUCCESS: '解除HOLD',

  CHECKOUT_OK: '签出',
  CHECKOUT_DATA: '未提交创建班次报告，是否继续签出？',
  CHECKOUT_SIGNDATA: '班次报告未被确认，是否继续签出？',
  SCHEDULE: '排班',
  DISPOSE_OK: '处理',
  DISPOSE_DATA: '是否确定对该工单进行接单处理？',

  SUCCESS_MODAL_CLOSE: {
    title: '成功',
    content: '提交成功，点击确定后关闭！',
    okText: '确定',
    class: 'modal-success-close'
  },

  STATION_OK: '下发服务站',
  STATION_CONTENT: '确定下发服务站？',
  STATION_BTH_CONTENT: '确定批量下发服务站？',

  DELETE_MODAL_CONFIRM: {
    title: '删除',
    content: '确定删除吗？',
    autoFocusButton: 'cancel',
    okType: 'default',
    cancelButtonProps: {
      class: 'ant-btn-primary'
    }
  }
}
