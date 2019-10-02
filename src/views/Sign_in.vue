<template>
  <div class="registration">
    <form @submit.prevent="loginuser">
      <h2>Sign in</h2>
      <label for="username">Username</label>
      <br />
      <input type="text" name="username" placeholder="Enter your user name" v-model="username" />
      <br />
      <label for="username">Email</label>
      <br />
      <input type="text" name="email" placeholder="Enter your email address" v-model="emailAddress" />
      <br />
      <label for="username">Password</label>
      <br />
      <input type="password" name="email" placeholder="Enter Password" v-model="password" />
      <br />
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "Signin",
  data() {
    return {
      username: "",
      emailAddress: "",
      password: ""
    };
  },
  methods: {
    ...mapActions(["login"]),
    loginuser() {
      let user = {
        username: this.username,
        emailAddress: this.emailAddress,
        password: this.password
      };
      // sending user data to the backend
      this.login(user)
        .then(res => {
          if (res.data.success) {
            this.$router.push("/yournews");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
h2 {
  text-align: center;
}

@media only screen and (min-width: 320px) and (max-width: 479px) {
  form {
    width: 100%;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 10px;
  }
  input[type="text"],
  input[type="password"] {
    outline: none;
    display: block;
    background: rgba(0, 0, 0, 0.1);
    width: 100%;
    border: 0;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 12px 20px;
    color: rgba(0, 0, 0, 0.6);
    font-family: inherit;
    font-size: inherit;
    font-weight: 500;
    line-height: inherit;
    transition: 0.3s ease;
    margin-top: 10px;
  }
  input[type="submit"] {
    margin-top: 30px;
    outline: none;
    background: #42b983;
    width: 100%;
    border: 0;
    border-radius: 4px;
    padding: 12px 20px;
    color: #ffffff;
    font-family: inherit;
    font-size: inherit;
    font-weight: 500;
    line-height: inherit;
    text-transform: uppercase;
    cursor: pointer;
  }
}

@media only screen and (min-width: 480px) and (max-width: 768px) {
  form {
    width: 300px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 10px;
  }
  input[type="text"],
  input[type="password"] {
    outline: none;
    display: block;
    background: rgba(0, 0, 0, 0.1);
    width: 100%;
    border: 0;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 12px 20px;
    color: rgba(0, 0, 0, 0.6);
    font-family: inherit;
    font-size: inherit;
    font-weight: 500;
    line-height: inherit;
    transition: 0.3s ease;
    margin-top: 10px;
  }
  input[type="submit"] {
    margin-top: 30px;
    outline: none;
    background: #42b983;
    width: 100%;
    border: 0;
    border-radius: 4px;
    padding: 12px 20px;
    color: #ffffff;
    font-family: inherit;
    font-size: inherit;
    font-weight: 500;
    line-height: inherit;
    text-transform: uppercase;
    cursor: pointer;
  }
}

@media only screen and (min-width: 769px) and (max-width: 991px) {
  form {
    width: 400px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 10px;
  }
  input[type="text"],
  input[type="password"] {
    outline: none;
    display: block;
    background: rgba(0, 0, 0, 0.1);
    width: 100%;
    border: 0;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 12px 20px;
    color: rgba(0, 0, 0, 0.6);
    font-family: inherit;
    font-size: inherit;
    font-weight: 500;
    line-height: inherit;
    transition: 0.3s ease;
    margin-top: 10px;
  }
  input[type="submit"] {
    margin-top: 30px;
    outline: none;
    background: #42b983;
    width: 100%;
    border: 0;
    border-radius: 4px;
    padding: 12px 20px;
    color: #ffffff;
    font-family: inherit;
    font-size: inherit;
    font-weight: 500;
    line-height: inherit;
    text-transform: uppercase;
    cursor: pointer;
  }
}

@media only screen and (min-width: 992px) {
  form {
    width: 500px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 10px;
  }
  input[type="text"],
  input[type="password"] {
    outline: none;
    display: block;
    background: rgba(0, 0, 0, 0.1);
    width: 100%;
    border: 0;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 12px 20px;
    color: rgba(0, 0, 0, 0.6);
    font-family: inherit;
    font-size: inherit;
    font-weight: 500;
    line-height: inherit;
    transition: 0.3s ease;
    margin-top: 10px;
  }
  input[type="checkbox"] {
    border: 2px solid #e8e8eb;
    background: #e8e8eb;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  input[type="submit"] {
    margin-top: 30px;
    outline: none;
    background: #42b983;
    width: 100%;
    border: 0;
    border-radius: 4px;
    padding: 12px 20px;
    color: #ffffff;
    font-family: inherit;
    font-size: inherit;
    font-weight: 500;
    line-height: inherit;
    text-transform: uppercase;
    cursor: pointer;
  }
}
</style>
