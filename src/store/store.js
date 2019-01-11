import vue from 'vue';
import vueX from 'vuex';

vue.use(vueX);

export const store = new vueX.Store({
  state: {
    name: 'Josh',
    city: 'Provo'
  },
  getters: {
    name(state) {
      return state.name;
    },
    city(state){
      return state.city;
    }
  },
  actions: {

  },
  mutations: {
    addLastName(state) {
      state.name = "Josh Parker";
    },
    addState(state){
      state.city = "Provo, Utah";
    }
  }
});
