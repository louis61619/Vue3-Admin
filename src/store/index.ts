import { createStore, Store, useStore as useVuexStore } from 'vuex'
import { App } from 'vue'

import { IRootStore, IStoreType } from './type'
import login from './login/login'

const store = createStore<IRootStore>({
  state: () => {
    return {
      name: 'Louis'
    }
  },
  mutations: {
    getStateName(state) {
      console.log(state.name)
    }
  },
  modules: {
    login
  }
})

export function setupStore(app: App) {
  store.dispatch('login/loadLocalStore', app)
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
