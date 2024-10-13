import { createStore } from "vuex";

const store = createStore({
  state: {
    users: {
      id: 1,
      userName: "binh",
      gender: "nam",
      dateOfBirth: "01-07-2005",
      address: "1234 em co danh roi nhip nao khong",
    },
    listUser: [
      {
        id: 2,
        userName: "binh1",
        gender: "nu",
        dateOfBirth: "02-07-2005",
        address: "1234 em co danh roi nhip nao khong",
      },
      {
        id: 3,
        userName: "binh2",
        gender: "nam",
        dateOfBirth: "03-07-2005",
        address: "1234 em co danh roi nhip nao khong",
      },
    ],
    listProduct: [
      { id: 1, name: "Product 1", price: 10000, amount: 2 },
      { id: 2, name: "Product 2", price: 20000, amount: 4 },
    ],
    count: 1,
    numbers: [],
    company: "Rikkei Academy",
    isDarkMode: false,
    language: "vi",
    user: {
      email: "",
      password: "",
    },
  },
  getters: {
    isDarkMode: (state) => state.isDarkMode,
    currentLanguage: (state) => state.language,
    user: (state) => state.user,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      if (state.count > 0) {
        state.count--;
      }
    },
    addNumber(state) {
      const randomNumber = Math.floor(Math.random() * 100);
      state.numbers.push(randomNumber);
    },
    changeState(state) {
      state.company = "RikkeiSoft";
    },
    toggleDarkMode(state) {
      state.isDarkMode = !state.isDarkMode;
    },
    setDarkMode(state, value) {
      state.isDarkMode = value;
    },
    setLanguage(state, language) {
      state.language = language;
    },
    setUser(state, user) {
      state.user.email = user.email;
      state.user.password = user.password;
    },
    clearUser(state) {
      state.user.email = "";
      state.user.password = "";
    },
  },
  actions: {
    toggleDarkMode({ commit }) {
      commit("toggleDarkMode");
    },
    setDarkMode({ commit }, value) {
      commit("setDarkMode", value);
    },
    setLanguage({ commit }, language) {
      commit("setLanguage", language);
    },
    registerUser({ commit }, user) {
      commit("setUser", user);
    },
  },
});

export default store;
