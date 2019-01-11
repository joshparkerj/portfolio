import vue from 'vue';
import vueX from 'vuex';
import axios from 'axios';

vue.use(vueX);

export const store = new vueX.Store({
  state: {
    name: 'Josh',
    city: 'Provo',
    char: {}
  },
  getters: {
    name(state) {
      return state.name;
    },
    city(state){
      return state.city;
    },
    charName(state){
      return state.char.name || '';
    }
  },
  actions: {
    // actions are for 2 things:
    // setting state asynchronously
    // calling multiple mutations

    changes(state,payload){
      state.commit("addSomeName",payload.name);
      state.commit("changeCity",payload.city);
    },
    starwars(state,payload){
      axios.get('https://swapi.co/api/films/1/')
      .then(r=>{
        //console.log(r.data);
        const toGet = Math.floor(payload.rand*r.data.characters.length)
        return r.data.characters[toGet];
      })
      .then(r=>{
        return axios.get(r);
      })
      .then(r=>{
        //console.log(r.data);
        state.commit("swChar",r.data);
      })
    }
  },
  mutations: {
    addLastName(state) {
      state.name = "Josh Parker";
    },
    addState(state){
      state.city = "Provo, Utah";
    },
    addSomeName(state,payload){
      state.name += ` ${payload}`;
    },
    changeCity(state,payload){
      state.city = payload;
    },
    swChar(state,payload){
      state.char = payload;
    }
  }
});
