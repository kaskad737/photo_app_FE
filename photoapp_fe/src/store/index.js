import { createStore } from 'vuex'

export default createStore({
  state: {
    access: '',
    refresh: '',
    isAuthenticated: false,
    userId: null,
    username: '',
    userFirstName: '',
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
    },
    setUser(state, { userId, username, userFirstName }) {
      state.userId = userId;
      state.username = username;
      state.userFirstName = userFirstName;
    },
    clearUser(state) {
      state.userId = null;
      state.username = '';
      state.userFirstName = ';'
    },
  },
  actions: {
  },
  modules: {
  }
})
