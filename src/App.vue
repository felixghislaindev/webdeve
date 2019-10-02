<template>
  <div id="app">
    <div id="nav">
      <div class="logo">
        <span @click.prevent="home" style="cursor: pointer;">DevNews</span>
      </div>
      <div class="navlink">
        <router-link to="/signin" class="nav-links" v-if="!isLoggedIn">Sign in</router-link>
        <router-link to="/signup" class="nav-links" v-if="!isLoggedIn">Sign up</router-link>
        <ul>
          <li class="nav-item" v-if="isLoggedIn">
            <a
              to="/logout"
              class="nav-link"
              @click.prevent="logoutUser"
              style="font-size:16px;cursor: pointer;"
            >Logout</a>
          </li>
        </ul>
      </div>
      <Errors v-if="error" :msg="error"></Errors>
    </div>
    <router-view />
  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
import Errors from "./components/Errors.vue";
export default {
  components: {
    Errors
  },
  computed: {
    ...mapGetters(["error", "isLoggedIn"])
  },
  methods: {
    ...mapActions(["logout"]),
    logoutUser() {
      this.logout();
    },
    home() {
      this.$router.push({ path: "/" });
    }
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Poppins:700,900");
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 85%;
  margin: 0 auto;
  /* 09da93 */
}
#nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.nav-links {
  padding-left: 20px;
  text-decoration: none;
}
@media only screen and (min-width: 320px) and (max-width: 479px) {
  .logo span {
    text-transform: uppercase;
    font-family: "Poppins", sans-serif;
    font-weight: 900;
    font-size: 1.2em;
  }
}

@media only screen and (min-width: 480px) and (max-width: 768px) {
  .logo span {
    text-transform: uppercase;
    font-family: "Poppins", sans-serif;
    font-weight: 900;
    font-size: 1.2em;
  }
}

@media only screen and (min-width: 769px) and (max-width: 991px) {
  .logo span {
    text-transform: uppercase;
    font-family: "Poppins", sans-serif;
    font-weight: 900;
    font-size: 1.4em;
  }
}

@media only screen and (min-width: 992px) {
  .logo span {
    text-transform: uppercase;
    font-family: "Poppins", sans-serif;
    font-weight: 900;
    font-size: 1.6em;
  }
}
</style>
