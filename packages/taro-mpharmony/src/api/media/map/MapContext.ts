import Taro from '@tarojs/taro'

/**
 * MapContext 实例
 * 
 * @canUse MapContext
 * @__class 
 * [getCenterLocation, setLocMarkerIcon, translateMarker, moveAlong, includePoints, getRegion, getRotate, getSkew, getScale, setCenterOffset,\
 * addGroundOverlay, setBoundary, updateGroundOverlay, removeGroundOverlay, addMarkers, removeMarkers]
 */

export class MapContext implements Taro.MapContext {
  Map: any

  constructor (Map) {
    this.Map = Map
  }

  getCenterLocation (
    _option?: Taro.MapContext.GetCenterLocationOption | undefined
  ): Promise<Taro.MapContext.GetCenterLocationSuccessCallbackResult> {
    try {
      const centerLocation = this.Map._getCenterLocation(_option) // 调用地图组件的方法获取中心位置
      const successResult: Taro.MapContext.GetCenterLocationSuccessCallbackResult = {
        latitude: centerLocation[1],
        longitude: centerLocation[0],
        errMsg: 'getCenterLocation:ok',
      }

      _option?.success?.(successResult)
      _option?.complete?.({ errMsg: 'getCenterLocation:ok' })

      return Promise.resolve(successResult)
    } catch (e) {
      const errorResult: TaroGeneral.CallbackResult = { errMsg: `getCenterLocation:${e}` }
      _option?.fail?.(errorResult)
      _option?.complete?.({ errMsg: 'getCenterLocation:ok' })

      return Promise.reject(errorResult)
    }
  }

  setLocMarkerIcon (_option?: Taro.MapContext.SetLocMarkerIconOption | undefined): Promise<TaroGeneral.CallbackResult> {
    try {
      this.Map._setLocMarkerIcon(_option)
      const successResult: TaroGeneral.CallbackResult = {
        errMsg: 'setLocMarkerIcon:ok',
      }
      _option?.success?.({ errMsg: 'setLocMarkerIcon:ok' })
      _option?.complete?.({ errMsg: 'setLocMarkerIcon:ok' })

      return Promise.resolve(successResult)
    } catch (e) {
      const errorResult: TaroGeneral.CallbackResult = { errMsg: `setLocMarkerIcon:${e}` }
      _option?.fail?.(errorResult)
      _option?.complete?.({ errMsg: 'setLocMarkerIcon:ok' })

      return Promise.reject(errorResult)
    }
  }

  moveToLocation (_option: Taro.MapContext.MoveToLocationOption): Promise<TaroGeneral.CallbackResult> {
    const errorResult: TaroGeneral.CallbackResult = { errMsg: `moveToLocation接口未支持` }
    return Promise.reject(errorResult)
  }

  translateMarker (_option: Taro.MapContext.TranslateMarkerOption): Promise<TaroGeneral.CallbackResult> {
    try {
      this.Map._translateMarker(_option)
      const successResult: TaroGeneral.CallbackResult = {
        errMsg: 'translateMarker:ok',
      }
      const animationEndResult: any = {
        errMsg: 'animationEnd:ok',
      }
      _option?.animationEnd?.(animationEndResult)
      _option?.success?.({ errMsg: 'translateMarker:ok' })
      _option?.complete?.({ errMsg: 'translateMarker:ok' })

      return Promise.resolve(successResult)
    } catch (e) {
      const errorResult: TaroGeneral.CallbackResult = { errMsg: `translateMarker:${e}` }
      _option?.fail?.(errorResult)
      _option?.complete?.({ errMsg: 'translateMarker:ok' })

      return Promise.reject(errorResult)
    }
  }

  moveAlong (_object: any) {
    try {
      this.Map._moveAlong(_object)
      const successResult: any = {
        errMsg: 'moveAlong:ok',
      }
      _object?.success?.({ errMsg: 'moveAlong:ok' })
      _object?.complete?.({ errMsg: 'moveAlong:ok' })
      return successResult
    } catch (e) {
      const errorResult: any = { errMsg: `moveAlong:${e}` }
      _object?.fail?.(errorResult)
      _object?.complete?.({ errMsg: 'moveAlong:ok' })
      return errorResult
    }
  }

