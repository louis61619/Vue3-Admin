import { createStore } from 'vuex'

const store = createStore({
  state: () => {
    return {
      name: 'Louis'
    }
  }
})

export default store
