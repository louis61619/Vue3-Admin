import request from '@/service'

enum DataApi {
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addressGoodsSale = '/goods/address/sale'
}

export function getCategoryGoodsCount() {
  return request.get({
    url: DataApi.categoryGoodsCount
  })
}

export function getCategoryGoodsSale() {
  return request.get({
    url: DataApi.categoryGoodsSale
  })
}

export function getCategoryGoodsFavor() {
  return request.get({
    url: DataApi.categoryGoodsFavor
  })
}

export function getAddressGoodsSale() {
  return request.get({
    url: DataApi.addressGoodsSale
  })
}