  includePoints (_option: Taro.MapContext.IncludePointsOption): Promise<TaroGeneral.CallbackResult> {
    try {
      this.Map._includePoints(_option)
      const successResult: TaroGeneral.CallbackResult = {
        errMsg: 'includePoints:ok',
      }
      _option?.success?.({ errMsg: 'includePoints:ok' })
      _option?.complete?.({ errMsg: 'includePoints:ok' })

      return Promise.resolve(successResult)
    } catch (e) {
      const errorResult: TaroGeneral.CallbackResult = { errMsg: `includePoints:${e}` }
      _option?.fail?.(errorResult)
      _option?.complete?.({ errMsg: 'includePoints:ok' })

      return Promise.reject(errorResult)
    }
  }

  getRegion (
    _option?: Taro.MapContext.GetRegionOption | undefined
  ): Promise<Taro.MapContext.GetRegionSuccessCallbackResult> {
    try {
      const Region = this.Map._getRegion()
      const successResult: Taro.MapContext.GetRegionSuccessCallbackResult = {
        northeast: { latitude: Region.northeast.lat, longitude: Region.northeast.lng },
        southwest: { latitude: Region.southwest.lat, longitude: Region.southwest.lng },
        errMsg: 'getRegion:ok',
      }
      _option?.success?.(successResult)
      _option?.complete?.({ errMsg: 'getRegion:ok' })

      return Promise.resolve(successResult)
    } catch (e) {
      const errorResult: TaroGeneral.CallbackResult = { errMsg: `getRegion:${e}` }
      _option?.fail?.(errorResult)
      _option?.complete?.({ errMsg: 'getRegion:ok' })

      return Promise.reject(errorResult)
    }
  }

  getRotate (
    _option?: Taro.MapContext.GetRotateOption | undefined
  ): Promise<Taro.MapContext.GetRotateSuccessCallbackResult> {
    try {
      const Rotate = this.Map._getRotate()
      const successResult: Taro.MapContext.GetRotateSuccessCallbackResult = {
        rotate: Rotate,
        errMsg: 'getRotate:ok',
      }
      _option?.success?.(successResult)
      _option?.complete?.({ errMsg: 'getRotate:ok' })

      return Promise.resolve(successResult)
    } catch (e) {
      const errorResult: TaroGeneral.CallbackResult = { errMsg: `getRotate:${e}` }
      _option?.fail?.(errorResult)
      _option?.complete?.({ errMsg: 'getRotate:ok' })

      return Promise.reject(errorResult)
    }
  }

  getSkew (_option?: Taro.MapContext.GetSkewOption | undefined): Promise<Taro.MapContext.GetSkewSuccessCallbackResult> {
    try {
      const Skew = this.Map._getSkew()
      const successResult: Taro.MapContext.GetSkewSuccessCallbackResult = {
        skew: Skew,
        errMsg: 'getSkew:ok',
      }
      _option?.success?.(successResult)
      _option?.complete?.({ errMsg: 'getSkew:ok' })

      return Promise.resolve(successResult)
    } catch (e) {
      const errorResult: TaroGeneral.CallbackResult = { errMsg: `getSkew:${e}` }
      _option?.fail?.(errorResult)
      _option?.complete?.({ errMsg: 'getSkew:ok' })

      return Promise.reject(errorResult)
    }
  }

  getScale (
    _option?: Taro.MapContext.GetScaleOption | undefined
  ): Promise<Taro.MapContext.GetScaleSuccessCallbackResult> {
    try {
      const Scale = this.Map._getScale()
      const successResult: Taro.MapContext.GetScaleSuccessCallbackResult = {
        scale: Scale,
        errMsg: 'getScale:ok',
      }
      _option?.success?.(successResult)
      _option?.complete?.({ errMsg: 'getScale:ok' })

      return Promise.resolve(successResult)
    } catch (e) {
      const errorResult: TaroGeneral.CallbackResult = { errMsg: `getScale:${e}` }
      _option?.fail?.(errorResult)
      _option?.complete?.({ errMsg: 'getScale:ok' })

      return Promise.reject(errorResult)
    }
  }

