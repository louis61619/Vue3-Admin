import request from '@/service'
import { IData } from '@/service/types'

enum DataApi {
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addressGoodsSale = '/goods/address/sale'
}

export function getCategoryGoodsCount() {
  return request.get<IData>({
    url: DataApi.categoryGoodsCount
  })
}

export function getCategoryGoodsSale() {
  return request.get<IData>({
    url: DataApi.categoryGoodsSale
  })
}

export function getCategoryGoodsFavor() {
  return request.get<IData>({
    url: DataApi.categoryGoodsFavor
  })
}

export function getAddressGoodsSale() {
  return request.get<IData>({
    url: DataApi.addressGoodsSale
  })
}
