import { createStore } from 'vuex'

export default createStore({
  state: {
    access: '',
    refresh: '',
    isAuthenticated: false
  },
  getters: {
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem('access')) {
        state.access = localStorage.getItem('access');
      } else {
        state.access = '';
      }
    },
    setAccess(state, access) {
      state.access = access;
      state.isAuthenticated = true;
    },
    setRefresh(state, refresh) {
      state.refresh = refresh
    },
    removeAccess(state) {
      state.access = '';
      state.isAuthenticated = false;
      localStorage.removeItem('access');
    }
  },
  actions: {
  },
  modules: {
  }
})
