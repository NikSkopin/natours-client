<template>
  <div id="app">
    <header class="header">
      <nav class="nav nav--tours">
        <router-link class="nav__el" to="/">all tours</router-link>
        <form class="nav__search">
          <button class="nav__search-btn">
            <svg>
              <use xlink:href="/img/icons.svg#icon-search"></use>
            </svg>
          </button>
          <input
            type="text"
            placeholder="Search tours"
            class="nav__search-input"
          />
        </form>
      </nav>
      <div class="header__logo">
        <img src="/img/logo-white.png" alt="Natours logo" />
      </div>
      <nav class="nav nav--user">
        <a href="#" class="nav__el" v-if="$store.state.isUserLoggedIn"
          >My bookings</a
        >
        <a href="#" class="nav__el" v-if="$store.state.isUserLoggedIn">
          <img
            v-if="user.photo"
            v-bind:src="'img/users/' + user.photo"
            alt="User photo"
            class="nav__user-img"
          />
          <img
            v-else
            v-bind:src="'img/users/default.jpg'"
            alt="User photo"
            class="nav__user-img"
          />
          <span>{{ user.name }}</span>
        </a>
        <a
          href="#"
          class="nav__el"
          v-if="$store.state.isUserLoggedIn"
          @click="logout"
          >Logout</a
        >

        <button
          @click="$router.push('login')"
          class="nav__el"
          v-if="!$store.state.isUserLoggedIn"
        >
          Log in
        </button>
        <button
          @click="$router.push('signup')"
          class="nav__el nav__el--cta"
          v-if="!$store.state.isUserLoggedIn"
        >
          Sign up
        </button>
      </nav>
    </header>
    <router-view />
    <footer class="footer">
      <div class="footer__logo">
        <img src="/img/logo-green.png" alt="Natours logo" />
      </div>
      <ul class="footer__nav">
        <li><a href="#">About us</a></li>
        <li><a href="#">Download apps</a></li>
        <li><a href="#">Become a guide</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <p class="footer__copyright">&copy; by Nikita Skopin</p>
    </footer>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(['user']),
  },
  methods: {
    logout() {
      this.$store.dispatch('setToken', null);
      this.$store.dispatch('setUser', null);
      if (this.$route.name !== 'Home') {
        this.$router.push({
          name: 'Home',
        });
      }
    },
  },
};
</script>

<style lang="scss">
</style>
