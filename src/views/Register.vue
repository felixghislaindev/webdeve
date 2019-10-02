<template>
  <div class="registration">
    <form @submit.prevent="registerUser">
      <h2>Sign Up</h2>
      <label for="username">Username</label>
      <br />
      <input type="text" name="firstname" placeholder="Enter your user name" v-model="username" />
      <br />
      <label for="username">First name</label>
      <input type="text" name="firstname" placeholder="Enter your first name" v-model="firstname" />
      <br />
      <label for="username">Last name</label>
      <br />
      <input type="text" name="lastname" placeholder="Enter your last name" v-model="lastname" />
      <br />
      <label for="username">Email</label>
      <br />
      <input type="text" name="email" placeholder="Enter your email address" v-model="email" />
      <br />
      <label for="username">Password</label>
      <br />
      <input
        type="password"
        name="password"
        placeholder="Enter your email address"
        v-model="password"
      />
      <br />
      <label for="username">Confirm Password</label>
      <br />
      <input
        type="password"
        name="confirmPasword"
        placeholder="Enter your email address"
        v-model="confirmPassword"
      />

      <br />Topics:
      <br />
      <input v-model="topicChoices" type="checkbox" name="JavaScript" value="JavaScript" />
      <label for="username" style="font-weight:500px; margin-left:5px;">JavaScript</label>
      <br />
      <input v-model="topicChoices" type="checkbox" name="PHP" value="PHP" />
      <label for="username" style="font-weight:500px;  margin-left:5px;">PHP</label>
      <br />
      <input v-model="topicChoices" type="checkbox" name="Python" value="Python" />
      <label for="username" style="font-weight:500px; margin-left:5px;">Python</label>
      <br />
      <input v-model="topicChoices" type="checkbox" name="Java" value="Java" />
      <label for="username" style="font-weight:500px; margin-left:5px;">Java</label>
      <br />
      <input v-model="topicChoices" type="checkbox" name="C++" value="C" />
      <label for="username" style="font-weight:500px;margin-left:5px;">C</label>
      <br />
      <input v-model="topicChoices" type="checkbox" name="Rust" value="Rust" />
      <label for="username" style="font-weight:500px;margin-left:5px;">Rust</label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import Router from "vue-router";
export default {
  name: "Register",
  data() {
    return {
      username: "",
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
      topicChoices: []
    };
  },
  methods: {
    ...mapActions(["register"]),
    registerUser() {
      let user = {
        username: this.username,
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
        topicChoices: this.topicChoices
      };

      // registering user
      this.register(user)
        .then(res => {
          if (res.data.success) {
            console.log(res);
            this.$router.push({ path: "/signin" });
          }
        })
        .catch(err => console.log(err));
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
  form label {
    font-family: inherit;
    font-size: 14px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.6);
    margin-bottom: 10px;
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
