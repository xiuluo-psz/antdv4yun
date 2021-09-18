export default {
  // 系统名称
  APP_NAME: 'ITSM3.0',
  // 系统版本
  APP_VERSION: 'v1.0.0',
  // 安全认证
  ACCESS_TOKEN: 'Access-Token',
  ACTIVITI_TOKEN: 'Activiti-Token',
  // 用户信息
  USER_INFO: 'UserInfo',
  // 用户名
  LOGIN_NAME: 'Username',
  // 用户ID
  USER_ID: 'UserId',
  // 用户角色ID
  ROLE_ID: 'RoleId',
  // 历史事件 显示列
  HISCASE_COLS: 'HisCaseCols',
  // 历史事件 显示列
  HISCASE_COLSED: 'HisCaseColsed',
  // 历史工单 显示列
  HISCASE_ORDER: 'HisCaseOrder',
  // 历史工单 显示列
  HISCASE_ORDERED: 'HisCaseOrdered',
  // 历史工单(工单管理) 显示列
  MANAGEHISCASE_ORDER: 'ManageCaseOrder',
  // 历史工单(工单管理) 显示列
  MANAGEHISCASE_ORDERED: 'ManageCaseOrdered',
  // 用户类型（1 : 餐厅人员， 2 : I T 用户， 3 : 服务商用户，4：Office）
  USER_TYPE_1: '1',
  USER_TYPE_2: '2',
  USER_TYPE_3: '3',
  USER_TYPE_4: '4',

  // IT用户级别（1 : L1， 2 : L2， 3 : L3）
  LEVEL_1: '1',
  LEVEL_2: '2',
  LEVEL_3: '3',

  // 角色级别
  L1: 'L1',
  L2: 'L2',
  L3: 'L3',
  LE: 'LE',

  // 角色类型
  ROLE_SOC_L1: 'SOC_L1', // SOC L1
  ROLE_SOC_LEADER: 'SOC_LEADER', // SOC 组长
  ROLE_SOC_MA: 'SOC_MA', // SOC 主管
  ROLE_MARKET_L2: 'MARKET_L2', // 市场L2
  ROLE_MARKET_VM: 'MARKET_VM', // 市场VM
  ROLE_STORE: 'STORE', // 餐厅
  ROLE_OFFICE: 'OFFICE', // Office
  ROLE_OFFICE_L1: 'OFFICE_L1', // OfficeL1
  ROLE_OFFICE_L2: 'OFFICE_L2', // OfficeL2
  ROLE_VENDER: 'VENDER', // 服务商
  ROLE_VENDER_PM: 'VENDER_PM', // 服务商PM
  ROLE_VENDER_PA: 'VENDER_PA', // 服务商PM
  ROLE_SOC_L2: 'SOC_L2', // SOC L2
  ROLE_NHD_VM: 'NHD_VM', // NHD VM
  ROLE_NHD_L2: 'NHD_L2', // NHD L2
  ROLE_ADMIN: 'ADMIN',
  ROLE_MARKET_MA: 'MARKET_MA', // 市场主管
  ROLE_NHD_MA: 'NHD_MA', // NHD主管
  ROLE_L3: 'L3', // L3
  // 当前餐厅编码
  CURRENT_STORE_CODE: 'CurrentStoreCode',
  // 当前餐厅编码 Model
  CURRENT_STORE_CODE_Model: 'CurrentStoreCodeModel',
  // 用户餐厅编码 List
  CURRENT_STORE_CODE_List: 'CurrentStoreCodeList',
  // 文件上传tip
  FILE_TIP: '点击Fn截屏',
  // 文件上传限制
  FILE_ACCEPT: 'image/*,.docx,.xlsx,.pptx,.xls',
  FILE_ACCEPT_MSG: '文件类型不匹配！',
  FILE_MAX_COUNT: 10,
  FILE_MAX_COUNT_MSG: '文件数量不能超过 10',
  FILE_MAX_SIZE: 5,
  FILE_MAX_SIZE_MSG: '文件大小不能超过 5M',

  USER_L1: 'l1',
  USER_L2: 'l2',
  USER_L: 'leader',
  USER_S: 'store',
  USER_A: 'admin',

  // 手动解除HOLD
  ISSSUE_AUTO_TASK_FLAG_N: 'N',

  // 工作时间段
  WORKER_TIME: [9, 18],
  WORKER_NO_TIME: [1, 6],

  // 详情popup
  // CASE_PROCESS_CSS: 'dialogheight:800px;dialogwidth:1600px;status:no;toolbar:no;menubar:no;scrollbars:no;resizable:no',
  CASE_PROCESS_CSS: '',

  // 工程师详情popup
  // V_ENGINEER_DETAIL_CSS: 'dialogheight:800px;dialogwidth:1000px;status:no;toolbar:no;menubar:no;scrollbars:no;resizable:yes',
  V_ENGINEER_DETAIL_CSS: '',

  // 指标定时刷新(15分钟)
  INDICATORS: 900000,

  // 指标定时刷新(5分钟)
  ORDERPOOL: 300000,

  // 接单池定时刷新(1分钟)
  HOLDPOOL: 60000,

  // 自动派单定时刷新(1分钟)
  AUTOMONITOR: 60000,

  // L1 自动停单（10分钟）
  TIMER_AUTO_STOP: 600000,

  // L1 自动停单限制（30分钟）
  TIME_AUTO_STOP: 30,

  // 自动停单原因
  AUTO_STOP_MSG: '半小时没有处理案件自动停单',

  // 接单情况 true：接单，false 停单
  ORDERS_RECEIVED: 'ordersReceived',

  // 案件操作时间
  ORDERS_OPT_TIME: 'ordersOptTime',

  // 餐厅端滚动公告定时刷新（10分钟）
  TIMER_STORE_NOTICE: 600000,

  // office L1 L2区别标识
  OFFICE_L1: 'OL1',
  OFFICE_L2: 'OL2',
  CONFIRM_PERSON: 20,
  REMARK_LEN: 100, // 备注长度限制
  REASON_LEN: 100 // 原因长度限制
}
