import { createStore, Store, useStore as useVuexStore } from 'vuex'
import { App } from 'vue'

import { IRootStore, IStoreType, MutaionTypes } from './type'
import login from './login/login'
import system from './main/system/system'

import { getPageListData } from '@/service/main/system/system'

const store = createStore<IRootStore>({
  state: () => {
    return {
      roleList: [],
      departmentList: []
    }
  },
  mutations: {
    [MutaionTypes.CHANGE_ROLE_LIST](state, payload) {
      state.roleList = payload
    },
    [MutaionTypes.CHNAGE_DEPARTMENT_LIST](state, payload) {
      state.departmentList = payload
    }
  },
  actions: {
    async getInitialDataAction({ commit }) {
      const departmentResult = await getPageListData('/department/list', {
        offset: 0,
        size: 1000
      })
      const { list: departmentList } = departmentResult.data
      const roleResult = await getPageListData('/role/list', {
        offset: 0,
        size: 1000
      })
      const { list: rolList } = roleResult.data

      commit(MutaionTypes.CHANGE_ROLE_LIST, rolList)
      commit(MutaionTypes.CHNAGE_DEPARTMENT_LIST, departmentList)
    }
  },
  modules: {
    login,
    system
  }
})

export function setupStore(app: App) {
  store.dispatch('login/loadLocalStore', app)
  store.dispatch('getInitialDataAction')
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
