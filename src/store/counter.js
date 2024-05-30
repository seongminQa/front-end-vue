export default {
  namespaced: true,

  state: {
    count:100
  },
  getters: {
    // state는 자신의 state를 참조. 위의 count
    // getters는 자신의 getters를 참조
    // rootState는 index.js의 State를 참조
    // rootGetters는 index.js의 Getters를 참조
    getCount(state, getters, rootState, rootGetters) {
      return state.count;
    }
  },
  mutations: {
    setCount(state, payload) {
      state.count = state.count + payload;
    }
  },
  actions: {
    addAction(context, payload) {
      context.commit("setCount", payload);
    }
  }
};