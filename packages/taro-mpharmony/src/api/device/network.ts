import Taro from '@tarojs/api'

import { CallbackManager, MethodHandler } from '../../utils/handler'

function getConnection () {
  // @ts-ignore
  return navigator.connection || navigator.mozConnection || navigator.webkitConnection || navigator.msConnection
}

/**
 * 获取网络类型
 * 
 * @canUse getNetworkType
 * @__success [networkType[wifi, 2g, 3g, 4g, 5g, unknown, none]] 
 */
export const getNetworkType: typeof Taro.getNetworkType = (options = {}) => {
  const connection = getConnection()
  const { success, fail, complete } = options
  const handle = new MethodHandler<Taro.getNetworkType.SuccessCallbackResult>({
    name: 'getNetworkType',
    success,
    fail,
    complete,
  })

  let networkType: keyof Taro.getNetworkType.NetworkType = 'unknown'
  // 浏览器不支持获取网络状态
  if (!connection) {
    return handle.success({ networkType })
  }

  // Supports only the navigator.connection.type value which doesn't match the latest spec.
  // https://www.davidbcalhoun.com/2010/using-navigator-connection-android/
  if (!isNaN(Number(connection.type))) {
    switch (connection.type) {
      // @ts-ignore
      case connection.WIFI:
        networkType = 'wifi'
        break
      // @ts-ignore
      case connection.CELL_3G:
        networkType = '3g'
        break
      // @ts-ignore
      case connection.CELL_2G:
        networkType = '2g'
        break
      default:
        // ETHERNET, UNKNOWN
        networkType = 'unknown'
    }
  } else if (connection.type) {
    // @ts-ignore
    networkType = connection.type // Only supports the type value.
    // @ts-ignore
  } else if (connection.effectiveType) {
    // @ts-ignore
    networkType = connection.effectiveType
  }

  return handle.success({ networkType })
}

const networkStatusManager = new CallbackManager()

const networkStatusListener = async () => {
  const { networkType } = await getNetworkType()
  const isConnected = networkType !== 'none'
  const obj = { isConnected, networkType }
  networkStatusManager.trigger(obj)
}

/**
 * 在最近的八次网络请求中, 出现下列三个现象之一则判定弱网。
 * - 出现三次以上连接超时
 * - 出现三次 rtt 超过 400
 * - 出现三次以上的丢包
 * > 弱网事件通知规则是: 弱网状态变化时立即通知, 状态不变时 30s 内最多通知一次。
 * 
 * @canNotUse onNetworkWeakChange
 */
export { onNetworkWeakChange } from '@tarojs/taro-h5'

/**
 * 监听网络状态变化
 * 
 * @canUse onNetworkStatusChange
 * @__success [isConnected, networkType[wifi, 2g, 3g, 4g, 5g, unknown, none]]
 */
export const onNetworkStatusChange: typeof Taro.onNetworkStatusChange = (callback) => {
  networkStatusManager.add(callback)
  const connection = getConnection()
  if (connection && networkStatusManager.count() === 1) {
    connection.addEventListener('change', networkStatusListener)
  }
}

/**
 * 取消监听弱网状态变化事件
 * 
 * @canNotUse offNetworkWeakChange
 */
export { offNetworkWeakChange } from '@tarojs/taro-h5'

/**
 * 取消监听网络状态变化事件，参数为空，则取消所有的事件监听
 * 
 * @canUse offNetworkStatusChange
 */
export const offNetworkStatusChange: typeof Taro.offNetworkStatusChange = (callback) => {
  // 取消监听网络状态变化事件，参数为空，则取消所有的事件监听。
  if (callback) {
    networkStatusManager.remove(callback)
  } else {
    networkStatusManager.removeAll()
  }
  const connection = getConnection()
  if (connection && networkStatusManager.count() === 0) {
    connection.removeEventListener('change', networkStatusListener)
  }
}

/**
 * 获取局域网IP地址
 * 
 * @canNotUse getLocalIPAddress
 */
export { getLocalIPAddress } from '@tarojs/taro-h5'