  setCenterOffset (_option: Taro.MapContext.SetCenterOffsetOption): Promise<TaroGeneral.CallbackResult> {
    try {
      this.Map._setCenterOffset(_option)
      const successResult: TaroGeneral.CallbackResult = {
        errMsg: 'setCenterOffset:ok',
      }
      _option?.success?.(successResult)
      _option?.complete?.({ errMsg: 'setCenterOffset:ok' })

      return Promise.resolve(successResult)
    } catch (e) {
      const errorResult: TaroGeneral.CallbackResult = { errMsg: `setCenterOffset:${e}` }
      _option?.fail?.(errorResult)
      _option?.complete?.({ errMsg: 'setCenterOffset:ok' })

      return Promise.reject(errorResult)
    }
  }

  removeCustomLayer (_option: Taro.MapContext.RemoveCustomLayerOption): Promise<TaroGeneral.CallbackResult> {
    const errorResult: TaroGeneral.CallbackResult = { errMsg: `removeCustomLayer接口未支持` }
    return Promise.reject(errorResult)
  }

  addCustomLayer (_option: Taro.MapContext.AddCustomLayerOption): Promise<TaroGeneral.CallbackResult> {
    const errorResult: TaroGeneral.CallbackResult = { errMsg: `addCustomLayer接口未支持` }
    return Promise.reject(errorResult)
  }

  addGroundOverlay (_option: Taro.MapContext.AddGroundLayerOption): Promise<TaroGeneral.CallbackResult> {
    try {
      this.Map._addGroundOverlay(_option)
      const successResult: TaroGeneral.CallbackResult = {
        errMsg: 'addGroundOverlay:ok',
      }
      _option?.success?.(successResult)
      _option?.complete?.({ errMsg: 'addGroundOverlay:ok' })

      return Promise.resolve(successResult)
    } catch (e) {
      const errorResult: TaroGeneral.CallbackResult = { errMsg: `addGroundOverlay:${e}` }
      _option?.fail?.(errorResult)
      _option?.complete?.({ errMsg: 'addGroundOverlay:ok' })

      return Promise.reject(errorResult)
    }
  }

  addVisualLayer (_option: Taro.MapContext.AddVisualLayerOption): Promise<TaroGeneral.CallbackResult> {
    const errorResult: TaroGeneral.CallbackResult = { errMsg: `addVisualLayer接口未支持` }
    return Promise.reject(errorResult)
  }

  removeVisualLayer (_option: Taro.MapContext.RemoveVisualLayerOption): Promise<TaroGeneral.CallbackResult> {
    const errorResult: TaroGeneral.CallbackResult = { errMsg: `removeVisualLayer接口未支持` }
    return Promise.reject(errorResult)
  }

  addArc (_option: Taro.MapContext.AddArcOption): Promise<TaroGeneral.CallbackResult> {
    const errorResult: TaroGeneral.CallbackResult = { errMsg: `addArc接口未支持` }
    return Promise.reject(errorResult)
  }

  removeArc (_option: Taro.MapContext.RemoveArcOption): Promise<TaroGeneral.CallbackResult> {
    const errorResult: TaroGeneral.CallbackResult = { errMsg: `removeArc接口未支持` }
    return Promise.reject(errorResult)
  }
  
  setBoundary (_option: Taro.MapContext.SetBoundaryOption): Promise<TaroGeneral.CallbackResult> {
    try {
      this.Map._setBoundary(_option)
      const successResult: TaroGeneral.CallbackResult = {
        errMsg: 'setBoundary:ok',
      }
      _option?.success?.(successResult)
      _option?.complete?.({ errMsg: 'setBoundary:ok' })

      return Promise.resolve(successResult)
    } catch (e) {
      const errorResult: TaroGeneral.CallbackResult = { errMsg: `setBoundary:${e}` }
      _option?.fail?.(errorResult)
      _option?.complete?.({ errMsg: 'setBoundary:ok' })

      return Promise.reject(errorResult)
    }
  }

