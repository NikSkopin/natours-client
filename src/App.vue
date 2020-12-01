<template>
  <div id="app">
    <header class="header">
      <nav class="nav nav--tours">
        <router-link class="nav__el" to="/">all tours</router-link>
        <form class="nav__search">
          <button class="nav__search-btn">
            <svg>
              <use xlink:href="img/icons.svg#icon-search"></use>
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
        <img src="img/logo-white.png" alt="Natours logo" />
      </div>
      <nav class="nav nav--user">
        <!-- <a href="#" class="nav__el">My bookings</a>
        <a href="#" class="nav__el">
          <img src="img/users/default.jpg" alt="User photo" class="nav__user-img" />
          <span>Jonas</span>
        </a> -->

        <button @click="$router.push('login')" class="nav__el" >Log in</button>
        <button class="nav__el nav__el--cta">Sign up</button>
      </nav>
    </header>
    <router-view/>
    <footer class="footer">
      <div class="footer__logo">
        <img src="img/logo-green.png" alt="Natours logo" />
      </div>
      <ul class="footer__nav">
        <li><a href="#">About us</a></li>
        <li><a href="#">Download apps</a></li>
        <li><a href="#">Become a guide</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <p class="footer__copyright">
        &copy; by Nikita Skopin
      </p>
    </footer>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
  </div>
</template>

<style lang="scss">
</style>
