import axios from "axios";
import router from "../router";

const state = {
  token: localStorage.getItem("token") || "",
  user: {},
  status: "",
  topics: [],
  post: {},
  error: null,
  discoveryTopics: {}
};
const mutations = {
  auth_request(state) {
    state.status = "loading";
    state.error = null;
  },
  auth_success(state, token, user) {
    state.token = token;
    (state.user = user), (state.status = "sucess");
    state.error = null;
  },
  auth_error(state, err) {
    state.error = err.response.data.msg;
  },
  register_request_state(state) {
    state.status = "success";
  },
  register_user_success(state) {
    state.status = "success";
    state.error = null;
  },
  register_error(state, err) {
    state.error = err.response.data.msg;
  },
  logout_user(state) {
    state.error = null;
    state.status = "";
    state.token = "";
    state.user = "";
    state.error = null;
  },
  user_profile_request(state) {
    state.status = "loading";
  },
  present_user_profile(state, user) {
    state.user = user;
  },
  userTopic(state, topics) {
    state.topics = topics;
  },
  postDataRes(state, post) {
    state.post = post;
  },
  set_dicovery(state, post) {
    state.discoveryTopics = post;
  }
};
const actions = {
  // login action
  async login({ commit }, user) {
    commit("auth_request");
    try {
      let response = await axios.post("/api/users/login", user);
      if (response.data.success) {
        const token = response.data.token;
        const user = response.data.user;
        localStorage.setItem("token", token);
        axios.defaults.headers.common["Authorization"] = token;
        commit("auth_success", token, user);
      }
      return response;
    } catch (err) {
      commit("auth_error", err);
    }
  },
  async register({ commit }, user) {
    try {
      commit("register_request_state");
      let response = await axios.post("/api/users/register", user);
      if (response.data.success) {
        commit("register_user_success");
      }
      return response;
    } catch (err) {
      commit("register_error", err);
    }
  },

  //   login out the user
  async logout({ commit }) {
    await localStorage.removeItem("token");
    commit("logout_user");
    delete axios.defaults.headers.common["Authorization"];
    router.push("/signin");
    return;
  },
  //   gettin user profile
  async getUserProfile({ commit }) {
    commit("user_profile_request");
    let response = await axios.get("/api/users/profile");
    commit("present_user_profile", response.data.user);
    return response;
  },
  async getTopicpost({ commit }, user) {
    let response = await axios.get("/api/users/posts", {
      params: { user: user.data.user.topicChoices }
    });
    console.log(response);
    commit("userTopic", response.data.articles);
  },
  async getSinglePost({ commit }, uri) {
    let response = await axios.get(`/api/users/post/:${uri}`);
    const newuri = `${uri}`;
    const post = response.data.post[Object.keys(response.data.post)[0]];
    commit("postDataRes", post.info);
  },
  async getDiscoverPost({ commit }) {
    let response = await axios.get(`/api/users/discoverposts`);
    console.log(response.data.posts);
    commit("set_dicovery", response.data.posts);
  }
};
const getters = {
  isLoggedIn: state => state.token,
  authState: state => state.status,
  user: state => state.user,
  userTopic: state => state.topics,
  getPostData: state => state.post,
  error: state => state.error,
  discoveryTopic: state => state.discoveryTopics
};

export default {
  state,
  mutations,
  getters,
  actions
};
