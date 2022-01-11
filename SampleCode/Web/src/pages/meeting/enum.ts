export enum memberAction {
  muteAudio = 51,
  unmuteAudio = 56,
  muteVideo = 50,
  unmuteVideo = 55,
  muteScreen = 52,
  unmuteScreen = 57,
  handsUp = 58,
  handsDown = 59,
  openWhiteShare = 60,
  closeWhiteShare = 61,
  shareWhiteShare = 62,
  cancelShareWhiteShare = 63,
  hangUp = 32,
  cancelHangUp = 33,
}

export enum hostAction {
  remove = 0,
  muteMemberVideo = 10,
  muteMemberAudio = 11,
  muteAllAudio = 12,
  lockMeeting = 13,
  unmuteMemberVideo = 15,
  unmuteMemberAudio = 16,
  unmuteAllAudio = 17,
  unlockMeeting = 18,
  transferHost = 22,
  setFocus = 30,
  unsetFocus = 31,
  forceMuteAllAudio = 40,
  // agreeHandsUp = 41,
  rejectHandsUp = 42,
  openWhiteShare = 60,
  closeWhiteShare = 61,
}

export enum NEMeetingIdDisplayOptions {
  displayAll, // 默认
  displayLongId, // 只展示长号
  displayShortId, // 只展示短号
}

export enum NEMeetingClientType { // 设备类型
  TV = 1,
  iOS = 2,
  AOS = 3,
  Windows = 4,
  MAC = 5,
  web = 6,
  sip = 7,
}

export enum NEMenuIDs { // 菜单项ID
  mic = 0,
  camera = 1,
  screenShare = 2,
  participants = 3,
  manageParticipants = 4,
  gallery = 5,
  invite = 20,
  chat = 21,
  whiteBoard = 22,
}

export enum SingleMeunIds { // 单状态按钮
  participants = 3,
  manageParticipants = 4,
  invite = 20,
  chat = 21,
}

export enum MutipleMenuIds { // 多状态按钮
  mic = 0,
  camera = 1,
  screenShare = 2,
  gallery = 5,
  whiteBoard = 22,
}

export enum NEMenuVisibility {
  VISIBLE_ALWAYS = 0, // 默认总是可见
  VISIBLE_EXCLUDE_HOST = 1, // 仅主持人可见
  VISIBLE_TO_HOST_ONLY = 2, // 非主持人可见
}

export const defaultMenus = [
  // 默认主区
  { id: NEMenuIDs.mic },
  { id: NEMenuIDs.camera },
  { id: NEMenuIDs.screenShare },
  { id: NEMenuIDs.whiteBoard },
  { id: NEMenuIDs.participants },
  { id: NEMenuIDs.gallery },
];

export const defaultMoreMenus = [
  // 默认更多区域
  { id: NEMenuIDs.invite },
];

export enum windowModes {
  normal = 1, // 常规模式
  whiteBoard = 2, // 白板模式
}
export enum shareMode {
  noshare = 0,
  screen = 1,
  whiteboard = 2,
  mixedModel = 3,
}

export const networkQuality: any = {
  '0': '未知',
  '1': '极好',
  '2': '好',
  '3': '良',
  '4': '中',
  '5': '差',
};

export function errorCodes() {
  return {
    '300': '非法的参数',
    '301': '参数为空',
    '302': '非法header',
    '303': '非法字符集参数',
    '401': '请求未通过验证',
    '501': '服务器内部异常',
    '510': '请求过于频繁',
    '513': '组件SDK版本不兼容，请升级最新组件版本',
    '652': '直播设置错误',
    '701': '匿名帐号分配失败，稍后重试',
    '1000': '分配帐号失败',
    '1003': '手机号已被注册',
    '1004': '该手机号未注册',
    '1005': '登录验证失效,请重新登录',
    '1006': '验证码错误，请重新输入',
    '1007': '密码错误，请重新输入',
    '1008': '原密码错误，请重新输入',
    '1009': 'TV帐号不存在',
    '1010': '请输入正确的手机号',
    '1011': '获取验证码次数超过限制',
    '1012': '验证码失效，请重新获取',
    '1013': 'IM帐号已下线',
    '1014': '帐号不存在',
    '1015': '验证码获取频繁，请稍后再试',
    '1016': '注册超时，请重新操作',
    '1017': '更改密码超时，请重新操作',
    '1019': '会议帐号已被创建',
    '1021': 'IM未绑定',
    '2000': '该会议不存在',
    '2001': '会议已达人数上限',
    '2002': '该会议已在进行中',
    '2003': '昵称格式不正确',
    '2004': '成员视频状态错误',
    '2005': '成员音频状态错误',
    '2007': '该用户未拥有会议码',
    '2009': '已达屏幕共享人数上限',
    '2010': '会议被锁定',
    '2011': '会议id已被占用',
    '2012': '会议直播配置不存在',
    '2014': '会议密码错误',
    '2015': '同一帐号并发入会错误',
    '2017': '会议主题格式错误',
    '2018': '请输入会议密码',
    '2021': '会议已结束',
    '2022': '个人会议号未设置',
    '2023': '非法会议类型',
    '2024': '会议已存在',
    '2025': '会议信息不能被修改',
    '2035': '当前会议该角色已达人数上限',
    '2100': '没有主持人权限',
    '2101': '该成员未在会议中',
    '2102': '会控码错误',
    '2103': '已被主持人关闭画面，无法自行打开',
    '2104': '该成员连接不稳定，请稍后再试',
    '2105': '没有权限',
    '2106': '该成员没有举手',
    '2107': '该成员不能举手',
    '2108': '成员无权限打开音频',
    '2109': '举手业务类型枚举错误',
    '2110': '主持人或者成员自由发言状态下，无需操作举手业务',
    '2111': '成员音频已打开，无需申请举手',
    '2200': '会议不在进行中',
    '3001': '客户端类型错误',
    '3003': '功能不支持',
    '4000': '企业会议服务已到期',
    '4001': '该应用已达并发上限',
    // 自定义
    '10001': '关闭密码输入弹窗',
  };
}