  updateGroundOverlay (_option: Taro.MapContext.UpdateGroundOverlayOption): Promise<TaroGeneral.CallbackResult> {
    try {
      this.Map._updateGroundOverlay(_option)
      const successResult: TaroGeneral.CallbackResult = {
        errMsg: 'updateGroundOverlay:ok',
      }
      _option?.success?.(successResult)
      _option?.complete?.({ errMsg: 'updateGroundOverlay:ok' })

      return Promise.resolve(successResult)
    } catch (e) {
      const errorResult: TaroGeneral.CallbackResult = { errMsg: `updateGroundOverlay:${e}` }
      _option?.fail?.(errorResult)
      _option?.complete?.({ errMsg: 'updateGroundOverlay:ok' })

      return Promise.reject(errorResult)
    }
  }

  removeGroundOverlay (_option: Taro.MapContext.RemoveGroundOverlayOption): Promise<TaroGeneral.CallbackResult> {
    try {
      this.Map._removeGroundOverlay(_option)
      const successResult: TaroGeneral.CallbackResult = {
        errMsg: 'removeGroundOverlay:ok',
      }
      _option?.success?.(successResult)
      _option?.complete?.({ errMsg: 'removeGroundOverlay:ok' })

      return Promise.resolve(successResult)
    } catch (e) {
      const errorResult: TaroGeneral.CallbackResult = { errMsg: `removeGroundOverlay:${e}` }
      _option?.fail?.(errorResult)
      _option?.complete?.({ errMsg: 'removeGroundOverlay:ok' })

      return Promise.reject(errorResult)
    }
  }

  toScreenLocation (_option: Taro.MapContext.ToScreenLocationOption): Promise<TaroGeneral.CallbackResult> {
    const errorResult: TaroGeneral.CallbackResult = { errMsg: `toScreenLocation接口未支持` }
    return Promise.reject(errorResult)
  }

  fromScreenLocation (_option: Taro.MapContext.FromScreenLocationOption): Promise<TaroGeneral.CallbackResult> {
    const errorResult: TaroGeneral.CallbackResult = { errMsg: `fromScreenLocation接口未支持` }
    return Promise.reject(errorResult)
  }

  openMapApp (_option: Taro.MapContext.OpenMapAppOption): Promise<TaroGeneral.CallbackResult> {
    const errorResult: TaroGeneral.CallbackResult = { errMsg: `openMapApp接口未支持` }
    return Promise.reject(errorResult)
  }

  addMarkers (_option: Taro.MapContext.AddMarkersOption): Promise<TaroGeneral.CallbackResult> {
    try {
      this.Map._addMarkers(_option)
      const successResult: TaroGeneral.CallbackResult = {
        errMsg: 'addMarkers:ok',
      }
      _option?.success?.(successResult)
      _option?.complete?.({ errMsg: 'addMarkers:ok' })

      return Promise.resolve(successResult)
    } catch (e) {
      const errorResult: TaroGeneral.CallbackResult = { errMsg: `addMarkers:${e}` }
      _option?.fail?.(errorResult)
      _option?.complete?.({ errMsg: 'addMarkers:ok' })

      return Promise.reject(errorResult)
    }
  }

  removeMarkers (_option: Taro.MapContext.RemoveMarkersOption): Promise<TaroGeneral.CallbackResult> {
    try {
      this.Map._removeMarkers(_option)
      const successResult: TaroGeneral.CallbackResult = {
        errMsg: 'removeMarkers:ok',
      }
      _option?.success?.(successResult)
      _option?.complete?.({ errMsg: 'removeMarkers:ok' })

      return Promise.resolve(successResult)
    } catch (e) {
      const errorResult: TaroGeneral.CallbackResult = { errMsg: `removeMarkers:${e}` }
      _option?.fail?.(errorResult)
      _option?.complete?.({ errMsg: 'removeMarkers:ok' })

      return Promise.reject(errorResult)
    }
  }

  initMarkerCluster (
    _option?: Taro.MapContext.InitMarkerClusterOption | undefined
  ): Promise<TaroGeneral.CallbackResult> {
    const errorResult: TaroGeneral.CallbackResult = { errMsg: `initMarkerCluster接口未支持` }
    return Promise.reject(errorResult)
  }
  
  on (
    _event: keyof Taro.MapContext.MapEvent,
    _callback: (res: Taro.MapContext.MapEventMarkerClusterCreate | Taro.MapContext.MapEventMarkerClusterClick) => void
  ): void {
    console.error('on接口未支持')
  }
}
