import { Module } from 'vuex'

import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenuByRoleId
} from '@/service/login/login'
import { IAccount } from '@/service/login/type'

import { mapMenuRoutes } from '@/utils/map-meuns'

import localCache from '@/utils/cache'

import { ILoginState } from './type'
import { IRootStore } from '../type'
import router from '@/router'

enum mutaionTypes {
  CHANGE_TOKEN = 'CHANGE_TOKEN',
  CHANGE_USER_INFO = 'CHANGE_USER_INFO',
  CHANGE_USER_MENUS = 'CHANGE_USER_MENUS'
}

const loginModule: Module<ILoginState, IRootStore> = {
  namespaced: true,
  state: () => {
    return {
      token: '',
      userInfo: {},
      userMenus: {}
    }
  },
  mutations: {
    [mutaionTypes.CHANGE_TOKEN](state, payload) {
      state.token = payload
    },
    [mutaionTypes.CHANGE_USER_INFO](state, payload) {
      state.userInfo = payload
    },
    [mutaionTypes.CHANGE_USER_MENUS](state, payload) {
      state.userMenus = payload

      // 對路由進行加載
      const routes = mapMenuRoutes(payload)
      routes.forEach((route) => {
        router.addRoute('main', route)
      })

      router.push(window.location.hash.replace('#', ''))
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit(mutaionTypes.CHANGE_TOKEN, token)
      localCache.setCache('token', token)

      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit(mutaionTypes.CHANGE_USER_INFO, userInfo)
      localCache.setCache('userInfo', userInfo)

      const userMenuResult = await requestUserMenuByRoleId(userInfo.role.id)
      const userMenus = userMenuResult.data
      commit(mutaionTypes.CHANGE_USER_MENUS, userMenus)
      localCache.setCache('userMenus', userMenus)
    },
    loadLocalStore({ commit }, app) {
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) commit(mutaionTypes.CHANGE_USER_INFO, userInfo)
      const token = localCache.getCache('token')
      if (token) commit(mutaionTypes.CHANGE_TOKEN, token)
      const userMenus = localCache.getCache('userMenus')
      if (userMenus) commit(mutaionTypes.CHANGE_USER_MENUS, userMenus)
    }
  }
}

export default loginModule
