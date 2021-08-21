import request from '@/service'

import { IData } from '@/service/types'

export function getPageListData(url: string, queryInfo: any) {
  return request.post<IData>({
    url,
    data: queryInfo,
    showLoading: false
  })
}

export function deletePageData(url: string) {
  return request.delete<IData>({
    url,
    showLoading: false
  })
}
