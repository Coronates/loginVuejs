<template>
  <div id="app">
    <div id="nav"></div>
    <router-view @logged="setlogged" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      logged: false,
      user: {
        email: "admin@example.com",
        password: "123"
      }
    };
  },
  mounted() {
    if (!this.logged) {
      this.$router.replace({ name: "login" });
    }
  },
  methods: {
    setlogged(status) {
      this.logged = status;
    },
    logout() {
      this.logged = false;
    }
  }
};
</script>

<style>
body {
  background-color: #f0f0f0;
}
h1 {
  padding: 0;
  margin-top: 0;
}

iframe {
  width: 100%;
  height: 1350px;
}
</style>
