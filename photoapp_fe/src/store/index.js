import { createStore } from 'vuex'

export default createStore({
  state: {
    access: '',
    refresh: '',
    isAuthenticated: false,
    userId: null,
    username: '',
    userRole: '',
    userFirstName: '',
    userWorkRestaurant: '',
    userStartShift: false,
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
    setUser(state, { userId, username, userFirstName, userRole }) {
      state.userId = userId;
      state.username = username;
      state.userFirstName = userFirstName;
      state.userRole = userRole;
    },
    clearUser(state) {
      state.userId = null;
      state.username = '';
      state.userFirstName = '';
      state.userRole = '';

      localStorage.removeItem('userId');
      localStorage.removeItem('username');
      localStorage.removeItem('userFirstName');
      localStorage.removeItem('userRole');
    },
    setUserWorkRestaurant(state, restaurant) {
      state.userWorkRestaurant = restaurant;
    },
    clearUserWorkRestaurant(state) {
      state.userWorkRestaurant = '';
      localStorage.removeItem('userWorkRestaurant');
    },
    setUserStartShift(state) {
      state.userStartShift = true;
    },
    clearUserStartShift(state) {
      state.userStartShift = false;
      localStorage.removeItem('userStartShift');
    },
  },
  actions: {
  },
  modules: {
  }
})
