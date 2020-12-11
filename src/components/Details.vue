<template>
  <!-- TODO add responsive -->
  <div>
    <section class="section-header">
      <div class="header__hero">
        <div class="header__hero-overlay">&nbsp;</div>
        <img
          class="header__hero-img"
          :src="'img/tours/' + tour.imageCover"
          :alt="tour.name"
        />
      </div>
      <div class="heading-box">
        <h1 class="heading-primary">
          <span>{{ tour.name }} tour</span>
        </h1>
        <div class="heading-box__group">
          <div class="heading-box__detail">
            <svg class="heading-box__icon">
              <use xlink:href="/img/icons.svg#icon-clock"></use></svg
            ><span class="heading-box__text">{{ tour.duration }} days</span>
          </div>
          <div class="heading-box__detail">
            <svg class="heading-box__icon">
              <use xlink:href="/img/icons.svg#icon-map-pin"></use></svg
            ><span class="heading-box__text">{{
              tour.startLocation.description
            }}</span>
          </div>
        </div>
      </div>
    </section>
    <section class="section-description">
      <div class="overview-box">
        <div>
          <div class="overview-box__group">
            <h2 class="heading-secondary ma-bt-lg">Quick facts</h2>
            <div class="overview-box__detail">
              <svg class="overview-box__icon">
                <use xlink:href="/img/icons.svg#icon-calendar"></use></svg
              ><span class="overview-box__label">Next date</span
              ><span class="overview-box__text">{{ dateString }}</span>
            </div>
            <div class="overview-box__detail">
              <svg class="overview-box__icon">
                <use xlink:href="/img/icons.svg#icon-trending-up"></use></svg
              ><span class="overview-box__label">Difficulty</span
              ><span class="overview-box__text">{{ tour.difficulty }}</span>
            </div>
            <div class="overview-box__detail">
              <svg class="overview-box__icon">
                <use xlink:href="/img/icons.svg#icon-user"></use></svg
              ><span class="overview-box__label">Participants</span
              ><span class="overview-box__text">{{
                tour.maxGroupSize + ' people'
              }}</span>
            </div>
            <div class="overview-box__detail">
              <svg class="overview-box__icon">
                <use xlink:href="/img/icons.svg#icon-star"></use></svg
              ><span class="overview-box__label">Rating</span
              ><span class="overview-box__text"
                >{{ tour.ratingsAverage }} / 5</span
              >
            </div>
          </div>
          <div class="overview-box__group">
            <h2 class="heading-secondary ma-bt-lg">Your tour guides</h2>

            <ul>
              <li
                v-for="guide in tour.guides"
                :key="guide._id"
                class="overview-box__detail"
              >
                <img
                  class="overview-box__img"
                  v-bind:src="'/img/users/' + guide.photo"
                  alt="Miyah Myles"
                /><span class="overview-box__label">{{
                  guide.role.split('-').join(' ')
                }}</span
                ><span class="overview-box__text">{{ guide.name }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="description-box">
        <h2 class="heading-secondary ma-bt-lg">About {{ tour.name }} tour</h2>
        <p class="description__text">
          {{ tour.description }}
        </p>
      </div>
    </section>
    <section class="section-pictures">
      <div
        class="picture-box"
        v-for="(pic, index) in tour.images"
        :key="pic.index"
      >
        <img
          v-bind:class="'picture-box__img picture-box__img--' + (index + 1)"
          :src="'/img/tours/' + pic"
          :alt="tour.name + 'Tour' + (index + 1)"
        />
      </div>
    </section>
    <section class="section-map">
      <Map :tour="tour" />
    </section>
    <section class="section-reviews">
      <div class="reviews">
        <div class="reviews__card">
          <div class="reviews__avatar">
            <img
              class="reviews__avatar-img"
              src="/img/users/user-2.jpg"
              alt="Lourdes Browning"
            />
            <h6 class="reviews__user">Lourdes Browning</h6>
          </div>
          <p class="reviews__text">
            Cras mollis nisi parturient mi nec aliquet suspendisse sagittis eros
            condimentum scelerisque taciti mattis praesent feugiat eu nascetur a
            tincidunt
          </p>
          <div class="reviews__rating">
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="/img/icons.svg#icon-star"></use></svg
            ><svg class="reviews__star reviews__star--active">
              <use xlink:href="/img/icons.svg#icon-star"></use></svg
            ><svg class="reviews__star reviews__star--active">
              <use xlink:href="/img/icons.svg#icon-star"></use></svg
            ><svg class="reviews__star reviews__star--active">
              <use xlink:href="/img/icons.svg#icon-star"></use></svg
            ><svg class="reviews__star reviews__star--active">
              <use xlink:href="/img/icons.svg#icon-star"></use>
            </svg>
          </div>
        </div>
        <div class="reviews__card">
          <div class="reviews__avatar">
            <img
              class="reviews__avatar-img"
              src="/img/users/user-3.jpg"
              alt="Sophie Louise Hart"
            />
            <h6 class="reviews__user">Sophie Louise Hart</h6>
          </div>
          <p class="reviews__text">
            Pulvinar taciti etiam aenean lacinia natoque interdum fringilla
            suspendisse nam sapien urna!
          </p>
          <div class="reviews__rating">
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="/img/icons.svg#icon-star"></use></svg
            ><svg class="reviews__star reviews__star--active">
              <use xlink:href="/img/icons.svg#icon-star"></use></svg
            ><svg class="reviews__star reviews__star--active">
              <use xlink:href="/img/icons.svg#icon-star"></use></svg
            ><svg class="reviews__star reviews__star--active">
              <use xlink:href="/img/icons.svg#icon-star"></use></svg
            ><svg class="reviews__star reviews__star--inactive">
              <use xlink:href="/img/icons.svg#icon-star"></use>
            </svg>
          </div>
        </div>
        <div class="reviews__card">
          <div class="reviews__avatar">
            <img
              class="reviews__avatar-img"
              src="/img/users/user-9.jpg"
              alt="Cristian Vega"
            />
            <h6 class="reviews__user">Cristian Vega</h6>
          </div>
          <p class="reviews__text">
            Sem feugiat sed lorem vel dignissim platea habitasse dolor suscipit
            ultricies dapibus
          </p>
          <div class="reviews__rating">
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="/img/icons.svg#icon-star"></use></svg
            ><svg class="reviews__star reviews__star--active">
              <use xlink:href="/img/icons.svg#icon-star"></use></svg
            ><svg class="reviews__star reviews__star--active">
              <use xlink:href="/img/icons.svg#icon-star"></use></svg
            ><svg class="reviews__star reviews__star--active">
              <use xlink:href="/img/icons.svg#icon-star"></use></svg
            ><svg class="reviews__star reviews__star--active">
              <use xlink:href="/img/icons.svg#icon-star"></use>
            </svg>
          </div>
        </div>
        <div class="reviews__card">
          <div class="reviews__avatar">
            <img
              class="reviews__avatar-img"
              src="/img/users/user-14.jpg"
              alt="Laura Sarah Wilson"
            />
            <h6 class="reviews__user">Laura Sarah Wilson</h6>
          </div>
          <p class="reviews__text">
            Blandit varius nascetur est felis praesent lorem himenaeos pretium
            dapibus tellus bibendum consequat ac duis
          </p>
          <div class="reviews__rating">
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="/img/icons.svg#icon-star"></use></svg
            ><svg class="reviews__star reviews__star--active">
              <use xlink:href="/img/icons.svg#icon-star"></use></svg
            ><svg class="reviews__star reviews__star--active">
              <use xlink:href="/img/icons.svg#icon-star"></use></svg
            ><svg class="reviews__star reviews__star--active">
              <use xlink:href="/img/icons.svg#icon-star"></use></svg
            ><svg class="reviews__star reviews__star--active">
              <use xlink:href="/img/icons.svg#icon-star"></use>
            </svg>
          </div>
        </div>
        <div class="reviews__card">
          <div class="reviews__avatar">
            <img
              class="reviews__avatar-img"
              src="/img/users/user-15.jpg"
              alt="Max Smith"
            />
            <h6 class="reviews__user">Max Smith</h6>
          </div>
          <p class="reviews__text">
            Tempor pellentesque eu placerat auctor enim nam suscipit tincidunt
            natoque ipsum est.
          </p>
          <div class="reviews__rating">
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="/img/icons.svg#icon-star"></use></svg
            ><svg class="reviews__star reviews__star--active">
              <use xlink:href="/img/icons.svg#icon-star"></use></svg
            ><svg class="reviews__star reviews__star--active">
              <use xlink:href="/img/icons.svg#icon-star"></use></svg
            ><svg class="reviews__star reviews__star--active">
              <use xlink:href="/img/icons.svg#icon-star"></use></svg
            ><svg class="reviews__star reviews__star--active">
              <use xlink:href="/img/icons.svg#icon-star"></use>
            </svg>
          </div>
        </div>
        <div class="reviews__card">
          <div class="reviews__avatar">
            <img
              class="reviews__avatar-img"
              src="/img/users/user-19.jpg"
              alt="John Riley"
            />
            <h6 class="reviews__user">John Riley</h6>
          </div>
          <p class="reviews__text">
            Magna magnis tellus dui vivamus donec placerat vehicula erat turpis
          </p>
          <div class="reviews__rating">
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="/img/icons.svg#icon-star"></use></svg
            ><svg class="reviews__star reviews__star--active">
              <use xlink:href="/img/icons.svg#icon-star"></use></svg
            ><svg class="reviews__star reviews__star--active">
              <use xlink:href="/img/icons.svg#icon-star"></use></svg
            ><svg class="reviews__star reviews__star--active">
              <use xlink:href="/img/icons.svg#icon-star"></use></svg
            ><svg class="reviews__star reviews__star--active">
              <use xlink:href="/img/icons.svg#icon-star"></use>
            </svg>
          </div>
        </div>
      </div>
    </section>
    <section class="section-cta">
      <div class="cta">
        <div class="cta__img cta__img--logo">
          <img src="/img/logo-white.png" alt="Natours logo" />
        </div>
        <img
          class="cta__img cta__img--1"
          src="/img/tours/tour-2-2.jpg"
          alt="Tour picture"
        /><img
          class="cta__img cta__img--2"
          src="/img/tours/tour-2-3.jpg"
          alt="Tour picture"
        />
        <div class="cta__content">
          <h2 class="heading-secondary">What are you waiting for?</h2>
          <p class="cta__text">
            7 days. 1 adventure. Infinite memories. Make it yours today!
          </p>
          <button
            class="btn btn--green span-all-rows"
            id="book-tour"
            data-tour-id="5c88fa8cf4afda39709c2955"
          >
            Book tour now!
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Map from '@/components/Map.vue';

export default {
  props: ['tourName', 'tour', 'dateString'],

  components: { Map },
};
</script>

<style>
</style>
