import { Module } from 'vuex'

import { IRootStore } from '@/store/type'
import { ISystemState, MutaionTypes } from './type'

import { getPageListData } from '@/service/main/system/system'

const systemModule: Module<ISystemState, IRootStore> = {
  namespaced: true,
  state: () => {
    return {
      userList: [],
      userCount: 0
    }
  },
  mutations: {
    [MutaionTypes.CHANGE_USER_LIST](state, payload) {
      state.userList = payload
    },
    [MutaionTypes.CHANGE_USER_COUNT](state, payload) {
      state.userCount = payload
    }
  },
  actions: {
    async getPageListAction({ commit }, payload) {
      const { pageUrl, queryInfo } = payload

      const pageResult = await getPageListData(pageUrl, queryInfo)
      const { list, totalCount } = pageResult.data

      commit(MutaionTypes.CHANGE_USER_LIST, list)
      commit(MutaionTypes.CHANGE_USER_COUNT, totalCount)
    }
  }
}

export default systemModule
