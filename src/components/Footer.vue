<template>
  <footer>
    <ul>
      <li>
        <a href>About</a>
      </li>
      <li>
        <a href>Sign in</a>
      </li>
      <li>
        <a href>Sign up</a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
ul {
  text-align: center;
  list-style: none;
}
li {
  float: left;
  margin-left: 20px;
}
li a {
  text-decoration: none;
  font-size: 1.3em;
  font-weight: 700;
  color: #2c3e50;
}
@media only screen and (min-width: 320px) and (max-width: 479px) {
  footer {
    margin-top: 80px;
    display: flex;
    align-items: center;
    text-align: center;
  }
}

@media only screen and (min-width: 480px) and (max-width: 768px) {
  footer {
    margin-top: 80px;
    display: flex;
    align-items: center;
    text-align: center;
  }
}

@media only screen and (min-width: 769px) and (max-width: 991px) {
  footer {
    margin-top: 80px;
    display: flex;
    align-items: center;
    text-align: center;
  }
}

@media only screen and (min-width: 992px) {
  footer {
    margin-top: 80px;
    display: flex;
    align-items: center;
    text-align: center;
  }
}
</style>
