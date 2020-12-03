<template>
  <div>
    <h1>Login</h1>
    <input type="email" name="email" v-model="email" placeholder="Email" />
    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="Password"
    />
    <button type="button" v-on:click="login">Login</button>
  </div>
</template>

<script>
import AuthService from '@/services/AuthService';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: null,
    };
  },
  methods: {
    async login() {
      this.error = null;
      try {
        const response = await AuthService.login({
          email: this.email,
          password: this.password,
        });
        this.$store.dispatch('setToken', response.data.token);
        this.$store.dispatch('setUser', response.data.data.user);
        this.$router.push({
          name: 'Home',
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
  components: {},
};
</script>

<style>
</style>
