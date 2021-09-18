import { notification } from 'ant-design-vue'
import message from '../common/message'

const notify = {

  success(title, msg) {
    notification.success({
      message: title,
      description: msg
    })
  },

  save_success() {
    notification.success({
      message: message.SUCCESS,
      description: message.SAVE_SUCCESS
    })
  },

  submit_success() {
    notification.success({
      message: message.SUCCESS,
      description: message.SUBMIT_SUCCESS
    })
  },

  del_success() {
    notification.success({
      message: message.SUCCESS,
      description: message.DELETE_SUCCESS
    })
  },

  update_success() {
    notification.success({
      message: message.SUCCESS,
      description: message.UPDATE_SUCCESS
    })
  },

  // 我要接单成功
  wantorder_success() {
    notification.success({
      message: message.SUCCESS,
      description: message.WANTORDER_SUCCESS
    })
  },

  // 接单成功
  order_success() {
    notification.success({
      message: message.SUCCESS,
      description: message.ORDER_SUCCESS
    })
  },

  // 转组长成功
  teamleader_success() {
    notification.success({
      message: message.SUCCESS,
      description: message.TEAMLEADER_SUCCESS
    })
  },

  info(title, msg) {
    notification.info({
      message: title,
      description: msg
    })
  },

  warning(title, msg) {
    notification.warning({
      message: title,
      description: msg
    })
  },
  warning_message(msg) {
    notification.warning({
      message: message.WARNING,
      description: msg
    })
  },
  warning_unselect() {
    notification.warning({
      message: message.WARNING,
      description: message.UN_SELECT
    })
  },

  error(title, msg) {
    notification.error({
      message: title,
      description: msg
    })
  },

  error_message(msg) {
    notification.error({
      message: message.ERROR,
      description: msg
    })
  },

  system_error() {
    notification.error({
      message: message.ERROR,
      description: message.SYSTEM_ERROR
    })
  },

  request_error() {
    notification.error({
      message: message.ERROR,
      description: message.REQUEST_ERROR
    })
  },

  auth_error() {
    notification.error({
      message: message.ERROR,
      description: message.ERR_401_MSG
    })
  },

  timeout() {
    notification.error({
      message: message.WARNING,
      description: message.ERR_408_MSG
    })
  },

  serve_error() {
    notification.error({
      message: message.ERROR,
      description: message.ERR_500_MSG
    })
  },

  submit_warning(title, msg) {
    notification.warning({
      message: title,
      description: msg
    })
  },

  approve_success() {
    notification.success({
      message: message.SUCCESS,
      description: message.APPROVE_SUCCESS
    })
  },

  decline_success() {
    notification.success({
      message: message.SUCCESS,
      description: message.DECLINE_SUCCESS
    })
  },
  role_error() {
    notification.error({
      message: message.ERROR,
      description: message.ROLE_ERROR
    })
  },

}

export {
  notify
}
